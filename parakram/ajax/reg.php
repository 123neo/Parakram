<?php

define("HOST", "localhost");
define("dbUser", "ietlunxt_parakra");
define("dbPassword", "9^*oJq-C6B(T");
define("dbToUse", "ietlunxt_parakram");
$conn = mysqli_connect(HOST,dbUser, dbPassword,dbToUse);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
	
    $operation = '';

	if(isset($_POST['operation'])){
       $operation = $_POST['operation'];
    }
    else if(isset($_POST['operation'])){
       $operation = $_POST['operation'];
    }



    if($operation == 'data'){

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
  }
exit();

?>