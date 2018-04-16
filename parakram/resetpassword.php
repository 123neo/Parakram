<?php

	require_once("_config.php");
	$id=$_GET['id'];
	
?>
<!doctype html>
<html>
<head>
	<title>Reset Password</title>

	<meta charset="utf-8">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

</head>
<body>
<input class="hidden" id="user_id" value=<?php echo '"'.$id.'"' ?>>
<div class="container row">
	<div class="text-center" style="padding:50px 0; margin-left: 350px;">
		<div class="parakramlogo">

			<img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:20%">

		</div>
	</div>
	<div class="row" style="margin-left:600px;">
		<form role="form">
			<div class="row">
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
					<label>Password:</label>
				</div>
				<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
					<input style="max-width: 15em;"class="form-control" id="password" type="password" placeholder="Type New Password">
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
					<label>Confirm Password:</label>
				</div>
				<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
					<input style="max-width: 15em;" type="password" id="confirm_password" class="form-control" placeholder="Type New Password Again">
				</div>
			</div>
			<br>
			<button style="margin-left: 120px;" class="btn btn-primary" id="submit">Save</button>
		</form>
	</div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="js/resetpassword.js"></script>
</html>