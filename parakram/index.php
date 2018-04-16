<?php 
session_start();
$url_name = explode('/', $_SERVER['PHP_SELF']);
$url = trim($url_name[count($url_name) - 1], '/');
if($url=="index.php"){	
	$url = 'login.php';
}
 if(!isset($_SESSION["name"])){
	 header('Location: login.php');
 }else{
header('Location:'.$url);
 }
?>