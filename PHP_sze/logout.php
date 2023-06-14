<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

session_start();
session_unset();
session_destroy();

#header(send user back to location)