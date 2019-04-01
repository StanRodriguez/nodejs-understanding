var http = require('http');

var dt = require('./myfirstmodule.js')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! Today is' + dt.myDateTime());
}).listen(8080);