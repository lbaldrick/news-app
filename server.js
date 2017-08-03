const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.get('/news/all', (req, res) => {
    fs.readFile(__dirname + '/server/api/mocks/news/all/any.get.json', 'utf8', function (err,data) {
        res.status(200).send({ articles: JSON.parse(data) });
    });
});

app.get('/news/sources', (req, res) => {
    fs.readFile(__dirname + '/server/api/mocks/news/sources/any.get.json', 'utf8', function (err,data) {
        res.status(200).send(JSON.parse(data));
    });
});


app.listen(3003);



