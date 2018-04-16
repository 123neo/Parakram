<?php
if(isset($_GET["operation"])){
	$operation = $_GET["operation"];
	require_once("../_config.php");
}else{
	exit();
}
if($operation == "saveData"){
	$dataJson1 = $_GET["myJson"];
	$dataJson =  JSON_decode($dataJson1);
	$email = $dataJson->email;
	$pass = $dataJson->password;
	$originalpassword = "";
$sql = "SELECT * FROM `users` WHERE `email`= '".$email."'";
$result = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_assoc($result)) {
		$originalpassword = $row["password"];
		$name = $row["fullname"];
		$id = $row["id"];
		$contact = $row['contact'];
		$email = $row['email'];
		$college = $row['college'];
		$course  = $row['course'];
		$branch = $row['branch'];
		$year = $row['year'];
}
if (password_verify($pass,$originalpassword)){
		
		$query = 'SELECT * FROM `users` WHERE `id`="'.$id.'"';
		$res = mysqli_query($conn, $query);
		while($row = mysqli_fetch_assoc($res)){
			$verify = $row['verification'];
			$student = $row['student_is'];
			$payment_confirm = $row['payment_confirm'];
			$plan = $row['plan'];
		}
		if($verify == 'verified' && $student == 'IETian'){
			session_start();
			$_SESSION['id'] = $id;	
			$_SESSION['fullname'] = $name;
			$_SESSION['contact'] = $contact;
			$_SESSION['email'] = $email;
			$_SESSION['college'] = $college;
			$_SESSION['course']  = $course;
			$_SESSION['branch'] = $branch;
			$_SESSION['year'] = $year;
			if($_SESSION['id']=='12'){
				echo 1;
				exit();
			}
			if($_SESSION['id']!='12'){
				echo 2;	
				exit();
			}
		}
		else if($verify == 'verified' && $student == 'Non-IETian' && $payment_confirm == 'successful'){
			session_start();
			$_SESSION['id'] = $id;	
			$_SESSION['fullname'] = $name;
			$_SESSION['contact'] = $contact;
			$_SESSION['email'] = $email;
			$_SESSION['college'] = $college;
			$_SESSION['course']  = $course;
			$_SESSION['branch'] = $branch;
			$_SESSION['year'] = $year;
			if($_SESSION['id']=='12'){
				echo 1;
				exit();
			}
			if($_SESSION['id']!='12'){
				echo 2;	
				exit();
			}
		}
		else if($verify != 'verified'){
			echo 4;
			exit();
		}
		else{
			echo $plan;
			exit();
		}
		
	}else  {
		echo 3;
		exit();
	}
exit();
}
?>