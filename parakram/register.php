<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="css/login.css?ver1.2">
</head>
<body>

		<!-- REGISTRATION FORM -->
<div class="text-center" style="padding:50px 0">
	<div class="parakramlogo">

		<img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:20%">

	</div>
	<div class="logo">register</div>
	<!-- Main Form -->
	<div class="login-form-1">
		<form id="register-form" class="text-left">
			<div class="login-form-main-message"></div>
			<div class="main-login-form">
				<div class="login-group">
					<div class="form-group">
						<label for="reg_fullname" class="sr-only">Full Name</label>
						<input type="text" class="form-control" id="reg_fullname" name="reg_fullname" placeholder="full name">
					</div>
					<div class="form-group">
						<label for="reg_email" class="sr-only">Email</label>
						<input type="text" class="form-control" id="reg_email" name="reg_email" placeholder="email">
					</div>
					<div class="form-group">
						<label for="reg_contact" class="sr-only">Contact</label>
						<input type="text" class="form-control" id="reg_contact" name="reg_contact" placeholder="contact">
					</div>
					<div class="form-group">
						<label for="reg_college" class="sr-only">College</label>
						<input type="text" class="form-control" id="reg_college" name="reg_college" placeholder="college">
					</div>
					<div class="form-group">
						<label for="reg_password" class="sr-only">Password</label>
						<input type="password" class="form-control" id="reg_password" name="reg_password" placeholder="password">
					</div>
					<div class="form-group">
						<label for="reg_password_confirm" class="sr-only">Password Confirm</label>
						<input type="password" class="form-control" id="reg_password_confirm" name="reg_password_confirm" placeholder="confirm password">
					</div>
					<div class="form-group login-group-checkbox">
						<input type="radio" class="" name="reg_gender" id="male" value="male" placeholder="username">
						<label for="male">male</label>
						
						<input type="radio" class="" name="reg_gender" id="female" value="female" placeholder="username">
						<label for="female">female</label>
					</div>
                    
                    <div class="form-group login-group-checkbox">
						<input type="radio" class="" name="reg_type" id="iet" value="IETian" checked onclick=disableAll()>
						<label for="iet">IETian</label>
						
						<input type="radio" class="" name="reg_type" id="noniet" value="non-IETian" onclick=enableAll()>
						<label for="noniet">Non-IETian</label>
					</div>
                    
                    
					
					<div class="form-group login-group-checkbox" id=reg_type>
						Select the suitable package<br>
						<input type="radio" class="" id="sel_reg" name="sel_reg" value="Registration" checked onclick=onlyReg()>
						<label for=sel_reg>Registration</label><br>
                        <input type="radio" class="" id="sel_acco_only" name="sel_reg" value="Accomodation" onclick=regAccoonly()>
						<label for=sel_acco_only>Accomodation</label><br>
						<input type="radio" class="" id="sel_acco" name="sel_reg" value="Registration+Accomodation" onclick=regAcco()>
						<label for=sel_acco>Registration + Accomodation</label><br>
						<input type="radio" class="" id="sel_acco_tee" name="sel_reg" value="Registration+Accomodation+Tshirt" onclick=regAccoTee()>
						<label for=sel_acco_tee>Registration + Accomodation + Tshirt</label><br>
					</div>
					
					<!--div class="form-group login-group-checkbox" id=lan_game>
						<input type="checkbox" class="" id="sel_gam" name="sel_gam" onchange=addlan()>
						<label for="sel_gam">Lan Gaming</label>
					</div>
                    
                    <div class="form-group login-group-checkbox" id=kart>
						<input type="checkbox" class="" id="sel_kart" name="sel_kart" onchange=addkart()>
						<label for="sel_kart">Kart Wars</label>
					</div>
					
					<div class="form-group login-group-checkbox" id=rob>
						<input type="checkbox" class="" id="sel_rob" name="sel_rob" onchange="enableRequired()">
						<label for="sel_rob">Robotics</label>
					</div>
					
					<div class="form-group login-group-checkbox" style="padding-left:20px;display: none" id=arc>
						<label for="rob_arc">Arc</label><br>
                        <label for="rob_aero">Aerotrix</label><br>
                        <label for="rob_man">Manuever</label><br>
                        <label for="rob_soc">Wild Soccer</label><br>
					</div-->
					
					<div class="form-group" id=pay>
                        <label>Total Amount: <span id=amount></span></label>
					</div>
                    
                    <div class="form-group login-group-checkbox">
							<input type="checkbox" class="" id="reg_agree" name="reg_agree">
						<label for="reg_agree">i agree with <a href="#">terms</a></label>
					</div>
                    
                    <div class="form-group">
						<label style="font-size:10px; color:red;">Note: During registration, money for Lan gaming, Kart Wars and Robotics is to be paid by only one of the member of the team.</label>
					</div>
					
				</div>
				<button type="submit" class="login-button" onclick=storeValue()><i class="fa fa-chevron-right"></i></button>
			</div>
			<div class="etc-login-form">
				<p>already have an account? <a href="login.php">login here</a></p>
			</div>
		</form>
	</div>
	<br><br>
	 <button type="button" class="btn btn-success" id="myBtn">Register Lan Gaming / Robotics / Kartwars</button>

            <!-- Modal -->
		  <div class="modal fade" id="myModal" role="dialog">
		    <div class="modal-dialog">
		    
		      <!-- Modal content-->
		      <div class="modal-content">
		        <div class="modal-header">
		        	Registration Robotics / CS-Go / Kartwars		          
		        </div>
		        <div class="modal-body">
		          <form role="form">
		            <div class="row">
          				<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          					<label>Team Member 1 :</label>
          				</div>
          				<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          					<input type="text" class="form-control" name="team_member_1" id="team_member_1" required>
          				</div>		
         		 	</div>
		            <div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Team Member 2 :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="team_member_2" id="team_member_2" required>
		          		</div>		
		          	</div>
		          	<div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Team Member 3 :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="team_member_3" id="team_member_3" placeholder="Optional">
		          		</div>		
		          	</div>
		          	<div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Team Member 4 :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="team_member_4" id="team_member_4" placeholder="Optional">
		          		</div>		
		          	</div>
		          	<div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Team Member 5 :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="team_member_5" id="team_member_5" placeholder="Optional">
		          		</div>		
		          	</div>
		          	<div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Select Event :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<select class="form-control" name="event" id="event">
		          				<option val="">--Select Event--</option>
		          				
		          				<option value="arc">ARC</option>
		          				<option value="aerotrix">AEROTRIX</option>
		          				<option value="manuever">MANUEVER</option>
		          				<option value="wild_soccer">WILD SOCCER</option>
		          				
		          				<option value="cs_go">LAN GAMING(CS GO)</option>
		          				<option value="kart_wars">KARTWARS</option>
		          			</select>
		          		</div>		
		          	</div>
		            <div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Email :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="email" id="email" required>
		          		</div>		
		          	</div>
		          	<br>
		          	<div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>Contact :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="contact" id="contact" required>
		          		</div>		
		          	</div>
		          	<br>
		          	<div class="row">
		          		<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		          			<label>College :</label>
		          		</div>
		          		<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
		          			<input type="text" class="form-control" name="college" id="college" required>
		          		</div>		
		          	</div>
		          	<br>
		              <button class="btn btn-success btn-block" name="submit" id="submit">Submit</button>
		          </form>
		        </div>
		        <div class="modal-footer">
		          <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">Cancel</button>
		          <!--p>Not a member? <a href="#">Sign Up</a></p>
		          <p>Forgot <a href="#">Password?</a></p-->
		        </div>
		      </div>
		      
		    </div>
		  </div> 
	<!-- end:Main Form -->
</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/register.js?ver=3.5"></script>
<!--script type="text/javascript" src="js/reg.js?ver=2.1"></script-->
</html>