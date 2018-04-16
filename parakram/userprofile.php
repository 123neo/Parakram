<?php
    session_start();
    if(!isset($_SESSION['fullname'])){
        header("Location: login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>User Profile</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
  <style>
    .text{
      padding-top: 15px;
    }
    .form{
      padding: 20px 20px 20px 20px;
    }

    .header{
      padding-left: 20px;
      padding-top: 20px;
      background-color:   #EDF0F1;
      height: 150px;
    }
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    .area{
      background-color: white;
    }
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
      <?php include "sidenav.php"; ?>
      <div class="col-sm-9" id="dashboard">
        <div class="row header">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

            <img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:100%">

          </div>
          <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 text">
            <h1>PARAKRAM Dashboard</h1>
          </div>
        </div>
       <div class="row area">
          
          <div class="row container-fluid">
              <center><u><b><h3> USER PROFILE<h3></b></u></center>


          </div>
          <div class="row container-fluid">
            <div class="form" id="form_text">
              <form class="form-horizontal" role="form">
              
          
              <div class="row ">
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <label >Full Name:</label>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                          <input class="form-control" type="text" id="fullname" value=<?php echo '"'.$_SESSION['fullname'].'"'?> >
                                  <div id="name_x"></div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <label>Contact:</label>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                  <input class="form-control" type="text" id="contact" value=<?php echo '"'.$_SESSION['contact'].'"'?> >
                                  <div id="contact_x"></div>
                              </div>
              </div>
              <br>
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>Email:</label>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                                        <input class="form-control" type="text" id="email" value=<?php echo '"'.$_SESSION['email'].'"'?> >
                                <em id="email_" style=" color:red;"></em>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>College:</label>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                <input class="form-control" type="text" id="college" value=<?php echo '"'.$_SESSION['college'].'"'?> >
                <em id="contact_group_" style=" color:red;"></em>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>Course:</label>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                                        <input class="form-control" type="text" id="course" value=<?php echo '"'.$_SESSION['course'].'"'?> >
                                <em id="email_" style=" color:red;"></em>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>Branch:</label>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                <input class="form-control" type="text" id="branch" value=<?php echo '"'.$_SESSION['branch'].'"'?> >
                <em id="contact_group_" style=" color:red;"></em>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <label>Year:</label>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-10 col-xs-10">
                                        <input class="form-control" type="text" id="year" value=<?php echo '"'.$_SESSION['year'].'"'?> >
                                <em id="email_" style=" color:red;"></em>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <center><button class="btn btn-success" id="update">Update</button></center>
              </div>
            </div>
            
          </form>
            </div>
          </div>

          <!--<h4><small>RECENT POSTS</small></h4>
          <hr>
          <h2>I Love Food</h2>
          <h5><span class="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
          <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
          <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br><br>
          
          <h4><small>RECENT POSTS</small></h4>
          <hr>
          <h2>Officially Blogging</h2>
          <h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
          <h5><span class="label label-success">Lorem</span></h5><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <hr>

          <h4>Leave a Comment:</h4>
          <form role="form">
            <div class="form-group">
              <textarea class="form-control" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
          </form>
          <br><br>
          
          <p><span class="badge">2</span> Comments:</p><br>
          
          <div class="row">
            <div class="col-sm-2 text-center">
              <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
            </div>
            <div class="col-sm-10">
              <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
              <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <br>
            </div>
            <div class="col-sm-2 text-center">
              <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
            </div>
            <div class="col-sm-10">
              <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
              <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <br>
              <p><span class="badge">1</span> Comment:</p><br>
              <div class="row">
                <div class="col-sm-2 text-center">
                  <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
                </div>
                <div class="col-xs-10">
                  <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
                  <p>Me too! WOW!</p>
                  <br>
                </div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
  </div>
</div>

<footer class="container-fluid">
  <p>Footer Text</p>
</footer>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="js\userprofile.js"></script>
</html>
