<?php

class Login extends Dbh{

    protected function getUser($username, $pass){
        $stmt = $this->connect()->prepare('SELECT * FROM users WHERE userName = ?;');


        if(!$stmt->execute(array($username))){
            $stmt = null;
            http_response_code(400);
            $response = array(
                'error' => true,
                'message' => "Statement failed"
            );
            echo "Statement failed";
            $jsonResponse = json_encode($response);
            header("Content-Type: application/json");
            exit();
        }


        if ($stmt->rowCount() == 0){
            $stmt = null;
            http_response_code(404);
            $response = array(
                'error' => true,
                'message' => "User not found in database"
            );
            echo "User not found in database";
            $jsonResponse = json_encode($response);
            header("Content-Type: application/json");
            exit();
        }

        
        $passHashed = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $checkPass = password_verify($pass, $passHashed[0]["userPass"] );
        
        if ($checkPass == false){
            $stmt = null;
            http_response_code(401);
            $response = array(
                'error' => true,
                'message' => "Wrong password"
            );
            echo "Wrong password";
            $jsonResponse = json_encode($response);
            header("Content-Type: application/json");
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
        $_SESSION["userId"] = $user[0]["userId"];
        $_SESSION["username"] = $user[0]["userName"];
        $_SESSION["isAdmin"] = $user[0]["isAdmin"];
        $_SESSION["teamId"] = $user[0]["teamId"];

        


        $stmt = null;
        }




    
}