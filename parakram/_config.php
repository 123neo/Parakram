<?php
define("HOST", "localhost");
define("dbUser", "ietlunxt_parakra");
define("dbPassword", "9^*oJq-C6B(T");
define("dbToUse", "ietlunxt_parakram");
$conn = mysqli_connect(HOST,dbUser, dbPassword,dbToUse);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>