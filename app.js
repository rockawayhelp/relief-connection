var http = require('http'),
    url = require('url'),
    qs = require('querystring'),
    geocoder = require('geocoder');

var server = http.createServer(function (request, response) {
  if ( request.url === "/need" ) {
    processNeed(request, response);
  } else {
    notFound(request, response);
  }
});

function processNeed (request, response) {
  geocoder.geocode("222 Beach 100th Street, 11694", function ( err, data ) {
    if (err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.end("Something went wrong.")
    } else {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(data));
    }
  });
}

function notFound (request, response) {
  console.log("404: " + request.url);
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.end("Resource not found.");
}

var port = process.env.PORT || 3000;

server.listen(port);
console.log("St. Louis is Listening on Port " + port + ".");