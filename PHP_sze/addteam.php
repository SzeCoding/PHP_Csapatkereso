<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $team = json_decode(file_get_contents('php://input'), true);
            $teamname = $team['teamname'];
            $teamlimit = $team['teamlimit'];
    }