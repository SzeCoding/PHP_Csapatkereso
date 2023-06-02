<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: *");

    session_start();
    
    session_unset();
    session_destroy();