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



    if($operation == "cs_team_members_2"){

    	$dep = $_POST['dep'];
    	$cs_event_name = $_POST['cs_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$cs_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$cs_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}
	    	$team = array($team_mem_1, $team_mem_2);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$cs_event_name."', '2')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<2; $i++){

		   			$query2 = "UPDATE `users` SET ".$cs_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }


    if($operation == "cs_team_members_1"){

    	$dep = $_POST['dep'];
    	$cs_event_name = $_POST['cs_event_name'];
    	
    	$user_id = $_SESSION['id'];
    	
    	
		$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$cs_event_name." = '' ";
        $result = mysqli_query($conn, $query3);
    	if(mysqli_num_rows($result) == 0){

    		echo 3;
    		exit();	
    	}

	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$cs_event_name."', '1')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    			$f=0;
		   			$query2 = "UPDATE `users` SET ".$cs_event_name." = '".$id."' WHERE `id`= '".$user_id."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}else{
		   				$f=0;
		   			}
		   		if($f==1){
		   			$query3="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$user_id."', '".$id."') ";
		   			if(mysqli_query($conn, $query3)){
		   				echo 1;
		   			}
		   			else{
		   				echo 2;
		   			}
		   		}
    	}
    }


    if($operation == "cs_team_members_4"){

    	$dep = $_POST['dep'];
    	$cs_event_name = $_POST['cs_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	$team_mem_4 = $_POST['team_mem_4'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query6 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query6)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$cs_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$cs_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}

    	$query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$cs_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
    		echo 4;
    		exit();	
    	}

    	$query8 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."' AND `".$cs_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query8)) == 0){
    		echo 4;
    		exit();	
    	}

	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3, $team_mem_4);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$cs_event_name."', '4')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<4; $i++){

		   			$query2 = "UPDATE `users` SET ".$cs_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "cs_team_members_3"){

    	$dep = $_POST['dep'];
    	$cs_event_name = $_POST['cs_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
        if($team_mem_2 != '' ){
        	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

        if($team_mem_3 != '' ){
        	$query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

        	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$cs_event_name." = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

        		echo 3;
        		exit();	
        	}

        
    	if($team_mem_2 != '' ){
            $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$cs_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
        		echo 4;
        		exit();	
        	}
        }

        if($team_mem_3 != '' ){
        	$query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$cs_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
        		echo 4;
        		exit();	
        	}
        }


	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$cs_event_name."', '4')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<3; $i++){

		   			$query2 = "UPDATE `users` SET ".$cs_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "designing_team_members_3"){

        $dep = $_POST['dep'];
        $designing_event_name = $_POST['designing_event_name'];
        $team_mem_1 = $_POST['team_mem_1'];
        $team_mem_2 = $_POST['team_mem_2'];
        $team_mem_3 = $_POST['team_mem_3'];
        $user_id = $_SESSION['id'];
        if($team_mem_1 != $user_id){
            echo 2;
            exit();
        }
            $query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
            if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
                
                echo 2;
                exit();
            }

        if($team_mem_3 != '' ){
            $query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
            if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
                
                echo 2;
                exit();
            }
        }

            $query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$designing_event_name." = '' ";
            if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

                echo 3;
                exit(); 
            }

        
            $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$designing_event_name."` = '' ";
            if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
                echo 4;
                exit(); 
            }

        if($team_mem_3 != '' ){
            $query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$designing_event_name."` = '' ";
            if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
                echo 4;
                exit(); 
            }
        }


            $team = array($team_mem_1, $team_mem_2, $team_mem_3);
            $team_id='';

            $query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$designing_event_name."', '4')";
            if(mysqli_query($conn, $query1)){
                $f=0;
                $id = mysqli_insert_id($conn);
                for( $i=0; $i<3; $i++){

                    $query2 = "UPDATE `users` SET ".$designing_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
                    if(mysqli_query($conn, $query2)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }

                    $query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
                    if(mysqli_query($conn, $query15)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }
                }
                if($f==1){
                    echo 1;
                }
                else
                    echo 2;
                
            }
    }

    if($operation == "designing_team_members_2"){

        $dep = $_POST['dep'];
        $designing_event_name = $_POST['designing_event_name'];
        $team_mem_1 = $_POST['team_mem_1'];
        $team_mem_2 = $_POST['team_mem_2'];
        $user_id = $_SESSION['id'];
        if($team_mem_1 != $user_id){
            echo 2;
            exit();
        }

        $query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
        if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
            
            echo 2;
            exit();
        }

        $query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$designing_event_name." = '' ";
        if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

            echo 3;
            exit(); 
        }

        $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$designing_event_name."` = '' ";
        if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
            echo 4;
            exit(); 
        }
            $team = array($team_mem_1, $team_mem_2);
            $team_id='';

            $query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$designing_event_name."', '2')";
            if(mysqli_query($conn, $query1)){
                $f=0;
                $id = mysqli_insert_id($conn);
                for( $i=0; $i<2; $i++){

                    $query2 = "UPDATE `users` SET ".$designing_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
                    if(mysqli_query($conn, $query2)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }

                    $query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
                    if(mysqli_query($conn, $query15)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }
                }
                if($f==1){
                    echo 1;
                }
                else
                    echo 2;
                
            }
    }


    if($operation == "designing_team_members_1"){

        $dep = $_POST['dep'];
        $designing_event_name = $_POST['designing_event_name'];
        
        $user_id = $_SESSION['id'];
        
        
        $query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$designing_event_name." = '' ";
        $result = mysqli_query($conn, $query3);
        if(mysqli_num_rows($result) == 0){

            echo 3;
            exit(); 
        }

            $team_id='';

            $query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$designing_event_name."', '1')";
            if(mysqli_query($conn, $query1)){
                $f=0;
                $id = mysqli_insert_id($conn);
                    $f=0;
                    $query2 = "UPDATE `users` SET ".$designing_event_name." = '".$id."' WHERE `id`= '".$user_id."'";
                    if(mysqli_query($conn, $query2)){
                        $f=1;
                    }else{
                        $f=0;
                    }
                if($f==1){
                    $query3="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$user_id."', '".$id."') ";
                    if(mysqli_query($conn, $query3)){
                        echo 1;
                    }
                    else{
                        echo 2;
                    }
                }
        }
    }    

    if($operation == "ee_and_ec_team_members_1"){

    	$dep = $_POST['dep'];
    	$ee_and_ec_event_name = $_POST['ee_and_ec_event_name'];
    	
    	$user_id = $_SESSION['id'];
    	
    	
		$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ee_and_ec_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ee_and_ec_event_name."', '1')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);

		   			$query2 = "UPDATE `users` SET ".$ee_and_ec_event_name." = '".$id."' WHERE `id`= '".$user_id."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}else{
		   				$f=0;
		   			}
		   		if($f==1){
		   			$query3="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$user_id."', '".$id."') ";
		   			if(mysqli_query($conn, $query3)){
		   				echo 1;
		   			}
		   			else{
		   				echo 2;
		   			}
    	}
    }
 }

    if($operation == "ee_and_ec_team_members_2"){

    	$dep = $_POST['dep'];
    	$ee_and_ec_event_name = $_POST['ee_and_ec_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ee_and_ec_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$ee_and_ec_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}
	    	$team = array($team_mem_1, $team_mem_2);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ee_and_ec_event_name."', '2')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<2; $i++){

		   			$query2 = "UPDATE `users` SET ".$ee_and_ec_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "ee_and_ec_team_members_max2_min1"){

        $dep = $_POST['dep'];
        $ee_and_ec_event_name = $_POST['ee_and_ec_event_name'];
        $team_mem_1 = $_POST['team_mem_1'];
        $team_mem_2 = $_POST['team_mem_2'];
        $user_id = $_SESSION['id'];
        if($team_mem_1 != $user_id){
            echo 2;
            exit();
        }

        if($team_mem_2 != ''){
            $query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
            if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
                
                echo 2;
                exit();
            }
        }

        $query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ee_and_ec_event_name." = '' ";
        if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

            echo 3;
            exit(); 
        }

        if($team_mem_2 != ''){
            $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$ee_and_ec_event_name."` = '' ";
            if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
                echo 4;
                exit(); 
            }
        }

            $team = array($team_mem_1, $team_mem_2);
            $team_id='';

            $query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ee_and_ec_event_name."', '2')";
            if(mysqli_query($conn, $query1)){
                $f=0;
                $id = mysqli_insert_id($conn);
                for( $i=0; $i<2; $i++){

                    $query2 = "UPDATE `users` SET ".$ee_and_ec_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
                    if(mysqli_query($conn, $query2)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }

                    $query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
                    if(mysqli_query($conn, $query15)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }
                }
                if($f==1){
                    echo 1;
                }
                else
                    echo 2;
                
            }
    }

    if($operation == "ee_and_ec_team_members_4"){

    	$dep = $_POST['dep'];
    	$ee_and_ec_event_name = $_POST['ee_and_ec_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	$team_mem_4 = $_POST['team_mem_4'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}

        if($team_mem_3 != ''){
        	$query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

        if($team_mem_4 != ''){
        	$query6 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query6)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ee_and_ec_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$ee_and_ec_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}

        if($team_mem_3 != ''){
        	$query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$ee_and_ec_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
        		echo 4;
        		exit();	
        	}
        }

        if($team_mem_4 != ''){
        	$query8 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."' AND `".$ee_and_ec_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query8)) == 0){
        		echo 4;
        		exit();	
        	}
        }

	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3, $team_mem_4);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ee_and_ec_event_name."', '4')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<4; $i++){

		   			$query2 = "UPDATE `users` SET ".$ee_and_ec_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }


    if($operation == "me_team_members_3"){

    	$dep = $_POST['dep'];
    	$me_event_name = $_POST['me_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}

        if($team_mem_2 != ''){
        	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

        if($team_mem_3 != ''){
        	$query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

    	

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$me_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

        if($team_mem_2 != ''){
        	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$me_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
        		echo 4;
        		exit();	
        	}
        }

        if($team_mem_3 != ''){
        	$query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$me_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
        		echo 4;
        		exit();	
        	}
        }

    	

	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$me_event_name."', '3')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<3; $i++){

		   			$query2 = "UPDATE `users` SET ".$me_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "ce_team_members_5"){

    	$dep = $_POST['dep'];
    	$ce_event_name = $_POST['ce_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	$team_mem_4 = $_POST['team_mem_4'];
    	$team_mem_5 = $_POST['team_mem_5'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
        if($team_mem_2 != ''){
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}
        }

    	if($team_mem_3 != ''){
        $query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
    		
    		echo 2;
    		exit();
    	}
        }

    	if($team_mem_4 != ''){
        $query6 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query6)) == 0){
    		
    		echo 2;
    		exit();
    	}
        }

    	if($team_mem_5 != ''){
        $query9 = "SELECT * FROM `users` WHERE `id`='".$team_mem_5."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query9)) == 0){
    		
    		echo 2;
    		exit();
    	}
        }

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ce_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	if($team_mem_2 != ''){
        $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$ce_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}
        }

    	if($team_mem_3 != ''){
        $query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$ce_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
    		echo 4;
    		exit();	
    	}
        }

    	if($team_mem_4 != ''){
        $query8 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."' AND `".$ce_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query8)) == 0){
    		echo 4;
    		exit();	
    	}
        }

    	if($team_mem_5 != ''){
        $query10 = "SELECT * FROM `users` WHERE `id`='".$team_mem_5."' AND `".$ce_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query10)) == 0){
    		echo 4;
    		exit();	
    	}
        }

	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3, $team_mem_4, $team_mem_5);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ce_event_name."', '5')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<5; $i++){

		   			$query2 = "UPDATE `users` SET ".$ce_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }


    if($operation == "ce_team_members_1"){

    	$dep = $_POST['dep'];
    	$ce_event_name = $_POST['ce_event_name'];
    	
    	$user_id = $_SESSION['id'];
    	
    	
		$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ce_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ce_event_name."', '1')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);

		   			$query2 = "UPDATE `users` SET ".$ce_event_name." = '".$id."' WHERE `id`= '".$user_id."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}else{
		   				$f=0;
		   			}
		   		if($f==1){
		   			$query3="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$user_id."', '".$id."') ";
		   			if(mysqli_query($conn, $query3)){
		   				echo 1;
		   			}
		   			else{
		   				echo 2;
		   			}
		   		}
    	}
    }

    if($operation == "ce_team_members_2"){

    	$dep = $_POST['dep'];
    	$ce_event_name = $_POST['ce_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}

        if($team_mem_2 != ''){
        	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

    	
        $query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ce_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	if($team_mem_2 != ''){
            $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$ce_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
        		echo 4;
        		exit();	
        	}
        }
	    
        	$team = array($team_mem_1, $team_mem_2);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ce_event_name."', '2')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<2; $i++){

		   			$query2 = "UPDATE `users` SET ".$ce_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "ce_team_members_6"){

    	$dep = $_POST['dep'];
    	$ce_event_name = $_POST['ce_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	$team_mem_4 = $_POST['team_mem_4'];
    	$team_mem_5 = $_POST['team_mem_5'];
    	$team_mem_6 = $_POST['team_mem_6'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}

        if($team_mem_2 != ''){
        	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

        if($team_mem_3 != ''){
        	$query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

        if($team_mem_4 != ''){
        	$query6 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query6)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }    

        if($team_mem_5 != ''){
        	$query9 = "SELECT * FROM `users` WHERE `id`='".$team_mem_5."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query9)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }
    	
        if($team_mem_6 != ''){
            $query11 = "SELECT * FROM `users` WHERE `id`='".$team_mem_6."'";
        	if(mysqli_num_rows(mysqli_query($conn, $query11)) == 0){
        		
        		echo 2;
        		exit();
        	}
        }

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$ce_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	if($team_mem_2 != ''){
            $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$ce_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
        		echo 4;
        		exit();	
        	}
        }

    	if($team_mem_3 != ''){
            $query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$ce_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
        		echo 4;
        		exit();	
        	}
        }

    	if($team_mem_4 != ''){
            $query8 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."' AND `".$ce_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query8)) == 0){
        		echo 4;
        		exit();	
        	}
        }

    	if($team_mem_5 != ''){
            $query10 = "SELECT * FROM `users` WHERE `id`='".$team_mem_5."' AND `".$ce_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query10)) == 0){
        		echo 4;
        		exit();	
        	}
        }

    	if($team_mem_6 != ''){
            $query12 = "SELECT * FROM `users` WHERE `id`='".$team_mem_6."' AND `".$ce_event_name."` = '' ";
        	if(mysqli_num_rows(mysqli_query($conn, $query12)) == 0){
        		echo 4;
        		exit();	
        	}
        }

	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3, $team_mem_4, $team_mem_5. $team_mem_6);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$ce_event_name."', '5')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<6; $i++){

		   			$query2 = "UPDATE `users` SET ".$ce_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "che_team_members_3"){

        $dep = $_POST['dep'];
        $che_event_name = $_POST['che_event_name'];
        $team_mem_1 = $_POST['team_mem_1'];
        $team_mem_2 = $_POST['team_mem_2'];
        $team_mem_3 = $_POST['team_mem_3'];
        
        $user_id = $_SESSION['id'];
        if($team_mem_1 != $user_id){
            echo 2;
            exit();
        }

            $query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
            if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
                
                echo 2;
                exit();
            }

        if($team_mem_3 != ''){
            $query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
            if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
                
                echo 2;
                exit();
            }
        }

        

        $query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$che_event_name." = '' ";
        if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

            echo 3;
            exit(); 
        }

            $query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$che_event_name."` = '' ";
            if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
                echo 4;
                exit(); 
            }

        if($team_mem_3 != ''){
            $query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$che_event_name."` = '' ";
            if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
                echo 4;
                exit(); 
            }
        }

        

            $team = array($team_mem_1, $team_mem_2, $team_mem_3);
            $team_id='';

            $query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$che_event_name."', '3')";
            if(mysqli_query($conn, $query1)){
                $f=0;
                $id = mysqli_insert_id($conn);
                for( $i=0; $i<3; $i++){

                    $query2 = "UPDATE `users` SET ".$che_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
                    if(mysqli_query($conn, $query2)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }

                    $query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
                    if(mysqli_query($conn, $query15)){
                        $f=1;
                    }
                    else{
                        $f=0;
                        break;
                    }
                }
                if($f==1){
                    echo 1;
                }
                else
                    echo 2;
                
            }
    }

    if($operation == "che_team_members_2"){

    	$dep = $_POST['dep'];
    	$che_event_name = $_POST['che_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}

        if($team_mem_2 != ''){
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}
        }

        
    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$che_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

        if($team_mem_2 != ''){
    	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$che_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}
        }
	    	$team = array($team_mem_1, $team_mem_2);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$che_event_name."', '2')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<2; $i++){

		   			$query2 = "UPDATE `users` SET ".$che_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

    if($operation == "che_team_members_1"){

    	$dep = $_POST['dep'];
    	$che_event_name = $_POST['che_event_name'];
    	
    	$user_id = $_SESSION['id'];
    	
    	
		$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$che_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$che_event_name."', '1')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);

		   			$query2 = "UPDATE `users` SET ".$che_event_name." = '".$id."' WHERE `id`= '".$user_id."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}else{
		   				$f=0;
		   			}
		   		if($f==1){
		   			$query3="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$user_id."', '".$id."') ";
		   			if(mysqli_query($conn, $query3)){
		   				echo 1;
		   			}
		   			else{
		   				echo 2;
		   			}
		   		}
    	}
    }

    if($operation == "che_team_members_4"){

    	$dep = $_POST['dep'];
    	$che_event_name = $_POST['che_event_name'];
    	$team_mem_1 = $_POST['team_mem_1'];
    	$team_mem_2 = $_POST['team_mem_2'];
    	$team_mem_3 = $_POST['team_mem_3'];
    	$team_mem_4 = $_POST['team_mem_4'];
    	$user_id = $_SESSION['id'];
    	if($team_mem_1 != $user_id){
    		echo 2;
    		exit();
    	}
    	$query = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query5 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query5)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query6 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."'";
    	if(mysqli_num_rows(mysqli_query($conn, $query6)) == 0){
    		
    		echo 2;
    		exit();
    	}

    	$query3 = "SELECT * FROM `users` WHERE `id`='".$user_id."' AND ".$che_event_name." = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query3)) == 0){

    		echo 3;
    		exit();	
    	}

    	$query4 = "SELECT * FROM `users` WHERE `id`='".$team_mem_2."' AND `".$che_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query4)) == 0){
    		echo 4;
    		exit();	
    	}

    	$query7 = "SELECT * FROM `users` WHERE `id`='".$team_mem_3."' AND `".$che_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query7)) == 0){
    		echo 4;
    		exit();	
    	}

    	$query8 = "SELECT * FROM `users` WHERE `id`='".$team_mem_4."' AND `".$che_event_name."` = '' ";
    	if(mysqli_num_rows(mysqli_query($conn, $query8)) == 0){
    		echo 4;
    		exit();	
    	}

	    	$team = array($team_mem_1, $team_mem_2, $team_mem_3, $team_mem_4);
	    	$team_id='';

	    	$query1 = "INSERT INTO `team` (`user_id`, `department`, `event_name`, `team_members`) VALUES ( '".$user_id."', '".$dep."', '".$che_event_name."', '4')";
	    	if(mysqli_query($conn, $query1)){
	    		$f=0;
	    		$id = mysqli_insert_id($conn);
	    		for( $i=0; $i<4; $i++){

		   			$query2 = "UPDATE `users` SET ".$che_event_name." = '".$id."' WHERE `id`= '".$team[$i]."'";
		   			if(mysqli_query($conn, $query2)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}

		   			$query15="INSERT INTO `registered` (`user_id`, `team_id`) VALUES ('".$team[$i]."', '".$id."') ";
		   			if(mysqli_query($conn, $query15)){
		   				$f=1;
		   			}
		   			else{
		   				$f=0;
		   				break;
		   			}
		   		}
		   		if($f==1){
		   			echo 1;
		   		}
		   		else
		   			echo 2;
	    		
	    	}
    }

?>