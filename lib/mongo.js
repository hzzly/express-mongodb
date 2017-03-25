var config = require('../config')

var mongoose = require("mongoose");

var db = mongoose.connect(config.mongodb);

module.exports = db