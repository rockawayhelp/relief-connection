module.exports = function (app) {
  
  app.get('/', function (request, response) {
    res.send("Hello world.")
  });
  
  app.post('/sms', function (request, response) {
    console.log( util.inspect(request.params ));
    res.send("Message received.");
  });
  
  return app;
}