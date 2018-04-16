<div class="col-sm-3 sidenav">
      <!--<div class="row">
          <img src="cinqueterre.jpg" class="img-circle" alt="Cinque Terre" width="304" height="236"> 
      </div>-->

      <h3 class="well">Welcome <?php echo $_SESSION['fullname']; ?></h3>

      <div class="row">

          <h3 class="well text-success">Your User ID: <?php echo $_SESSION['id']; ?></h3> 
      </div>
      <div class="row">
        
        <ul class="nav nav-pills nav-stacked" style="color: purple;">
          <li class="dashboard"><a href="dashboard.php" style="color: white;">Dashboard</a></li>
          <li class="eventreg"><a href="eventreg.php" style="color: white;">Event Registration</a></li>
          <li class="userprofile"><a href= "userprofile.php" style="color: white;">User Profile</a></li>
          <li class="logout"><a href="logout.php" style="color: white;">Logout</a></li>
        </ul><br>
      </div>
</div>