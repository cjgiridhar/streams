// faye instance
var Faye   = require('faye');
var pattern = require('pattern');

//client instance
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

var buffer = [];
client.subscribe('/inChannel', function(message) {
        if(buffer.length == 5) {
		if(pattern.apply_patterns(buffer)) {
			console.log(buffer);
			client.publish('/outChannel', {text : buffer});
		}
                buffer.shift();
                buffer.push(message.text);
        } else {
                buffer.push(message.text);
        }
});

//callback = function(buffer) {
//	console.log(pattern.apply_patterns(buffer));
//	}

