<?php

    class DelTeamContr extends Team{
        private $teamId;
        private $userId;

        public function __construct($teamId, $userId){
            $this->teamId = $teamId;
            $this->userId = $userId;
        }

        public function DeleteTeam(){
            if($this->checkAdmin($this->userId) == false){
                http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Only admins can delete teams"
                );
                echo "Only admins can delete teams";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }
            $this->delUsers($this->userId);
            $this->delTeam($this->teamId);
        }
    }