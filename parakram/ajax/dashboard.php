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

	if($operation== "fetch_registeration_data_table"){
        
        $user_id = $_SESSION['id']; 
        $query = "SELECT * FROM `registered` WHERE `user_id` = '".$user_id."'";
	   $result= mysqli_query($conn,$query);
	   while($row= mysqli_fetch_array($result)){

	   		$team_id = $row['team_id'];

	   		$event_name = '';
	   		$dep = '';

	   		$querye = "SELECT * FROM `team` WHERE `team_id` = '".$team_id."'";
	   		$resulte = mysqli_query($conn, $querye);

	   		while($rowe = mysqli_fetch_array($resulte)){

	   			$event_name = $rowe['event_name'];
	   			$dep = $rowe['department'];	
	   		}


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
		        '
				<span>
					<a>
						<i style="cursor:pointer;" class="glyphicon glyphicon-trash"  id="'.$row['team_id'].'Delete" data-team_id="'.$team_id.'" data-user_id="'.$user_id.'"  data-dep="'.$dep.'" data-event_name="'.$event_name.'" onclick="deletedata(this)"></i>
					</a>
				</span>'
				);
	   	}
	   	echo json_encode($inner_records);
	}

	if ($operation == 'delete_data') {
		
		$team_id = $_POST['team_id'];
		$user_id = $_POST['user_id'];
		$dep = $_POST['dep'];
		$event_name = $_POST['event_name'];

		$query1 = 'UPDATE `users` SET '.$event_name.'="" WHERE `id`="'.$user_id.'"';
		if(mysqli_query($conn, $query1)){

			$query2 = 'DELETE FROM `team` WHERE `team_id`="'.$team_id.'"';
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

?>