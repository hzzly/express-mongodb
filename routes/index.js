var express = require('express');
var router = express.Router();

var api = require('../lib/api');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index');
});

router.post('/login', function(req, res, next) {
	var user = {
		username : req.body.username,
		password: req.body.password
	};
	api.findOne(user)
		.then(result => {
			console.log(result)
			if (result) {
				//通过json数据发送给前端
				res.json({
		   			"data" : result,
		   			"success": true
		   		})
			} else {
				res.json({
		   			"success": false
		   		})	
			}
		})
})

router.post('/sign_up', function(req, res, next) {
	var user = {
		username : req.body.username,
		password: req.body.password,
		email: req.body.email
	};
	api.save(user)
		.then(result => {
			console.log(result)
			if (result) {
				res.json({
					data: result,
					success: true
				})
			} else {
				res.json({
					data: result,
					success: false
				})
			}			
		})
})

router.get('/user_list', function(req, res, next) {
	//返回所有用户
	api.find({})
		.then(result => {
			console.log(result)			
		})
	//返回只包含一个键值name、age的所有记录
	api.find({},{name:1, age:1, _id:0})
		.then(result => {
			console.log(result)			
		})
	//返回所有age大于18的数据
	api.find({"age":{"$gt":18}})
		.then(result => {
			console.log(result)			
		})
	//返回20条数据
	api.find({},null,{limit:20})
		.then(result => {
			console.log(result)			
		})
	//查询所有数据，并按照age降序顺序返回数据
	api.find({},null,{sort:{age:-1}}) //1是升序，-1是降序
		.then(result => {
			console.log(result)			
		})
})

module.exports = router;
