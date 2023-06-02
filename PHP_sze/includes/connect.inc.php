<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: *");

$dbc = mysqli_connect("localhost", "root", "", "szecsapker") or die("Unable to connect" . mysqli_connect_error());

?>