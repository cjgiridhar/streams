// faye instance
var Faye   = require('faye');

// import pattern module
var patterns = require('patterns');

// client instance and connect()
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

// init buffer of 5 elements
var buffer = [0,0,0,0,0];
var results = 0;

function apply_patterns(list, callback) {
        patterns.items.forEach(function(item) {
                results = results || item(list);
		process.nextTick(function() {  callback(results); });
                });

}
var sub = client.subscribe('/inChannel', function(message) {
                apply_patterns(buffer, function(error,result){ 
		});
		if (results) {
			console.log("Pattern matched:" +buffer);
			var pub = client.publish('/outChannel', { text : buffer });
			}
		results = 0;
                buffer.shift();
                buffer.push(message.text);

});

