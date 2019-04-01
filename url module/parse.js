var url = require('url');

var http = require('http');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(q.host); //returns 'localhost:8080'
	res.write(q.pathname); //returns '/default.htm'
	res.write(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
	res.write(qdata.month);
  res.end();
}).listen(8080);