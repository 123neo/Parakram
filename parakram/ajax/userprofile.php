<?php
    session_start();
    require("../_config.php");
    $operation = '';
    if(isset($_POST['operation'])){
       $operation = $_POST['operation'];
    }
    else if(isset($_POST['operation'])){
       $operation = $_POST['operation'];
    }



    if($operation == "update_data"){
   

       /* $dataJson1 = $_POST["myJson"];
    $dataJson =  JSON_decode($dataJson1);
    $fullname = $dataJson->fullname;
    $contact = $dataJson->contact;
    $email = $dataJson->email;
    $college = $dataJson->college;
    $course = $dataJson->course;
    $branch = $dataJson->branch;
    $year = $dataJson->year;*/

    $fullname=$_POST['fullname'];
    $contact=$_POST['contact'];
    $email=$_POST['email'];
     $college=$_POST['college'];
    $course=$_POST['course'];
    $branch=$_POST['branch'];
    $year=$_POST['year'];
    $id = $_SESSION['id'];
     /*if($_SESSION['name'] == 'admin'){
    
        
    }
    else
        $created_by = $_SESSION['name'];
    $date = date('d-m-Y');
    */
    
    $query="UPDATE `users` SET  `fullname` ='".$fullname."', `contact` ='".$contact."', `email` ='".$email."', `college` ='".$college."', `course`='".$course."', `branch` ='".$branch."', `year` ='".$year."' WHERE `id` = '".$id."'";
   
    
    if(mysqli_query($conn, $query)){

    $_SESSION['fullname'] = $fullname;
    $_SESSION['contact'] = $contact;
    $_SESSION['email'] = $email;
    $_SESSION['college'] = $college;
    $_SESSION['course']  = $course;
    $_SESSION['branch'] = $branch;
    $_SESSION['year'] = $year;
        echo 1;
    }
    else
        echo 2;
}
?>