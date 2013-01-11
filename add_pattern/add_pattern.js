var http = require('http');
var fs = require('fs');
server = http.createServer( function(req, res) {

    var body = '';
    var args = '';
    var name = '';
    var pattern = '';

    if (req.url == '/pattern.html') {
        fs.readFile('pattern.html', function(err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            res.end();
        });
    }

    if(req.url =='/generate.html') {
	if(req.method == 'POST') {
		req.on('data', function(chunk) {
			body += chunk.toString();
		});
		req.on('end', function() {
		args = body.split('&');
		name = (args[0].split('='))[1];
		pattern = unescape((args[1].split('='))[1]);
                pattern = pattern.replace('a', 'list[0]');
                pattern = pattern.replace('b', 'list[1]');
                pattern = pattern.replace('c', 'list[2]');
                pattern = pattern.replace('d', 'list[3]');
                pattern = pattern.replace('e', 'list[4]');
		var func_string = 
		" var " + name + " = function(list) { var flag = 0; if( " + pattern + ") {flag = 1}; return flag; }";
		res.write(func_string);
		res.end();
		});
	   }
	}
});

server.listen(8080);
