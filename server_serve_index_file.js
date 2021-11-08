const http = require('http');
const fs = require('fs');
const url = require('url');
const pathutil = require("path");

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((rq, rs) => {
	rs.statusCode = 200;
	rs.setHeader('Content-Type', 'text/html');
	const data = fs.readFileSync('./index.html');
	rs.end(data);
});

server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}`);
})
