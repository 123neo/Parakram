$('.dashboard').addClass("active");
$("#registeration_table").DataTable({
    
   
    
    
    dom: 'Bfrtip',
        buttons: [
            {
                extend:    'copyHtml5',
                text:      '<div class="text-center"><i class="fa fa-files-o"></i></div>',
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<div class="text-center"><i class="fa fa-file-excel-o"></i></div>',
                titleAttr: 'Excel'
            },
            {
                extend:    'csvHtml5',
                text:      '<div class="text-center"><i right;" class="fa fa-file-text-o"></i></div>',
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<div class="text-center"><i class="fa fa-file-pdf-o"></i></div>',
                titleAttr: 'PDF'
            }
        ],


    "ajax": {
		type: "POST",
		url: "./ajax/dashboard_admin.php",
		data: {
			operation: "fetch_registeration_data_table"
		}
	}
    
   
   
  
});

function delete_team_data(team) {

     var txt;
     var r = confirm("Are you sure you want to Delete Entry!");
        if (r == true) {
    
            var team_id = team.getAttribute('data-team_id');
            var user_id = team.getAttribute('data-user_id');
            var dep = team.getAttribute('data-dep');
            var event_name = team.getAttribute('data-event_name');

            var form_data = new FormData();
            form_data.append('team_id', team_id);
            form_data.append('user_id', user_id);
            form_data.append('dep', dep);
            form_data.append('event_name', event_name);
            form_data.append('operation', 'delete_team_data');

        $.ajax({
                        type: 'post',
                        url: "./ajax/dashboard_admin.php",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        success: function (data) {
                            if (data == 1) {
                                
                               alert("Team Registration Deleted!!");
                               window.location.reload();
                            }
                            else if(data == 2){
                                alert("Error Occured!!");
                            }
                        },
                        error: function (data) {
                            alert("Error Occured!!");
                        }
                    });
        }
        
    
}

function editdata(client) {

        $("#edit").show();

        var payment = client.getAttribute('data-payment_confirm');
        
        
            
        $('#user_id').val(client.getAttribute('data-user_id'));
        $('#payment').val(payment);
        
}

$('#submit').click(function(){

    var user_id = $('#user_id').val().trim();
    var payment_confirm = $('#payment').val().trim();

    var form_data = new FormData();
    form_data.append('user_id', user_id);
    form_data.append('payment_confirm', payment_confirm);
    form_data.append('operation', 'payment_confirm_data');

    $.ajax({
                        type: 'post',
                        url: "./ajax/dashboard_admin.php",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        success: function (data) {
                            if (data == 1) {
                                
                               window.location.reload();
                            }
                            else if(data == 2){
                                alert("Wrong Credentials!!");
                            }
                            

                        },
                        error: function (data) {
                            alert("Error Occured!!");
                        }
                    });

});

function edit1data(client) {

        $("#edit1").show();

        var payment = client.getAttribute('data-payment');
        
        
            
        $('#team_id').val(client.getAttribute('data-team_id'));
        $('#payment1').val(payment);
        
}

$('#submit1').click(function(){

    var team_id = $('#team_id').val().trim();
    var payment = $('#payment1').val().trim();

    var form_data = new FormData();
    form_data.append('team_id', team_id);
    form_data.append('payment', payment);
    form_data.append('operation', 'payment1_confirm_data');

    $.ajax({
                        type: 'post',
                        url: "./ajax/dashboard_admin.php",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        success: function (data) {
                            if (data == 1) {
                                
                               window.location.reload();
                            }
                            else if(data == 2){
                                alert("Wrong Credentials!!");
                            }
                            

                        },
                        error: function (data) {
                            alert("Error Occured!!");
                        }
                    });

});

function delete_user_data(user_id){

var r = confirm("Are you sure you want to Delete Entry!");
    if (r == true) {
    $.post("./ajax/dashboard_admin.php", {
            id: user_id,
            operation: "delete_user_data"
        },
        function (data) {
            if (data == 1) {
                alert("User Data Deleted!!");
                    window.location.reload(true);
            }
            else {
                alert("Error Occured");
            }
        });
    }
}

$("#user_table").DataTable({
    
   
    
    
    dom: 'Bfrtip',
        buttons: [
            {
                extend:    'copyHtml5',
                text:      '<div class="text-center"><i class="fa fa-files-o"></i></div>',
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<div class="text-center"><i class="fa fa-file-excel-o"></i></div>',
                titleAttr: 'Excel'
            },
            {
                extend:    'csvHtml5',
                text:      '<div class="text-center"><i right;" class="fa fa-file-text-o"></i></div>',
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<div class="text-center"><i class="fa fa-file-pdf-o"></i></div>',
                titleAttr: 'PDF'
            }
        ],


    "ajax": {
        type: "POST",
        url: "./ajax/dashboard_admin.php",
        data: {
            operation: "fetch_user_data_table"
        }
    }
    
   
   
  
});

$("#registeration1_table").DataTable({
    
   
    
    
    dom: 'Bfrtip',
        buttons: [
            {
                extend:    'copyHtml5',
                text:      '<div class="text-center"><i class="fa fa-files-o"></i></div>',
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<div class="text-center"><i class="fa fa-file-excel-o"></i></div>',
                titleAttr: 'Excel'
            },
            {
                extend:    'csvHtml5',
                text:      '<div class="text-center"><i right;" class="fa fa-file-text-o"></i></div>',
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<div class="text-center"><i class="fa fa-file-pdf-o"></i></div>',
                titleAttr: 'PDF'
            }
        ],


    "ajax": {
        type: "POST",
        url: "./ajax/dashboard_admin.php",
        data: {
            operation: "fetch_registeration1_data_table"
        }
    }
    
   
   
  
});

function delete_team1_data(team) {

     var txt;
     var r = confirm("Are you sure you want to Delete Entry!");
        if (r == true) {
    
            var team_id = team;
            
            var form_data = new FormData();
            form_data.append('team_id', team_id);
            form_data.append('operation', 'delete_team1_data');

        $.ajax({
                        type: 'post',
                        url: "./ajax/dashboard_admin.php",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        success: function (data) {
                            if (data == 1) {
                                
                               alert("Team Registration Deleted!!");
                               window.location.reload();
                            }
                            else if(data == 2){
                                alert("Error Occured!!");
                            }
                        },
                        error: function (data) {
                            alert("Error Occured!!");
                        }
                    });
        }
        
    
}



