<?php

class TeamContr extends Team{

    private $courseId;
    private $teamName;
    private $teamLimit;
    private $userId;

    public function __construct($courseId, $teamName, $teamLimit, $userId){
        $this->courseId=$courseId;
        $this->teamName=$teamName;
        $this->teamLimit=$teamLimit;
        $this->userId=$userId;
    }
    public function createTeam(){
        if($this->checkAdmin($this->userId) == true){
            http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "User already created team"
                );
                echo "User already created team";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
        }if($this->checkTeam($this->teamName) == true){
            http_response_code(403);
            $response = array(
                'error' => true,
                'message' => "Team name already taken"
            );
            echo "Team name already taken";
            $jsonResponse = json_encode($response);
            header("Content-Type: application/json");
            exit();
        }if($this->invalidTeamname() == false){
            http_response_code(403);
                $response = array(
                    'error' => true,
                    'message' => "Team name contains bad characters"
                );
                echo "Team name contains bad characters";
                $jsonResponse = json_encode($response);
                header("Content-Type: application/json");
                exit();
        }
        $this->setTeam($this->courseId, $this->teamName, $this->teamLimit);
        $this->setAdmin($this->userId);
        $this->updateTeam($this->getTeamId($this->teamName, $this->courseId), $this->userId);
    }

    private function invalidTeamname(){
        $result = false;
        if(!preg_match("/^[a-zA-Z1-9_ -]*$/", $this->teamName)){
            $result = false;
        }else{$result = true;}
        return $result;
    }
}