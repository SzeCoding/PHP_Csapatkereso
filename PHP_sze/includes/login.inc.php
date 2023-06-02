<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

header("Access-Control-Allow-Headers: *");

if (isset($_POST["submit"])){
    $name = $_POST["name"];
    $pass = $_POST["pass"];

    require_once 'connect.inc.php';
    require_once 'functions.inc.php';

    loginUser($dbc, $name, $pass);
}