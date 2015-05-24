var express = require('express'),
	path = require('path'),
	app = express(),
	port = 4080;

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});

app.listen(port);

console.log('Listening on rule #' + port + '...');
