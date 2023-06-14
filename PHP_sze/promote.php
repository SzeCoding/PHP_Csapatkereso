<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: *");

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include "classes/dbh.classes.php";
    include "classes/team.classes.php";
    include "classes/promote-contr.classes.php";

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $promoteData = json_decode(file_get_contents('php://input'), true);
            $promoteName= $promoteData['memberName'];

            $member = new PromoteContr($promoteName);
            $member->Promote();
    }