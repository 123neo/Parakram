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
		url: "./ajax/dashboard.php",
		data: {
			operation: "fetch_registeration_data_table"
		}
	}
    
   
   
  
});

function deletedata(team) {

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
            form_data.append('operation', 'delete_data');

        $.ajax({
                        type: 'post',
                        url: "./ajax/dashboard.php",
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

