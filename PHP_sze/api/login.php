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
            loginUser($dbc, $name, $pass);
    }