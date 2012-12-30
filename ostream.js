// faye instance
var Faye   = require('faye');

// Import pattern module
var pattern = require('pattern1');

// Client instance and connect()
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

function outchannel(buffer) {
                        var pub = client.publish('/outChannel', {
                                text : buffer
                        });
}

// Init buffer of 5 elements
var buffer = [0,0,0,0,0];

// Read buffer on subscribed inChannel
var sub = client.subscribe('/inChannel', function(message) {
                pattern.apply_patterns(buffer, function(result) {
		//console.log("in async");
		if (result) {
			//console.log("Pattern matched:" +buffer);
			var pub = client.publish('/outChannel', { text : buffer });
			}
		});
		//console.log("out async");
                buffer.shift();
		
                buffer.push(message.text);
});

