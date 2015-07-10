'use strict';

var bunyan = require('bunyan');

var streams = {level: CONFIG.log_level};
if (CONFIG.log_name) {
  streams.path = CONFIG.log_path + CONFIG.log_name;
} else {
  streams.stream = process.stdout;
}
var log = bunyan.createLogger({name: 'marc_master', streams: [streams]});

module.exports = log;