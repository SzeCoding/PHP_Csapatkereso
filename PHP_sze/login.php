<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);


include "./classes/dbh.classes.php"; 
include "./classes/login.classes.php"; 
include "./classes/login-contr.classes.php"; 



$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "POST":
        $user = json_decode(file_get_contents('php://input'), true);
        $username = $user['username'];
        $pass = $user['password'];

    }
    
    $login = new LoginContr($username, $pass);
    $login->loginUser();
    
    $jsonData = json_encode($_SESSION);
    header('Content-Type: application/json');

    echo $jsonData;

