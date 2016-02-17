var http = require('http');
var hello = require('./hello');
var math = require('./math');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(math.(6,5));                                                                                                                          :)
    res.end();
}).listen(3000);

console.log("Listening on port 3000");
