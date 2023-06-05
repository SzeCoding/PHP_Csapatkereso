<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);



$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user = json_decode(file_get_contents('php://input'), true);
        $username = $user['username'];
        $pass = $user['password'];
        $passRepeat = $user['passwordrepeat'];
}



include "./classes/dbh.classes.php"; 
include "./classes/signup.classes.php"; 
include "./classes/signup-contr.classes.php"; 



$signup = new SignupContr($username, $pass, $passRepeat);


$signup->signupUser();