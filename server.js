'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var dns = require("dns");
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.post("/api/shorturl/new", function(req,res){
  
  let regex = /https:\/\//;
  
  console.log(req.body.url)
  
  dns.lookup("https://www.google.com", function(err,res){
    if(err) return console.log(err)
    console.log(res)
  })
  
  
})

app.listen(port, function () {
  console.log('Node.js listening ...');
});