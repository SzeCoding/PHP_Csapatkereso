<?php

    class InviteContr extends Team{
        private $userName;
        private $teamId;

        public function __construct($teamId, $userName){
            $this->teamId = $teamId;
            $this->userName = $userName;
        }

        public function Invite(){
            if($this->checkUser($this->userName) == false){
                http_response_code(404);
                $response = array(
                    'error' => true,
                    'message' => "User not found"
                );
                echo "User not found";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }
            $userId = $this->getUserId($this->userName);
            if($this->isMember($userId, NULL) == false){
                http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "User already member of a team"
                );
                echo "User already member of a team";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
            }

            $this->updateTeam($this->teamId, $userId);
            http_response_code(200);
            $response = array(
                'error' => false,
                'message' => "User added"
            );
            echo "User added";
            $jsonResponse = json_encode($response);
            header("Content-Type: application/json");
            exit();
        }
}