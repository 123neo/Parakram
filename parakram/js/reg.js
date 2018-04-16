
    $("#myBtn").click(function(){
        $("#myModal").modal();

        
    });

$('#submit').click(function(){

        	var team_member_1 = $('#team_member_1').val().trim();
        	var team_member_2 = $('#team_member_2').val().trim();
        	var team_member_3 = $('#team_member_3').val().trim();
        	var team_member_4 = $('#team_member_4').val().trim();
        	var team_member_5 = $('#team_member_5').val().trim(); 
        	var email = $('#email').val().trim();
        	var contact = $('#contact').val().trim();
        	var college = $('#college').val().trim();
        	var event = $('#event').val().trim();

        	var form_data = new FormData();
        	form_data.append('team_member_1', team_member_1);
			form_data.append('team_member_2', team_member_2);
			form_data.append('team_member_3', team_member_3);
			form_data.append('team_member_4', team_member_4);
			form_data.append('team_member_5', team_member_5);
			form_data.append('event', event);
			form_data.append('email', email);
			form_data.append('contact', contact);
			form_data.append('college', college);
			form_data.append('operation', 'data')

			$.ajax({
						type: 'post',
						url: "./ajax/reg.php",
						cache: false,
						contentType: false,
						processData: false,
						data: form_data,
						success: function (data) {
							var r = confirm("Click OK to proceed for payment!");
    						if (r == true) {
								if (data == 'robotics') {
					
			                   			window.location = "https://imjo.in/brrAEg";
			                   		}
			                   	else if(data == 'lan_gaming'){
			                   			window.location = "https://imjo.in/5DJgga";
			                   	}

			                   	else if(data == 'kart_wars'){

			                   			window.location = "https://imjo.in/kmZ8WZ";	
			                   	}

			                   	}
			                   alert("Registered Successfully");
						},
						error: function (data) {
							alert("Error Occured!!");
						}
					});        	
        });
