var http = require('http'),
    url = require('url');

var server = http.createServer(function (request, response) {
  if ( request.url === "/need" ) {
    processNeed(request, response);
  } else {
    notFound(request, response);
  }
});

function processNeed (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("You have a need.");
}

function notFound (request, response) {
  console.log("404: " + request.url);
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.end("Page not found.");
}

server.listen(3000);

console.log("St. Louis is Listening on Port 3000.");