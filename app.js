var http = require('http');
var hello = require('./hello');
var math = require('./math');

// Respond to HTTP Request
// req == Request object, provided by http package
// res == Response object, provided by http package
http.createServer(function(req, res) {
    // Create HTTP Response Header with status code 200 (OK)
    res.writeHead(200);

    // Write an HTTP Response Body by using the custom modules to get some content to send
    res.write(hello() + '\n\n');

    // Finish/End the Response
    res.end();
}).listen(3000);  // Set port to listen on

console.log("Listening on port 3000");
