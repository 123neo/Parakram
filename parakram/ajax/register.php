<?php

	// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_GET["operation"])){
	$operation = $_GET["operation"];
	require_once("../_config.php");
}else{
	exit();
}

/*if($operation == 'data'){

        $team_member_1 = $_POST['team_member_1'];
        $team_member_2 = $_POST['team_member_2'];
        $team_member_3 = $_POST['team_member_3'];
        $team_member_4 = $_POST['team_member_4'];
        $team_member_5 = $_POST['team_member_5'];
        $event = $_POST['event'];
        $email = $_POST['email'];
        $contact = $_POST['contact'];
        $college = $_POST['college'];

        $query = 'INSERT INTO `event` (`team_member_1`, `team_member_2`, `team_member_3`, `team_member_4`, `team_member_5`, `event`, `email`, `contact`, `college`) VALUES ("'.$team_member_1.'", "'.$team_member_2.'", "'.$team_member_3.'", "'.$team_member_4.'", "'.$team_member_5.'", "'.$event.'", "'.$email.'", "'.$contact.'", "'.$college.'")';

        if(mysqli_query($conn, $query )){

          echo $event;
          exit();
        }
        else{
          echo 2;
          exit();
        }

    }*/

if($operation == "saveData"){
	$dataJson1 = $_GET["myJson"];
	$dataJson =  JSON_decode($dataJson1);
	$fullname = $dataJson->fullname;
	$email = $dataJson->email;
	$pass = $dataJson->password;
	$contact = $dataJson->contact;
	$college = $dataJson->college;
	$gender = $dataJson->gender;
	$student_is = $dataJson->student;
	$radioreg = $dataJson->radioreg;
	$plan = $radioreg;
	$password=crypt($pass,'$2a$09$anexamplestringforsalt$');
	$query = 'SELECT * FROM `users` WHERE `email`="'.$email.'"';
	$res = mysqli_query($conn, $query);
	if(mysqli_num_rows($res) == 0){
		
		$sql = "INSERT INTO `users` (`fullname`, `email`, `password`, `contact`, `college`, `gender`, `student_is`, `plan`) VALUES ('".$fullname."', '".$email."', '".$password."', '".$contact."', '".$college."', '".$gender."', '".$student_is."', '".$plan."')";
		$result = mysqli_query($conn,$sql);
    	if($result){
	    		
	    		$id = mysqli_insert_id($conn);
			
			
			$msg='Dear '.$fullname.' please click on the link given below to verify your account <a href="parakram.xyz/parakram/verifyaccount.php?id='.$id.'">Verify Account</a>';
    	$mail_subject = "Parakram Account Verification";
		
				

			//Load composer's autoloader
			require 'vendor/autoload.php';

			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
			    //Server settings
			    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
			    $mail->isSMTP();                                      // Set mailer to use SMTP
			    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
			    $mail->SMTPAuth = true;                               // Enable SMTP authentication
			    $mail->Username = 'parakram@ietlucknow.ac.in';                 // SMTP username
			    $mail->Password = 'txcIC,m8=sLb';                           // SMTP password
			    $mail->SMTPSecure = 'tls';
			    //$mail->SMTPAutoTLS = false;                           // Enable TLS encryption, `ssl` also accepted
			    $mail->Port = 587;                                    // TCP port to connect to

			    //Recipients
			    $mail->setFrom('parakram@ietlucknow.ac.in', 'Parakram');
			    $mail->addAddress($email);     // Add a recipient

			   

			    //Content
			    $mail->isHTML(true);                                  // Set email format to HTML
			    $mail->Subject = $mail_subject;
			    $mail->Body    = $msg;
			    $mail->AltBody = strip_tags($msg);

			    $mail->send();
				echo $plan;
			    exit();
			} catch (Exception $e) {
			    echo 2;
			    exit();
			    }
		}
		else{
			echo 2;
			exit();
		}
	}
    else{
    	echo 3;
		exit();
	}

}

if($operation == "saveData_online"){
	$dataJson1 = $_GET["myJson"];
	$dataJson =  JSON_decode($dataJson1);
	$fullname = $dataJson->fullname;
	$email = $dataJson->email;
	$pass = $dataJson->password;
	$contact = $dataJson->contact;
	$college = $dataJson->college;
	$gender = $dataJson->gender;
	$student_is = $dataJson->student;
	$radioreg = $dataJson->radioreg;
	$plan = $radioreg;
	$password=crypt($pass,'$2a$09$anexamplestringforsalt$');
	$query = 'SELECT * FROM `users` WHERE `email`="'.$email.'"';
	$res = mysqli_query($conn, $query);
	if(mysqli_num_rows($res) == 0){
		
		$sql = "INSERT INTO `users` (`fullname`, `email`, `password`, `contact`, `college`, `gender`, `student_is`, `plan`) VALUES ('".$fullname."', '".$email."', '".$password."', '".$contact."', '".$college."', '".$gender."', '".$student_is."', '".$plan."')";
		$result = mysqli_query($conn,$sql);
    	if($result){
	    		
	    		$id = mysqli_insert_id($conn);
			
			
			$msg='Dear '.$fullname.' please click on the link given below to verify your account <a href="parakram.xyz/parakram/verifyaccount.php?id='.$id.'">Verify Account</a>';
    	$mail_subject = "Parakram Account Verification";
		
				

			//Load composer's autoloader
			require 'vendor/autoload.php';

			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
			    //Server settings
			    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
			    $mail->isSMTP();                                      // Set mailer to use SMTP
			    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
			    $mail->SMTPAuth = true;                               // Enable SMTP authentication
			    $mail->Username = 'parakram@ietlucknow.ac.in';                 // SMTP username
			    $mail->Password = 'txcIC,m8=sLb';                           // SMTP password
			    $mail->SMTPSecure = 'tls';
			    //$mail->SMTPAutoTLS = false;                           // Enable TLS encryption, `ssl` also accepted
			    $mail->Port = 587;                                    // TCP port to connect to

			    //Recipients
			    $mail->setFrom('parakram@ietlucknow.ac.in', 'Parakram');
			    $mail->addAddress($email);     // Add a recipient

			   

			    //Content
			    $mail->isHTML(true);                                  // Set email format to HTML
			    $mail->Subject = $mail_subject;
			    $mail->Body    = $msg;
			    $mail->AltBody = strip_tags($msg);

			    $mail->send();
				echo 1;
			    exit();
			} catch (Exception $e) {
			    echo 2;
			    exit();
			    }
		}
		else{
			echo 2;
			exit();
		}
	}
    else{
    	echo 3;
		exit();
	}
}


?>