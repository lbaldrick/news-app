const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const request = require('request');

const apiKey = '1e176fb171d146a790f117df1a1b5a76';
const defaultSource = 'ign';

const getArticles = (req, res, source) => {
    request
        .get(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`)
        .on('response', (response) => {
            console.log(response.statusCode);
        })
        .on('data', (data) => {
            res.status(200).send(data);
        })
        .on('error', (error) => {
            console.log('error');
        });
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.get('/news/all', (req, res) => {
    getArticles(req, res, defaultSource);

});

app.get('/news/filter/:source', (req, res) => {
    getArticles(req, res, req.params.source);
});

app.get('/news/sources', (req, res) => {
    fs.readFile(__dirname + '/server/api/mocks/news/sources/any.get.json', 'utf8', function (err,data) {
        const response = JSON.parse(data);
        response.selectedSources = [defaultSource];
        res.status(200).send(response);
    });
});




app.listen(3003);



