<?php

class Database{
    private $host = 'localhost';
    private $dbname = 'szecsapker';
    private $username = 'root';
    private $password = '';

    public function connect() {
        try{
            $conn = mysqli_connect($this->host, $this->username, $this->password, $this->dbname);
            echo "Connected to database successfully!" . PHP_EOL;
            return $conn;
        }catch(Exception $e){
            echo "Database Error: " . $e->getMessage() . PHP_EOL;
        }
    }
}