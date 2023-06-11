<?php

    class PromoteContr extends Team{
        private $userName;

        public function __construct($userName){
            $this->userName = $userName;
        }

        public function Promote(){
            $userId = $this->getUserId($this->userName);
            if($this->checkAdmin($userId) == true){
                http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Member already admin"
                );
                echo "Member already admin";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }
            $this->setAdmin($userId);
        }
    }