<?php

function emptyInputSignup($name, $pass, $passrepeat){
    $result = false;
    if (empty($name) || empty($pass) || empty($passrepeat)){
        $result = true;
    }else{$result = false;}
    return $result;
}

function invalidUname($name){
    $result = false;
    if (!preg_match("/^[a-zA-Z0-9]*$/", $name)){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function passdMatch($pass, $passrepeat){
    $result = false;
    if ($pass!==$passrepeat){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function uExists($dbc, $name){
    $result = false;
    $sql = "SELECT * FROM users WHERE userName = ?;";
    $stmt = mysqli_stmt_init($dbc);
    if (!mysqli_stmt_prepare($stmt,$sql)){
        header("location: ../signup.php?error=stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $name);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)){
        return $row;
    }else{
        $result = false;
        return $result;
    }
    mysqli_stmt_close($stmt);
}

function createUser($dbc, $name, $pass){
    $sql = "INSERT INTO users (userName,userPass) VALUES(?,?);";
    $stmt = mysqli_stmt_init($dbc);
    if (!mysqli_stmt_prepare($stmt,$sql)){
        header("location: ../signup.php?error=stmtfailed");
        exit();
    }

    $hashedpass = password_hash($pass, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt,"ss", $name, $hashedpass);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    header("location: ../signup.php?error=none");
    exit();
}

function loginUser($dbc,$name,$pass){
    $userExists = uExists($dbc, $name);

    if ($userExists===false){
        header("location: ../login.php?error=usernotfound");
        exit();
    }

    $checkPass = password_verify($pass,$userExists["userPass"]);

    if ($checkPass===false){
        header("location: ../login.php?error=wrongpass");
        exit();
    }else if ($checkPass === true){
        session_start();
        $_SESSION["userid"] = $userExists["userId"];
        $_SESSION["username"] = $userExists["userName"];
        header("location: ../index.php");
        exit();
    }
}