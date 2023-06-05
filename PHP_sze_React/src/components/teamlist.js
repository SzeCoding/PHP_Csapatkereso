import React, { useEffect, useState } from "react";
import "../styles/teamlist.css";
import NewTeam from "./newteam";
import axios from 'axios';

import { useOutletContext, useParams, Outlet, Link } from "react-router-dom";

export default function TeamList() {
  const { courseid } = useParams();
  const { teamid } = useParams();
  const { course } = useOutletContext();
  const [isOpen, setIsOpen] = useState({ isOpen: false });

  useEffect(() => {
    console.log("mounted teamlist");
  }, []);

  function handleClick() {
    axios.post("http://localhost/PHP_csapatkereso/PHP_sze/addteam.php")
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  const displayTeams = course.teams.map((team, index) => (
    <Link to={"/csapatkereso/" + courseid + "/" + team.teamID} key={index}>
      <div className="link item">
        <div className="ui menu">
          <div className="header item">
            <h3>{team.teamName}</h3>
          </div>
          <div className="header right item">
            <h3>5/4</h3>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <div
      className="ui huge vertical menu"
      style={{
        width: "70%",
        height: "100%",
        margin: "auto",
      }}
    >
      {displayTeams}
      {isOpen ? (
        <div className="ui basic content center aligned segment">
          <button onClick={handleClick} method="POST" className="ui basic button icon">
            <i className="large plus icon" />
          </button>
        </div>
      ) : (
        <NewTeam handleClick={handleClick} />
      )}
    </div>
  );
}
