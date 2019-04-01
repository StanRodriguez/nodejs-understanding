var http = require('http');

var uc = require('upper-case');

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});//200 = status = OK, content is html format
	res.write(uc('Hello World!')); //write a response to the client
	res.write(req.url);//part of the url that comes after the domain ie google.com/summer = /summer
	res.end(); //end the response

}).listen(8080); //the server object listens on port 8080