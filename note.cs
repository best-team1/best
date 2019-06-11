using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Json;
using System.Threading.Tasks;

public async Task<List<Note>> FetchtesFromDB()
{
	List<Note> tempNote = new List<Note>();
	using (var client = HttpClient())
    {
		var uri = "https://lab9.thaon.now.sh/notes";
		var result = await client.GetSteringAsync(uri);
		
		tempNotes = JsonCovert.DeserializeObject<List<Note>>(result);
	}
	
	return tempNotes;
}

public async Task<List<Note>> SaveNoteToDB(Note note)
{
	using (var client = new HttpClient())
	{
		var json = JsonConvert.SerializeObject(note);
		var content  =new StringContent(json,AEncoding.UTF8,"application/json");
		
		var uri = "https://lab9.thaon.now.sh/notes";
		var result = await client.PostAsync(uri,content);
		
		result.EnsureSuccessStatusCode();
	}
}