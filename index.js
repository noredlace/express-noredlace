const express = require('express');
const app = express();
const fetch = require("node-fetch");
const fs = require("fs");

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


/*
Sample Joke of the Day Call
*/

app.get('/api/jokes/jod', async (req, res) => {
	try {
		const api_url = 'https://api.jokes.one/jod';
		const fetch_response = await fetch(api_url);
		const json = await fetch_response.json();
		res.json(json);
	} catch (error) {
		res.json('{"Error": "' + error + '"}');
	}

});

/*
WAKFU API
*/

app.get('/api/wakfu/professions', async (req, res) => {

	try {
		professionList = []

		var professionsFolder = './WakfuRecipes/'
		fs.readdirSync(professionsFolder).forEach(file => {
			if (file != "README.md")
			{
				professionObject = new Object();
				professionObject.Profession = file.replace('.json', '');
				professionObject.ModifiedDate = fs.statSync(professionsFolder + file).ctime.toDateString();
				professionList.push(professionObject);
			}
		});

		res.json(professionList);
	} catch (error) {
		res.json('{"Error": "' + error + '"}');
	}

});

app.get('/api/wakfu/profession/:ProfessionName', async (req, res) => {
	var professionName = req.params.ProfessionName;
	professionName = professionName.toLocaleLowerCase();
	var professionFolder = './WakfuRecipes/';
	var professionFileName = professionName + ".json";
	var professionFilePath = professionFolder + professionFileName;

	try {
		var recipeJson = fs.readFileSync(professionFilePath, 'utf-8');

		res.json(JSON.parse(recipeJson));
	} catch (error) {
		res.json('{"Error": "' + error + '"}');
	}
});

/*
WAKFU API V2
*/

app.get('/api/wakfu/recipes', async (req, res) => {
	var recipesFilePath = './wakfu/recipes.json';

	try {
		var recipeJson = fs.readFileSync(recipesFilePath, 'utf-8');

		res.json(JSON.parse(recipeJson));
	} catch (error) {
		res.json('{"Error": "' + error + '"}');
	}
});


// PORT
// Default to 3000. Docker should allow customizing the Port of the Docker Container (3000) -> Docker Host (AnyPort)
const PORT = 3000;
app.listen(PORT, () => console.log("listening on port 3000..."));
