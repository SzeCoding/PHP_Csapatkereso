<?php
    session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link href="views/style.css" rel="stylesheet">
        <title>Sze Csapatkereső</title>
    </head>
    <body>
        <h1>Sze Csapatkereső</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <?php
                    if (isset($_SESSION["username"])){
                        echo "<li><a href='profile.php'>Profile Page</a></li>";
                        echo "<li><a href='includes/logout.inc.php'>Log out</a></li>";
                    }else{
                        echo "<li><a href='signup.php'>Sign in</a></li>";
                        echo "<li><a href='login.php'>Log in</a></li>";
                    }
                ?>
            </ul>
        </nav>