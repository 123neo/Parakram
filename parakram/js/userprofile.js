$('.userprofile').addClass("active");

$('#update').click(function(){

	var fullname = $('#fullname').val().trim();
	var contact = $('#contact').val().trim();
	var email = $('#email').val().trim();
	var college = $('#college').val().trim();
	var course = $('#course').val().trim();
	var branch = $('#branch').val().trim();
	var year = $('#year').val().trim();

	var form_data = new FormData();
		form_data.append("fullname", fullname);
		form_data.append("contact", contact);
		form_data.append("email", email);
		form_data.append("college", college);
		form_data.append("course", course);
		form_data.append("branch", branch);
		form_data.append("year", year);
		form_data.append("operation", "update_data");

		/*var data = {
			"fullname" : fullname,
			"contact" : contact,
			"email" : email,
			"college" : college,
			"course" : course,
			"branch" : branch,
			"year" : year
		}
		
		var myJson = JSON.stringify(data);*/

		$.ajax({
			type: 'POST',
			url: "./ajax/userprofile.php",
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			
			success: function (data) {
				if (data == 1) {
					alert("User Profile Updated!!")
				}
				else {
					alert("Error Occured!!");
				}

			},
			error: function (data) {
				alert("Error Occured!!");
			}
		});
});