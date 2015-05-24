var express = require('express'),
	path = require('path'),
	app = express(),
	port = 4080;

app.use(express.static('public'));

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});

app.listen(port);

console.log('Listening on rule #' + port + '...');
