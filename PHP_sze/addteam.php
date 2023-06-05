<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    switch($method){
        case "POST":
            $team = json_decode(file_get_contents('php://input'), true);
            $username = $team['teamname'];
            $pass = $team['teamlimit'];
    }