var http = require('http')
  , qs = require('querystring')
  , util = require('util')
  , twilio = require('twilio');

var server = http.createServer(function (request, response) {
 var body = "";
  request.on('data', function (chunk) {
    body += chunk;
  });
  
  request.on('end', function () {
    console.log('Posted: ' + util.inspect(qs.parse(body)));
    response.writeHead(200);
    response.end("Hello world");
  });
});

var port = process.env.PORT || 3000;

server.listen(port);
console.log("St. Louis is Listening on Port " + port + ".");