<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    include "classes/dbh.classes.php"; 
    include "classes/team.classes.php";

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $teamdata = json_decode(file_get_contents('php://input'), true);
            $teamname = $teamdata['teamdata']['teamname'];
            $teamlimit = $teamdata['teamdata']['teamlimit'];
            $teamcourse = substr($teamdata['teamdata']['teamcourse'], -4);
            $teamadmin = $teamdata['teamdata']['teamadmin'];

            
            $team = new Team;
            $team->setTeam($teamcourse, $teamname, $teamlimit);
            $team->setAdmin($teamadmin);
            $teamId = $team->getteamId($teamname,$teamcourse);
            $team->updateTeam($teamId, $teamadmin);


    }