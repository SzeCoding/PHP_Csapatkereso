<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

    include 'connect.php';
    include '../includes/functions.inc.php';

    $db = new Database;
    $dbc = $db ->connect();

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $user = json_decode(file_get_contents('php://input'), true);
            $name = $user['username'];
            $pass = $user['password'];
            $passrepeat = $user['passwordrepeat'];

            if (emptyInputSignup($name, $pass, $passrepeat) !== false){
                exit();
                header("location: signup.php?error=emptyinput");
                exit();
            }
            if (invalidUname($name) !== false){
                http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Username contains bad characters"
                );
                echo "Username contains bad characters";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }
            if (passdMatch($pass, $passrepeat) !== false){
                http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Passwords don't match"
                );
                echo "Passwords don't match";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }
            if (uExists($dbc, $name) !== false){
                http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Username already exists"
                );
                echo "Username already exists";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }else{
                createUser($dbc, $name, $pass);
            }
        }