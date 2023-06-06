<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");

    $method = $_SERVER['REQUEST_METHOD'];

    include 'classes/dbh.classes.php';
    include 'classes/fetch.classes.php';

switch($method){
    case "GET":
        $fetch = new Fetch();
        print_r($fetch->getTeamData());
        print_r($fetch->getUserData());
    }