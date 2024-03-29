import React, { useContext, useEffect, useState } from "react";
import "../styles/teamlist.css";
import NewTeam from "./newteam";
import axios from "axios";

import { useOutletContext, useParams, Outlet, Link } from "react-router-dom";
import { DataContext } from "../context";

export default function TeamList() {
  const dataContext = useContext(DataContext);
  const loggedInUser = dataContext.loggedInUser;
  const { courseid } = useParams();
  const [isOpen, setIsOpen] = useState({ isOpen: false });
  const [handleDataUpdated] = useOutletContext();

  function handleClick() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  const displayTeams = dataContext.teams
    .filter((team) => team.courseId == courseid)
    .map((team, index) => (
      <Link to={"/csapatkereso/" + courseid + "/" + team.teamId} key={index}>
        <div className="link item">
          <div
            className="ui menu"
            style={{
              border: `${
                team.teamId == loggedInUser.teamId ? "2px solid #2D7AC8" : ""
              }`,
            }}
          >
            <div className="header item">
              <h3>{team.teamName}</h3>
            </div>
            <div className="header right item">
              <h3>
                {team.teamLimit} / {team.teamMembersCount}
              </h3>
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

      {!dataContext.loggedInUser.teamId &&
        (isOpen ? (
          <div className="ui basic content center aligned segment">
            <button onClick={handleClick} className="ui basic button icon">
              <i className="large plus icon" />
            </button>
          </div>
        ) : (
          <NewTeam
            handleClick={handleClick}
            courseid={courseid}
            handleDataUpdated={handleDataUpdated}
          />
        ))}
    </div>
  );
}
