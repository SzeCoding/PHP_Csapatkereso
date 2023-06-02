<?php
 header('Access-Control-Allow-Origin: http://localhost:3000');
    session_start();
    session_unset();
    session_destroy();
    
    header("location: ../index.php");