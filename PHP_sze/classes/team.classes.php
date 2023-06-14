<?php
    class Team extends Dbh{

        protected function setTeam($courseId, $teamName, $teamLimit){
            $stmt = $this->connect()->prepare('INSERT INTO team (courseId, teamName, teamLimit)  VALUES(?,?,?);');

            if(!$stmt->execute(array($courseId, $teamName, $teamLimit))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }

        protected function setAdmin($userId){
            $stmt = $this->connect()->prepare('UPDATE users SET isAdmin = 1 WHERE userId = ?;');

            if(!$stmt->execute(array($userId))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }

        protected function getUserId($userName){
            $stmt = $this->connect()->prepare('SELECT userId FROM users WHERE userName = ?');
            
            if(!$stmt->execute(array($userName))){
                $stmt = null;
                exit();
            }

            $userId = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = $userId[0]["userId"];
            return $result;
            $stmt = null;
        }

        protected function getTeamId($teamName, $courseId){
            $stmt = $this->connect()->prepare('SELECT teamId FROM team WHERE teamName = ? AND courseId = ?');
            
            if(!$stmt->execute(array($teamName, $courseId))){
                $stmt = null;
                exit();
            }
            $teamId = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = $teamId[0]["teamId"];
            return $result;
            $stmt = null;
        }

        protected function updateTeam($teamId, $userId){
            $stmt = $this->connect()->prepare('UPDATE users SET teamId = ? WHERE userId = ?;');

            if(!$stmt->execute(array($teamId, $userId))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }

        protected function checkAdmin($userId){
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

        protected function checkTeam($teamName){
            $stmt = $this->connect()->prepare('SELECT teamName FROM team WHERE teamName =?;');

            if(!$stmt->execute(array($teamName))){
                $stmt = null;
                exit();
            }
            $resultCheck = null;
            if ($stmt->rowCount() == 0){
                $resultCheck = false;
            }else{$resultCheck = true;}
            return $resultCheck;
        }

        protected function checkUser($userName){
            $stmt = $this->connect()->prepare('SELECT userName FROM users WHERE userName =?;');

            if(!$stmt->execute(array($userName))){
                $stmt = null;
                exit();
            }
            $resultCheck = null;
            if ($stmt->rowCount() == 0){
                $resultCheck = false;
            }else{$resultCheck = true;}
            return $resultCheck;
        }

        protected function delTeam($teamId){
            $stmt = $this->connect()->prepare('DELETE FROM team WHERE teamId = ?;');

            if(!$stmt->execute(array($teamId))){
                $stmt = null;
                exit();
            }
        }

        protected function delUsers($teamId){
            $stmt = $this->connect()->prepare('UPDATE users SET teamId = NULL, isAdmin = 0 WHERE teamId = ?;');

            if (!$stmt->execute(array($teamId))){
                $stmt = null;
                exit();
            }
        }

        protected function unsetAdmins($teamId){
            $stmt = $this->connect()->prepare('UPDATE users SET isAdmin = 0 WHERE teamId = ?;');

            if (!$stmt->execute(array($teamId))){
                $stmt = null;
                exit();
            }
        }

        protected function isMember($userId, $teamId){
            $stmt = $this->connect()->prepare('SELECT teamId FROM users WHERE userId = ?;');

            if (!$stmt->execute(array($userId))){
                $stmt = null;
                exit();
            }

            $resultCheck = null;
            $isMember = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($isMember[0]["teamId"]==$teamId){
                $resultCheck = true;
            }else{
                 $resultCheck = false;
            }
            return $resultCheck;
            $stmt = null;
        }
    }
            