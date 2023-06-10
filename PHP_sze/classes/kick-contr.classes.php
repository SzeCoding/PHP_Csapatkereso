<?php

    class KickContr extends Team{
        private $userName;

        public function __construct($userName){
            $this->userName = $userName;
        }

        public function kickUser(){

            $this->updateTeam(null, $this->getUserId($this->userName));
        }
}