$('#submit').click(function(){

	var id = $('#user_id').val().trim();
	var pass = $('#password').val().trim();
	var confirm_pass = $('#confirm_password').val().trim();

	var form_data = new FormData();
	form_data.append("id", id);
	form_data.append("pass", pass);
	form_data.append("confirm_pass", confirm_pass);
	form_data.append("operation", "save_new_password");

	$.ajax({
			type: 'POST',
			url: "./ajax/resetpassword.php",
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			
			success: function (data) {
				if (data == 1) {
					alert("Your password has been changed successfully!! Go To Login")
				}
				else if(data == 2) {
					alert("Something Wrong!");
				}
				else if(data == 3){
					alert("Password Fields does not match!!");	
				}

			},
			error: function (data) {
				alert("Your password has been changed successfully!! Go To Login!!");
			}
		});


});