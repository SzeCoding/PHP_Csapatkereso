<?php
    class team extends Dbh{

        protected function AddTeam($teamname, $teamlimit){

            $stmt = $this->connect()->prepare('INSERT INTO team (teamName, teamLimit)  VALUES(?,?);');
            $stmt->execute();

            if(!$stmt->execute(array($teamname, $teamlimit))){
                $stmt = null;
                #header(location login page)
                exit();
            }
    
            $stmt = null;
        }

    }
            