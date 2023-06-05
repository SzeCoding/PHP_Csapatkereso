<?php

class Signup extends Dbh{

    protected function setUser($username, $pass){
        $stmt = $this->connect()->prepare('INSERT INTO users (userName, userPass)  VALUES(?,?);');

        $hashedPass = password_hash($pass, PASSWORD_DEFAULT);

        if(!$stmt->execute(array($username, $hashedPass))){
            $stmt = null;
            #header(location login page)
            exit();
        }

        $stmt = null;
        

    }


    protected function checkUser($username){
        $stmt = $this->connect()->prepare('SELECT userName FROM users WHERE userName = ?;');

        if(!$stmt->execute(array($username))){
            $stmt = null;
            #header(location login page)
            exit();
        }
        $resultCheck = null;


        if($stmt->rowCount() > 0){
            $resultCheck = false;
        }
        else{$resultCheck = true;}
        return $resultCheck;
        $stmt = null;
    }
}