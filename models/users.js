var mongoose = require("mongoose");
var db = require('../lib/mongo');

var UserSchema = new mongoose.Schema({
	username : { type:String },
	password: {type: String},
	avatar: {type: String},
	age  : { type:Number, default:0 },
	description: { type: String},
	email: { type: String },
	github: { type: String },
	time : { type:Date, default:Date.now }
});

var UserModel = db.model("user", UserSchema );

module.exports = UserModel