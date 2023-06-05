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
            #header("location = login page")
            exit();
        }

        if($this->passMatch() == false ){
            #header("location = login page")
            exit();
        }

        if($this->usernameTaken() == false ){
            #header("location = login page")
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
        if(!preg_match("/^[a-zA-Z1-9]*$/", $this->username)){
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