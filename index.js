var redis = require('redis');
require('redis-scanstreams')(redis);

module.exports = redis;
