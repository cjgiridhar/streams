// faye instance
var Faye   = require('faye');

// import pattern module
var patterns = require('patterns');

function apply_patterns(list) {
        var result = 0;
        patterns.items.forEach(function(item) {
                result = result || item(list);
        });
        return (result);
}

// client instance and connect()
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

// init buffer of 5 elements
var buffer = [0,0,0,0,0];
var sub = client.subscribe('/inChannel', function(message) {
                var result = apply_patterns(buffer);
		if (result) {
			console.log("Pattern matched:" +buffer);
			var pub = client.publish('/outChannel', { text : buffer 			});
		}
                buffer.shift();
                buffer.push(message.text);
});
