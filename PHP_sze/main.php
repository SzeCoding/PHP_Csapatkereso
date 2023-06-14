<?php

include "./classes/dbh.classes.php"; 
include "./classes/login.classes.php"; 
include "./classes/login-contr.classes.php";    


$jsonData = json_encode($_SESSION);
header('Content-Type: application/json');

echo $jsonData;