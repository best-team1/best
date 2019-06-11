const Express= requre("express");
const BodyParser = require("body-parser");
const MongoClient =require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencode({extended:true}));


app.get("/hi",(require,response) =>{
	response.send("Hello world jia");

});


module.exports=app;
const CONNECTTON_URL="INSERT YOUR MONGODB CONNECTION URL HERE";
const DATABASE_NAME="Lab10";

app.post("/notes",(request,response) =>{

	MongoClient.connect(CONNECTION_URL,{useNewUrlParser:true},(error,client) =>{

	  if (error){
	  	response.send(error);
	  	throw error;
	  }	
	  database = client.db(DATABASE_NAME);
	  collection=database.collection("Notes");
	  collection.insert( request.body,(error,request)=>{
	  	if(error){
	  		return response.status(500).send(error);
	  	}
	  	response.send(result.result);
	  });
	});
});



app.post("/notes/:id",(request,response) =>{

	MongoClient.connect(CONNECTION_URL,{useNewUrlParser:true},(error,client) =>{

	  if (error){
	  	response.send(error);
	  	throw error;
	  }	
	  database = client.db(DATABASE_NAME);
	  collection=database.collection("Notes");
	  collection.insert( request.body,(error,request)=>{
	  	if(error){
	  		return response.status(500).send(error);
	  	}
	  	var numberID =parseInt(request.params.id);
	  	if(numberID>= result.length)
	  	response.send("Not enough element in database")
	   else	
	  	response.send(result.result);
	  });
	});
});



	)