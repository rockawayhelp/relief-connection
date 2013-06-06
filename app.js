var http = require('http'),
    geocoder = require('geocoder');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end("Hello world.");
});

var port = process.env.PORT || 3000;

server.listen(port);
console.log("St. Louis is Listening on Port " + port + ".");