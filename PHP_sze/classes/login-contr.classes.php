<?php


    
class LoginContr extends Login{
    private $username;
    private $pass;


    public function __construct($username, $pass)
    {
        $this->username = $username;
        $this->pass = $pass;
    }

    public function loginUser(){

        if($this->emptyInput() == false){
            #header(location login page)
            exit();
        }
        echo "sikeresen lemegy" . PHP_EOL;
        $this->getUser($this->username, $this->pass);
    }


    private function emptyInput(){
        $result = false;
        if(empty($this->username) || empty($this->pass)){
            $result = false;
        }else{ $result = true;}
        return $result;
    }
}