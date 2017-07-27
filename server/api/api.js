const canned = require('canned');
const http = require('http');
const path = require('path');
const opts = {
	logger: process.stdout,
	cors: true,
    cors_headers: ["Content-Type", "Location"],
     };

can = canned('C:/Dev/git/news-app/news-app/server/api/mocks/', opts);

console.log(__dirname + '/mocks');

http.createServer(can).listen(3003);
