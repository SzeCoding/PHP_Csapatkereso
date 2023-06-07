<?php
    class Team extends Dbh{

        public function setTeam($courseId, $teamname, $teamlimit){

            $stmt = $this->connect()->prepare('INSERT INTO team (courseId, teamName, teamLimit)  VALUES(?,?,?);');

            if(!$stmt->execute(array($courseId, $teamname, $teamlimit))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }
        public function setAdmin($userId){
            $stmt = $this->connect()->prepare('UPDATE users SET isAdmin = 1 WHERE userId = ?;');

            if(!$stmt->execute(array($userId))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }
        public function getteamId($teamname, $courseId){
            $stmt = $this->connect()->prepare('SELECT teamId FROM team WHERE teamName = ? AND courseId = ?');
            if(!$stmt->execute(array($teamname, $courseId))){
                $stmt = null;
                exit();
            }
            $teamId = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = $teamId[0]["teamId"];
            return $result;
            $stmt = null;
        }
        public function updateTeam($teamId, $userId){
            $stmt = $this->connect()->prepare('UPDATE users SET teamId = ? WHERE userId = ?;');

            if(!$stmt->execute(array($teamId, $userId))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }

        public function checkAdmin($userId){
            $stmt = $this->connect()->prepare('SELECT isAdmin FROM users WHERE userId = ?;');

            if(!$stmt->execute(array($userId))){
                $stmt = null;
                exit();
            }
            $resultCheck = null;
    
            $isAdmin = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($isAdmin[0]["isAdmin"]===1){
                $resultCheck = true;
            }else{
                 $resultCheck = false;
            }
            return $resultCheck;
            $stmt = null;
        }

    }
            