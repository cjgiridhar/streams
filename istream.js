// faye instance
var Faye   = require('faye');
var fs = require('fs');

//client instance
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

// Create input stream
var readStream = fs.ReadStream("./numbers.txt");
readStream.setEncoding('ascii'); 

var buf = '';
readStream.on('data', function(textData) {
	buf += textData;
	var lines = buf.split("\n");
	for(var i = 0, i < lines.length; i++) {
		client.publish('/inChannel', {text : lines[i]});
	    }
	});

readStream.on('close', function () {
	console.log('Finished');
	});
	
	



