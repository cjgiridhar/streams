// faye instance
var Faye   = require('faye');

// import pattern module
var pattern = require('pattern');

// client instance and connect()
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

// init buffer of 5 elements
var buffer = [0,0,0,0,0];
var sub = client.subscribe('/inChannel', function(message) {
                var result = pattern.apply_patterns(buffer);
		//console.log("in async");
		if (result) {
			//console.log("Pattern matched:" +buffer);
			var pub = client.publish('/outChannel', { text : buffer });
			}
		//console.log("out async");
                buffer.shift();
                buffer.push(message.text);
});
