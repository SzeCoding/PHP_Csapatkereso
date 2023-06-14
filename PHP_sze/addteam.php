<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include "classes/dbh.classes.php"; 
    include "classes/team.classes.php";
    include "classes/addteam-contr.classes.php";

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $teamData = json_decode(file_get_contents('php://input'), true);
            $teamName = $teamData['teamdata']['teamName'];
            $teamLimit = $teamData['teamdata']['teamLimit'];
            $teamCourse = $teamData['teamdata']['teamCourse'];
            $teamAdmin = $teamData['teamdata']['teamAdmin'];

            
            $team = new AddTeamContr($teamCourse, $teamName, $teamLimit, $teamAdmin);
            $team->createTeam();
    }