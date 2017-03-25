$(function() {
	$('#login').on('click', function(event) {
		event.preventDefault();
		var user = {
			username: $('#l_username').val(),
			password: $('#l_password').val()
		}
		$.ajax({
			url: '/login',
			type: 'POST',
			dataType: 'json',
			data: user,
		})
		.done(function(res) {
			console.log(res);
			if (res.success) {
				alert("登录成功");
			} else {
				alert("登录失败");
			}
		})
	});

	$('#sign_up').on('click', function(event) {
		event.preventDefault();
		var user = {
			username: $('#s_username').val(),
			password: $('#s_password').val(),
			email: $('#email').val()
		}
		$.ajax({
			url: '/sign_up',
			type: 'POST',
			dataType: 'json',
			data: user,
		})
		.done(function(res) {
			console.log(res);
			if (res.success) {
				alert("注册成功");
			}
		})
	});
})