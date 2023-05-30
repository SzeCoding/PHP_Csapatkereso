<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$dbc = mysqli_connect("localhost", "root", "", "szecsapker") or die("Unable to connect" . mysqli_connect_error());

?>