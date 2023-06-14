<?php
    
class SignupContr extends Signup{
    private $username;
    private $pass;
    private $passRepeat;

    public function __construct($username, $pass, $passRepeat)
    {
        $this->username = $username;
        $this->pass = $pass;
        $this->passRepeat = $passRepeat;
    }

    public function signupUser(){
        if($this->emptyInput() == false ){
            exit();
        }

        if($this->invalidUsername() == false ){
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

        if($this->passMatch() == false ){
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

        if($this->usernameTaken() == false ){
            http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Username already exists"
                );
                echo "Username already exists";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
        }
        
        $this->setUser($this->username, $this->pass);
    }

    private function emptyInput(){
        $result = false;
        if(empty($this->username) || empty($this->pass) || empty($this->passRepeat)){
            $result = false;
        }else{ $result = true;}
        return $result;
    }

    private function invalidUsername(){
        $result = false;
        if(!preg_match("/^[a-zA-Z0-9]*$/", $this->username)){
            $result = false;
        }else{$result = true;}
        return $result;
    }

    private function passMatch(){
        $result = false;
        if($this->pass != $this->passRepeat){
            $result = false;
        }else{$result = true;}
        return $result;
    }

  
    private function usernameTaken(){
        $result = false;
        if(!$this->checkUser($this->username) ){
            $result = false;
        }else{$result = true;}
        return $result;
    }


    
}