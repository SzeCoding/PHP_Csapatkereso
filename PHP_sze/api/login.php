<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    echo "Test";

    include '../includes/connect.inc.php';
    var_dump($dbc);

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            
    }