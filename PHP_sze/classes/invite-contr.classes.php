<?php

    class InviteContr extends Team{
        private $userName;
        private $teamId;

        public function __construct($teamId, $userName){
            $this->teamId = $teamId;
            $this->userName = $userName;
        }

        public function Invite(){
            $userId = $this->getUserId($this->userName);
            $this->updateTeam($this->teamId, $userId);
        }
}