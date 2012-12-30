// http and faye instances
var http = require('http'),
    faye = require('faye');

// mounting on /faye
var server = new faye.NodeAdapter({
  mount: '/faye',
  timeout: 120
});

server.listen(8000);
//server.getClient().publish('/email/new', {text:'Hi'});

