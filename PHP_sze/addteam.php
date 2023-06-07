<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    include "classes/dbh.classes.php"; 
    include "classes/team.classes.php";
    include "classes/team-contr.classes.php";

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $teamData = json_decode(file_get_contents('php://input'), true);
            $teamName = $teamData['teamdata']['teamname'];
            $teamLimit = $teamData['teamdata']['teamlimit'];
            $teamCourse = substr($teamData['teamdata']['teamcourse'], -4);
            $teamAdmin = $teamData['teamdata']['teamadmin'];

            
            $team = new TeamContr($teamCourse, $teamName, $teamLimit, $teamAdmin);
            $team->createTeam();
    }