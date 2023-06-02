<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: *");

    


    include '../includes/connect.inc.php';
    include '../includes/functions.inc.php';

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $user = json_decode(file_get_contents('php://input'), true);
            $name = $user['username'];
            $pass = $user['password'];
            $passrepeat = $user['passwordrepeat'];
            if (emptyInputSignup($name, $pass, $passrepeat) !== false){
                header("location: signup.php?error=emptyinput");
                exit();
            }if (invalidUname($name) !== false){
                header("location: ../signup.php?error=invalidusername");
                exit();
            }if (passdMatch($pass, $passrepeat) !== false){
                header("location: signup.php?error=passwordsdontmatch");
                exit();
            }if (uExists($dbc, $name) !== false){
                header("location: signup.php?error=usernametaken");
                exit();
            }else{
                createUser($dbc, $name, $pass);
            }
        }