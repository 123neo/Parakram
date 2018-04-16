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
if($operation == "forgetpass"){
	$dataJson1 = $_GET["myJson"];
	$dataJson =  JSON_decode($dataJson1);
	$email = $dataJson->email;
$sql = "SELECT `id`,`fullname`,`password` FROM `users` WHERE `email`= '".$email."'";
$result = mysqli_query($conn,$sql);
	
    if(mysqli_num_rows($result)){
    	
    	$fullname='';
    	$id='';

    	while($row = mysqli_fetch_assoc($result)) {
			$fullname = $row["fullname"];
			$id= $row['id'];
		}
    	$msg='Dear '.$fullname.' please click on the link given below to reset your password <a href="parakram.xyz/parakram/resetpassword.php?id='.$id.'">Reset Password</a>';
    	$mail_subject = "Parakram Reset Password";
		
				

			//Load composer's autoloader
			require 'vendor/autoload.php';

			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
			    //Server settings
			    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
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
			} catch (Exception $e) {
			    echo 2;
			    }
    	
     }
    else{
    	echo 2;
    }

exit();
}

/*function smtpmailer($to, $from, $from_name, $subject, $body) { 
	global $error;
	$mail = new PHPMailer();  // create a new object
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1;  // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true;  // authentication enabled
	$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = 'mail.clubdealsrealty.com';
	$mail->Port = 25; 
	$mail->Username = "prateek@clubdealsrealty.com";  
	$mail->Password = "ithinkiamsmart@";    
	$mail->IsHTML(true);	
	$mail->SetFrom($from, $from_name);
	$mail->Subject = $subject;
	$mail->Body = $body;
	$mail->AddAddress($to);
	if(!$mail->Send()) {
		$error = 'Mail error: '.$mail->ErrorInfo;
		//echo $error;		
		return false;
	} else {
		$error = 'Message sent!';
		//echo $error;
		return true;
	}
}*/

?>