// faye instance
var Faye   = require('faye');

// import pattern module
var patterns = require('patterns');

// client instance and connect()
var client = new Faye.Client('http://localhost:8000/faye', {timeout : 120});
client.connect();

// init buffer of 5 elements
var buffer = [0,0,0,0,0];
//var results = 0;

function apply_patterns(list,callback) {
        patterns.items.forEach(function(item) {
			var results = 0;
			process.nextTick(function() {
		 		results = results || item(list);
				if (results) { 
					console.log("Pattern matched:" +list); 
					var pub = client.publish('/outChannel', { text : list });
				}
			});
		});
	}
var sub = client.subscribe('/inChannel', function(message) {
		var buf1 = buffer.slice();
                apply_patterns(buf1, function(error, result) {
		});
                buffer.shift();
                buffer.push(message.text);

});
