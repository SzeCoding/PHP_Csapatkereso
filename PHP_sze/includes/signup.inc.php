<?php
require_once 'functions.inc.php';
require_once 'connect.inc.php';

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $pass = $_POST["pass"];
    $passrepeat = $_POST["passrepeat"];


    if (emptyInputSignup($name, $pass, $passrepeat) !== false){
        header("location: ../signup.php?error=emptyinput");
        exit();
    }
    if (invalidUname($name) !== false){
        header("location: ../signup.php?error=invalidusername");
        exit();
    }
    if (passdMatch($pass, $passrepeat) !== false){
        header("location: ../signup.php?error=passwordsdontmatch");
        exit();
    }
    if (uExists($dbc, $name) !== false){
        header("location: ../signup.php?error=usernametaken");
        exit();
    }

    createUser($dbc, $name, $pass);
}else{
    echo "Login failed";
    header("location: ../signup.php");
    exit();
}