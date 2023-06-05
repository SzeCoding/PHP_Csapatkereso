<?php

class Login extends Dbh{





    protected function getUser($username, $pass){
        $stmt = $this->connect()->prepare('SELECT userName FROM users WHERE userName = ?;');


        if(!$stmt->execute(array($username))){
            $stmt = null;
            #header(location login page)
            exit();
        }

        if ($stmt->rowCount() > 0){
            $stmt = null;
            #header(location login page)
            exit();
        }
        
        $passHashed = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $checkPass = password_verify($pass, $passHashed[0]["userPass"] );
        
        if ($checkPass == false){
            $stmt = null;
            #header(location login page)
            exit();
        }
        else if($checkPass == true){
            $stmt = $this->connect()->prepare('SELECT * FROM users WHERE userName = ?; AND userPass = ?');
        }

        if(!$stmt->execute(array($username, $pass))){
            $stmt = null;
            #header(location login page)
            exit();
        }


        if($stmt->rowCount() == 0){
            $stmt = null;
            #header(location login page)
            exit();
        }

        $user = $stmt->fetchAll(PDO::FETCH_ASSOC);

        session_start();
        $_SESSION["userId"] = $user[0]["userId "];
        $_SESSION["username"] = $user[0]["userName"];
        $_SESSION["pass"] = $user[0]["userPass"];
        $_SESSION["teamId"] = $user[0]["teamId"];
        $_SESSION["isAdmin"] = $user[0]["isAdmin"];

        


        $stmt = null;
        }




    
}