// faye instance
var Faye   = require('faye');
var fs = require('fs');

//client instance
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

var readStream = fs.ReadStream("/home/ubuntu/node/numbers.txt",  { bufferSize: 1024});
readStream.setEncoding('ascii'); // This is key; otherwise we'd be using buffers

var buf = '';
readStream.on('data', function(textData) {
	buf += textData;
	var lines = buf.split("\n");
	for(var i = 0, iMax = lines.length; i < iMax; i++) {
		client.publish('/inChannel', {text : lines[i]});
	    }
	});

readStream.on('close', function () {
	console.log('Finished');
	});
	
	



