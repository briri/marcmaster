'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var router = require('./router.js');

var server = express();

server.set('views', __dirname.replace('/lib', '/views'));
server.use(bodyParser.urlencoded({extended: false}));
server.use('/', router);

module.exports = server;