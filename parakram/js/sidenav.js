if($('.userprofile').hasClass('active')){

	var form_data = new FormData();
		form_data.append("operation", "display_data");

	$.ajax({
			type: 'POST',
			url: "./ajax/userprofile.php",
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			success: function (text) {
				if (text) {
					$('#form_text').html(text);
				}
				else {
					alert("Error Occured!!");
				}

			},
			error: function (text) {
				alert("Error Occured!!");
			}
		});
}