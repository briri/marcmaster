'use strict';

var express = require('express');

var router = express.Router();

router.use(function(req, res, next){
	console.log('Request in: ', Date.now());
	next();
});

router.get('/', function(req, res){
	res.render('index', {message: 'MarcMaster'});
});

module.exports = router;