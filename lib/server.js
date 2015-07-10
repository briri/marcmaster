'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var router = require('./router.js');

var server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));
server.use('/', router);

module.exports = server;