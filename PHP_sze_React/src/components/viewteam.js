import React, { useContext } from "react";
import axios from "axios";
import Member from "./member";
import NewMember from "./newmember";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import { DataContext } from "../context";

export default function ViewTeam() {
  const [isOpen, setIsOpen] = useState(false);
  const { courseid } = useParams();
  const dataContext = useContext(DataContext);
  const loggedInUser = dataContext.loggedInUser;
  const [handleDataUpdated] = useOutletContext();

  console.log(handleDataUpdated);
  const { teamid } = useParams();
  const team = dataContext.teams.find((t) => t.teamId == teamid);
  const teamdata = {
    teamId: team.teamId,
    teamAdmin: loggedInUser.userId,
    teamUsername: loggedInUser.userName,
  };

  const members = dataContext.users
    .filter((user) => user.teamId == teamid)
    .map((member) => (
      <Member
        member={member}
        key={member.userId}
        handleDataUpdated={handleDataUpdated}
        team={team}
      />
    ));
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/csapatkereso/" + courseid);
  };

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleLeave = () => {
    console.log(teamdata);
    axios
      .post("http://localhost/PHP_Csapatkereso/PHP_sze/leaveteam.php", {
        teamdata,
      })
      .then(
        setTimeout(function () {
          handleDataUpdated();
        }, 100)
      );
  };

  const handleJoin = () => {
    console.log(teamdata);
    axios
      .post("http://localhost/PHP_Csapatkereso/PHP_sze/jointeam.php", {
        teamdata,
      })
      .then(
        setTimeout(function () {
          handleDataUpdated();
        }, 100)
      );
  };

  const handleDelete = () => {
    console.log(teamdata);
    axios
      .post("http://localhost/PHP_Csapatkereso/PHP_sze/delteam.php", {
        teamdata,
      })
      .then(
        navigate("/csapatkereso/" + courseid),
        setTimeout(function () {
          handleDataUpdated();
        }, 100)
      );
    //http://localhost/projects/php_project/PHP_sze/delteam.php
  };

  let button;

  if (team.teamId == loggedInUser.teamId && loggedInUser.isAdmin == true) {
    button = (
      <button
        onClick={handleDelete}
        className="ui negative button"
        style={{
          marginRight: "0em",
        }}
      >
        Csapat törlése
      </button>
    );
  } else if (
    team.teamId == loggedInUser.teamId &&
    (loggedInUser.isAdmin == null || loggedInUser.isAdmin == false)
  ) {
    button = (
      <button
        onClick={handleLeave}
        className="ui negative button"
        style={{
          marginRight: "0em",
        }}
      >
        Csapat elhagyása
      </button>
    );
  } else if (loggedInUser.teamId == null) {
    button = (
      <button
        onClick={handleJoin}
        className="ui primary  button"
        style={{
          marginRight: "0em",
        }}
      >
        Csatlakozás
      </button>
    );
  }

  return (
    <div
      className="ui grid"
      style={{
        border: "1px solid rgba(34,36,38,.15)",
        width: "70%",
        height: "100%",
        margin: "auto",
        padding: "2em",
      }}
    >
      <div className="nine wide column" style={{}}>
        <div
          className="ui fluid vertical tabular menu"
          style={{ border: "0", boxShadow: "none" }}
        >
          <div
            className="ui basic center aligned segment"
            style={{
              margin: "auto",
              padding: "0em",
              marginBottom: "0em",
              boxShadow: "none",
            }}
          >
            <h2
              className="divided header"
              style={{
                margin: "auto",
                padding: "0em",
                marginBottom: "0em",
                boxShadow: "none",
              }}
            >
              {team.teamName}
            </h2>
            <h2
              className="divided header"
              style={{
                margin: "auto",
                padding: "0em",
                marginBottom: "0em",
                boxShadow: "none",
              }}
            >
              {team.teamLimit} / {team.teamMembersCount}
            </h2>
          </div>
          {members}
          {dataContext.loggedInUser.isAdmin == 1 ? (
            <NewMember
              handleOpen={handleOpen}
              isOpen={isOpen}
              handleDataUpdated={handleDataUpdated}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className=" one wide column" style={{ boxShadow: "none" }}></div>
      <div
        className=" six wide column"
        style={{
          padding: "0em",
          boxShadow: "none",
        }}
      >
        <div
          className="ui fluid tabular menu"
          style={{ borderBottom: "0px", boxShadow: "none" }}
        >
          <div
            className="right item"
            style={{
              boxShadow: "none",
              paddingTop: "0em",
              paddingRight: "0em",
            }}
          >
            <button
              onClick={handleClose}
              className="ui inverted red icon button"
            >
              <i className="close icon"></i>
            </button>
          </div>
        </div>
        <div
          className="ui basic content right aligned segment"
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            boxShadow: "none",
            marginRight: "0px",
            padding: "0em",
          }}
        >
          {button}
        </div>
      </div>
    </div>
  );
}
