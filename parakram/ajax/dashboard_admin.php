<?php
	session_start();
	require("../_config.php");
    $operation = '';
    if(isset($_GET['operation'])){
	   $operation = $_GET['operation'];
    }
    else if(isset($_POST['operation'])){
	   $operation = $_POST['operation'];
    }
    
    $inner_records["data"] = array();
/*
if($operation== "fetch_registeration_data_table"){
        
        $user_id = $_SESSION['id']; 
        $query = "SELECT * FROM `team` WHERE `user_id` = '".$user_id."'";
	   $result= mysqli_query($conn,$query);
	   while($row= mysqli_fetch_array($result)){

	   		$team_id = $row['team_id'];
	   		$event_name = $row['event_name'];
	   		$dep = $row['department'];

	   		$queryu = "SELECT * FROM `users` WHERE `".$event_name."` = '".$team_id."' ";

	   		$resultu= mysqli_query($conn,$queryu);
	   		$clg='';
	   		$team_members='';
	   		while($rowu= mysqli_fetch_array($resultu)){

	   			$team_members.=$rowu['fullname']." ".'<br>';
	   			$clg=$rowu['college'];

	   		}

	        
	        $inner_records["data"][]=array(
			$team_id,
			$event_name,
			$dep,
			$team_members,
			$clg,
	        '<span>
				<a>
					<i id="'.$row['team_id'].'Edit" style="cursor:pointer;padding-left:2em;padding-right:2em;" class="glyphicon glyphicon-edit" data-team_id="'.$row['team_id'].'" data-team_name="'.$row['team_name'].'" data-dep="'.$row['department'].'" onclick="editdata(this)"></i>
				</a>
			</span>
			<span>
				<a>
					<i style="cursor:pointer;" class="glyphicon glyphicon-trash"  id="'.$row['team_id'].'Delete" onclick="deletedata('.$row['team_id'].')"></i>
				</a>
			</span>'
			);
	}
	echo json_encode($inner_records);
}*/
if($operation == 'payment_confirm_data'){

	$user_id = $_POST['user_id'];
	$payment_confirm = $_POST['payment_confirm'];

	$query = 'UPDATE `users` SET `payment_confirm`="'.$payment_confirm.'" WHERE `id`="'.$user_id.'"';
	if(mysqli_query($conn, $query)){
		echo 1;
	}
	else
		echo 2;
}


if($operation == 'payment1_confirm_data'){

	$team_id = $_POST['team_id'];
	$payment = $_POST['payment'];

	$query = 'UPDATE `event` SET `payment`="'.$payment.'" WHERE `team_id`="'.$team_id.'"';
	if(mysqli_query($conn, $query)){
		echo 1;
	}
	else
		echo 2;
}
	if($operation== "fetch_registeration_data_table"){
        
        	$event_name = '';
	   		$dep = '';

	   		$querye = "SELECT * FROM `team`";
	   		$resulte = mysqli_query($conn, $querye);

	   		while($rowe = mysqli_fetch_array($resulte)){

	   			$event_name = $rowe['event_name'];
	   			$dep = $rowe['department'];	
	   			$team_id = $rowe['team_id'];
	   			$user_id = $rowe['user_id'];
	   			$payment_confirm = $rowe['payment_confirm'];

	   			$queryu = "SELECT * FROM `users` WHERE `".$event_name."` = '".$team_id."' ";

	   			$resultu= mysqli_query($conn,$queryu);
	   			$clg='';
	   			$team_members='';
	   			while($rowu = mysqli_fetch_array($resultu)){

	   				$team_members.=$rowu['fullname']." ".'<br>';
	   				$clg=$rowu['college'];

	   			}

	   			$inner_records["data"][]=array(
				$team_id,
				$event_name,
				$dep,
				$team_members,
				$clg,
		        '<span>
					<a>
						<i style="cursor:pointer;" class="glyphicon glyphicon-trash"  id="'.$row['team_id'].'Delete" data-team_id="'.$team_id.'" data-user_id="'.$user_id.'"  data-dep="'.$dep.'" data-event_name="'.$event_name.'" onclick="delete_team_data(this)"></i>
					</a>
				</span>'
				);
	   	}
	   	echo json_encode($inner_records);
	}

	if($operation== "fetch_registeration1_data_table"){
        
        	$event_name = '';
	   		$dep = '';

	   		$querye = "SELECT * FROM `event`";
	   		$resulte = mysqli_query($conn, $querye);

	   		while($rowe = mysqli_fetch_array($resulte)){

	   			$event_name = $rowe['event'];
	   			$team_members = $rowe['team_member_1'].'<br>'.$rowe['team_member_2'].'<br>'.$rowe['team_member_3'].'<br>'.$rowe['team_member_4'].'<br>'.$rowe['team_member_5'];	
	   			$team_id = $rowe['team_id'];
	   			$contact=$rowe['contact'];
	   			$email=$rowe['email'];
	   			$college=$rowe['college'];
	   			$payment=$rowe['payment'];

	   			$inner_records["data"][]=array(
				$team_id,
				$event_name,
				$team_members,
				$contact,
				$email,
				$college,
				$payment,
		        '<span>
					<a>
						<i id="'.$row['team_id'].'Edit" style="cursor:pointer;padding-left:2em;padding-right:2em;" class="glyphicon glyphicon-edit" data-team_id="'.$rowe['team_id'].'" data-payment="'.$rowe['payment'].'" onclick="edit1data(this)"></i>
					</a>
				</span>
				<span>
					<a>
						<i style="cursor:pointer;" class="glyphicon glyphicon-trash"  id="'.$row['team_id'].'Delete" data-team_id="'.$team_id.'" onclick="delete_team1_data('.$team_id.')"></i>
					</a>
				</span>'
				);
	   	}
	   	echo json_encode($inner_records);
	
}
if ($operation == 'delete_team1_data') {
		
		$team_id = $_POST['team_id'];
		$query1 = 'DELETE FROM `event` WHERE `team_id`="'.$team_id.'"';
		if(mysqli_query($conn, $query1)){

			echo 1;
			exit();
		}
		else{
			echo 2;
			exit();
		} 
	}
	if($operation== "fetch_user_data_table"){
        
        	$event_name = '';
	   		$dep = '';

	   		$querye = "SELECT * FROM `users`";
	   		$resulte = mysqli_query($conn, $querye);

	   		while($rowe = mysqli_fetch_array($resulte)){

	   			$user_id = $rowe['id'];
	   			$fullname = $rowe['fullname'];
	   			$contact = $rowe['contact'];	
	   			$email = $rowe['email'];
	   			$student = $rowe['student_is'];
	   			$plan = $rowe['plan'];
	   			$payment_confirm = $rowe['payment_confirm'];


	   			$inner_records["data"][]=array(
				$user_id,
				$fullname,
				$contact,
				$email,
				$plan,
				$student,
				$payment_confirm,
		        '<span>
					<a>
						<i id="'.$row['team_id'].'Edit" style="cursor:pointer;padding-left:2em;padding-right:2em;" class="glyphicon glyphicon-edit" data-team_id="'.$rowe['team_id'].'" data-user_id="'.$rowe['id'].'"  data-dep="'.$rowe['department'].'" data-payment_confirm="'.$rowe['payment_confirm'].'" onclick="editdata(this)"></i>
					</a>
				</span>
		        <span>
					<a>
						<i style="cursor:pointer;" class="glyphicon glyphicon-trash"  id="'.$user_id.'Delete" data-user_id="'.$user_id.'" onclick="delete_user_data('.$user_id.')"></i>
					</a>
				</span>'
				);
	   	}
	   	echo json_encode($inner_records);
	}

	if ($operation == 'delete_team_data') {
		
		$team_id = $_POST['team_id'];
		$user_id = $_POST['user_id'];
		$dep = $_POST['dep'];
		$event_name = $_POST['event_name'];

		$query1 = 'UPDATE `users` SET '.$event_name.'="" WHERE `id`="'.$user_id.'"';
		if(mysqli_query($conn, $query1)){

			$query2 = 'DELETE FROM `team` WHERE `team_id`="'.$teamid.'"';
			if(mysqli_query($conn, $query2)){

				$query3 = 'DELETE FROM `registered` WHERE `team_id`="'.$team_id.'"';
				if(mysqli_query($conn, $query3)){

					echo 1;
				}
				else
					echo 2;

			}
		} 
	}

	if ($operation == 'delete_user_data') {
		
		$user_id = $_POST['id'];
		
		$query1 = 'DELETE FROM `users` WHERE `id`="'.$user_id.'"';
		if(mysqli_query($conn, $query1)){

			$query2 = 'DELETE FROM `team` WHERE `user_id`="'.$user_id.'"';
			if(mysqli_query($conn, $query2)){

				$query3 = 'DELETE FROM `registered` WHERE `user_id`="'.$user_id.'"';
				if(mysqli_query($conn, $query3)){

					echo 1;
				}
				else
					echo 2;

			}
		} 
	}

?>