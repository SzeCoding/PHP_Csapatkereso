<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../includes/connect.inc.php';
    include '../includes/functions.inc.php';

    $method = $_SERVER['REQUEST_METHOD'];
    if($method == 'POST'){
            $user = json_decode(file_get_contents('php://input'), true);
            $name = $user['username'];
            $pass = $user['password'];
            createUser($dbc, $name, $pass);
    }