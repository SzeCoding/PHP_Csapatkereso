<?php

class Dbh{

    public function connect(){
        try{
            $username = "root";
            $password = "";
            $dbh = new PDO('mysql:host=localhost;dbname=szecsapker', $username, $password);
            return $dbh;
        }
        catch(PDOException $e){
            print "error: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}