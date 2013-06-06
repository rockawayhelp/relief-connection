var http = require('http')
  , twilio = require('twilio');

var server = http.createServer(function (request, response) {
  console.log(request);
  response.end("Hello world.");
});

var port = process.env.PORT || 3000;

server.listen(port);
console.log("St. Louis is Listening on Port " + port + ".");