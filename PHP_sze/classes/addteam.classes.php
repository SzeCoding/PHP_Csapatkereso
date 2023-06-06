<?php
    class team extends Dbh{

        public function AddTeam($teamname, $teamlimit){

            $stmt = $this->connect()->prepare('INSERT INTO team (teamName, teamLimit)  VALUES(?,?);');

            if(!$stmt->execute(array($teamname, $teamlimit))){
                $stmt = null;
                exit();
            }
            $stmt = null;
        }

    }
            