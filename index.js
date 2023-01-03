const express = require('express');
const app = express();

/* DEFINE ROUTERS */
var wakfuApi = require('./routes/wakfu');
var jokeOfTheDayApi = require('./routes/jokeoftheday');
var noredGameServers = require('./routes/gameservers');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

/*
Wakfu Express Hosted API Calls
*/

app.use('/api/wakfu', wakfuApi);

/*
Nored Game Server Express Hosted API Calls
*/

app.use('/api/gameservers', noredGameServers);

/*
Sample Joke of the Day Call
*/

app.use('/api/jokes/jod', jokeOfTheDayApi);

// PORT
// Default to 3000. Docker should allow customizing the Port of the Docker Container (3000) -> Docker Host (AnyPort)
const PORT = 3000;
app.listen(PORT, () => console.log("listening on port 3000..."));
