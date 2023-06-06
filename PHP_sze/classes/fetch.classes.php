<?php
    class Fetch extends Dbh{

        public function getTeamData(){
            $sql = 'SELECT team.teamName, courses.courseName FROM courses INNER JOIN team on team.courseId = courses.courseId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }

        public function getUserData(){
            $sql = 'SELECT users.userId, users.userName, team.teamName FROM users INNER JOIN team ON users.teamId = team.teamId';
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }
    }