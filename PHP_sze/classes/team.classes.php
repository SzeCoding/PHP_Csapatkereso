<?php
    class Team extends Dbh{

        public function AddTeam($courseId, $teamname, $teamlimit){

            $stmt = $this->connect()->prepare('INSERT INTO team (courseId, teamName, teamLimit)  VALUES(?,?,?);');

            if(!$stmt->execute(array($courseId, $teamname, $teamlimit))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }
        public function SetAdmin($userId){
            $stmt = $this->connect()->prepare('UPDATE users SET isAdmin = 1 WHERE userId = ?;');

            if(!$stmt->execute(array($userId))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }

    }
            