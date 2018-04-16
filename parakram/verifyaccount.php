<?php
	require_once("_config.php");
	$id = $_GET['id'];
	
	$query = 'UPDATE `users` SET `verification`="verified" WHERE `id`="'.$id.'"';
	$result = mysqli_query($conn, $query);
	
	if($result){
	
	echo '<!DOCTYPE html>
		<html>
		<head>
			<title>Login</title>
		
		<!-- All the files that are required -->
		<meta charset="utf-8">
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		
		</head>
		<body>
			<div class="text-center" style="padding:50px 0">
				<div class="parakramlogo">

					<img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:20%">

				</div>
				
			</div>
		<div class="text-center" style="padding:50px 0">
			<div class="row">
				<h2 class="text-success">Your Account Has Been Verified</h2>
			</div>
		</div>
		</body>
		</html>';
	}
	else{
		echo '<!DOCTYPE html>
		<html>
		<head>
			<title>Verify Account</title>
		
		<!-- All the files that are required -->
		<meta charset="utf-8">
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		
		</head>
		<body>
			<div class="text-center" style="padding:50px 0">
				<div class="parakramlogo">

					<img src="images/Parakramlogo.png" class="img-rounded" alt="Parakram Logo" style="width:20%">

				</div>
				
			</div>
		<div class="text-center" style="padding:50px 0">
			<div class="row">
				<h2 class="text-Danger">Error Occured!!</h2>
			</div>
		</div>
		</body>
		</html>';
	}
?>