var express = require("express");
var request = require("superagent");
var fs = require('fs');
var path =require('path');
var bodyParser = require("body-parser");
var PORT = process.env.port || 3000;
var util = require('util');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

app.get('/popular-crimes', function(req,res) {
    var url = 'NflArrest/api/v1/crime';

    request
    .get(url)
    .end(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data.text);
        }
    });
});


app.listen(PORT, function() {
    console.log('server started at port ' + PORT);
});
