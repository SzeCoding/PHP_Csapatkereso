<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    include 'classes/addteam.classes.php';

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $teamdata = json_decode(file_get_contents('php://input'), true);
            $teamname = $team['teamdata']['teamname'];
            $teamlimit = $team['teamdata']['teamlimit'];

            $team = new team;
            $team->AddTeam($teamname, $teamlimit);

    }