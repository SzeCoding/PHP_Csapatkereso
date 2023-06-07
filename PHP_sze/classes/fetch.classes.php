<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
    class Fetch extends Dbh{
        
        
        public function getCourseData(){
            $sql = 'SELECT * FROM courses';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }
        public function getTeamData(){
            $sql = 'SELECT team.teamId, team.teamName, team.teamLimit, courses.courseId, COUNT(users.teamId) AS teamMembersCount 
                    FROM courses 
                    INNER JOIN team ON team.courseId = courses.courseId
                    LEFT JOIN users ON users.teamId = team.teamId
                    GROUP BY team.teamId';
        
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }
        
        public function getUserData(){
            $sql = 'SELECT users.userId, users.userName, users.isAdmin, users.teamId, team.courseId
                    FROM users
                    INNER JOIN team ON users.teamId = team.teamId
                    INNER JOIN courses ON team.courseId = courses.courseId';

            $stmt = $this->connect()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }
    }