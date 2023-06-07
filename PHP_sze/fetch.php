<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    $method = $_SERVER['REQUEST_METHOD'];

    include 'classes/dbh.classes.php';
    include 'classes/fetch.classes.php';

switch($method){
    case "GET":
        $fetch = new Fetch();


        $response = array(
                "courseData" => $fetch->getCourseData(),
                "teamData" => $fetch->getTeamData(),
                "userData" => $fetch->getUserData()
            );

            echo json_encode($response);
 
    }