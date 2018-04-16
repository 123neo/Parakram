<?php   
    session_start();
    if(!isset($_SESSION['id'])){
    
    	if($_SESSION['id']!='12'){
       		 header("Location: login.php");	
       	}
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Dashboard</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css\jquery.dataTables.min.css">
    <link rel="stylesheet" href="css\dataTables.bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  
  <style>

    a:hover {
      color: black;
}
    .text{
      padding-top: 15px;
    }
    .header{
      padding-left: 20px;
      padding-top: 20px;
      background-color:   #8A2BE2;
      height: 150px;
    }
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #2F4F4F;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height: auto;} 
    }
  </style>
</head>
<body>

<div class="container-fluid">
  <div class="row content">
      <?php include "sidenav_admin.php"; ?>
      <div class="col-sm-9" id="dashboard">
        <div class="row header">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

            <img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:100%">

          </div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 text">
            <h1>PARAKRAM Dashboard</h1>
          </div>
          
        </div>
        <br>
        <div class="collapse" id="edit">
          <div class="container-fluid">
              <input type="hidden" id="user_id">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>Payment:</label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <select class="form-control" id="payment" style="max-width:15em;">
                    <option value="">SELECT PAYMENT</option>
                    <option value="successful">Successful</option>
                    <option value="pending">Pending</option>
                  </select>
              </div>
              <button class="btn btn-primary" id="submit">Submit</button>

          </div>
        </div>
        <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <table class="table table-bordered table-responsive" id="user_table">
                            <thead>
                                <tr>
                                   
                                   <th>User ID</th>
                                    <th>Full Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Plan</th>
                                    <th>Student</th>
                                    <th>Payment</th>
                                    <th>Option</th>
                                    
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
        </div>
        <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <table class="table table-bordered table-responsive" id="registeration_table">
                            <thead>
                                <tr>
                                   
                                   <th>Team ID</th>
                                    <th>Event Name</th>
                                    <th>Department</th>
                                    <th>Team Members</th>
                                    <th>College</th>
                                    <th>Option</th>
                                    
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
        </div>
       <br>

       <div class="collapse" id="edit1">
          <div class="container-fluid">
              <input type="hidden" id="team_id">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>Payment:</label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <select class="form-control" id="payment1" style="max-width:15em;">
                    <option value="">SELECT PAYMENT</option>
                    <option value="successful">Successful</option>
                    <option value="pending">Pending</option>
                  </select>
              </div>
              <button class="btn btn-primary" id="submit1">Submit</button>

          </div>
        </div>

       <div class="row">
            
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <table class="table table-bordered table-responsive" id="registeration1_table">
                            <thead>
                                <tr>
                                    <th>Team ID</th>
                                    <th>Event Name</th>
                                    <th>Team Members</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>College</th>
                                    <th>Payment</th>
                                    <th>Option</th>
                                    
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
        </div>
      </div>
  </div>
</div>

<footer class="container-fluid">
  <p>Footer Text</p>
</footer>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js\bootstrap.min.js"></script>
<script src="js\jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
    
    <script src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.colVis.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>
    <script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>
    <script src="//cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
<script src="js\dashboard_admin.js?ver=2.5"></script>
<script src="js\sidenav.js"></script>


</html>
