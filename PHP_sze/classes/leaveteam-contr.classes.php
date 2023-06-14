<?php
    class LeaveContr extends Team{
        private $userName;

        public function __construct($userName){
            $this->userName = $userName;
        }
        public function LeaveTeam(){
            $this->updateTeam(null, $this->getUserId($this->userName));
        }
    }