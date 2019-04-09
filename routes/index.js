const console = require('../config/prettifyConsole');
console.init('[init router] base');
const bodyParser = require('body-parser');
const path = require('path');




const app = require('express').Router();


app.get('/', (req, res) => {
	console.log('[get:] "/"');
	res.render('homepage.pug')
});


module.exports = app;


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
	//console.log(req)
	const path = req._parsedUrl.path;
	if (path.match(/\//g).length >= 3) {
		console.log('File "routes.js" line ~51: HANDLE ERROR NOT DISPLAYING CORRECT'); // TODO
	}
	res.status(404).render("error.pug");
});


