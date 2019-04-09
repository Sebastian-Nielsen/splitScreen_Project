const express    = require('express'),
      path       = require('path'),
			bodyParser = require('body-parser');

const baseRouter = require('./routes/index.js');

const app = express();



app.use('/', express.static(path.join(__dirname, '/public')),
		         express.static(path.join(__dirname, '/components')),
		         express.static(path.join(__dirname, '/build')))
	            .use(bodyParser.urlencoded({ extended: false }))
	            .set('views', path.join(__dirname, '/views'))
	            .set('view engine', 'pug')
	            .set('view engine', 'jsx');

app.use('/', baseRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Listening on port ${PORT} ✅`));


