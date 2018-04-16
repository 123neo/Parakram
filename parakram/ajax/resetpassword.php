<?php

    require("../_config.php");
    $operation = '';
    if(isset($_POST['operation'])){
       $operation = $_POST['operation'];
    }
    else if(isset($_POST['operation'])){
       $operation = $_POST['operation'];
    }



if($operation == "save_new_password"){
	$id=$_POST['id'];
	$pass=$_POST['pass'];
	$confirm_pass=$_POST['confirm_pass'];

	if($pass == $confirm_pass){

		$password=crypt($pass,'$2a$09$anexamplestringforsalt$');
		$query='UPDATE `users` SET `password`="'.$password.'" WHERE `id`="'.$id.'"';
		$result = mysqli_query($conn, $query);

		if(mysqli_affected_rows($conn) > 0){
			echo 1;
		}
		else{
			echo 2;
		}
	}
	else{
		echo 3;
	}
}
?>
