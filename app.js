'use strict';

var fs = require('fs');
var yaml = require('js-yaml');

var config = yaml.load(fs.readFileSync(process.cwd() + '/config/app.yaml', 'utf8'));
module.exports = global.CONFIG = config;

var log = require('./lib/logger.js');
module.exports = global.LOG = log;

var server = require('./lib/server.js');
	
server.listen(CONFIG.port, function(){
	LOG.info("MarcMaster listening on port " + CONFIG.port);
});


server.on('close', function(){
	LOG.info("MarcMaster no longer listening port " + CONFIG.port);
})

server.on('error', function(err){
	LOG.error("The server has encountered an error: ", err);
});
	

