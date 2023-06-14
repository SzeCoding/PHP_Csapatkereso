import React, { useContext, useState } from "react";
import axios from "axios";
import { DataContext } from "../context";

export default function ViewTeam(props) {
  const [teamname, setTeamName] = useState("");
  const [teamlimit, setTeamLimit] = useState("");

  const dataContext = useContext(DataContext);
  const loggedInUser = dataContext.loggedInUser;

  const handleAddTeam = (event) => {
    event.preventDefault();

    const teamdata = {
      teamName: teamname,
      teamLimit: teamlimit,
      teamCourse: props.courseid,
      teamAdmin: loggedInUser.userId,
    };

    axios
      .post("http://localhost/projects/php_project/PHP_sze/addteam.php", {
        teamdata,
      }) //http://localhost/projects/php_project/PHP_sze/addteam.php
      .then(
        props.handleClick(),
        setTimeout(function () {
          props.handleDataUpdated();
        }, 100)
      );
  };

  const handleTeamName = (event) => {
    setTeamName(event.target.value);
  };

  const handleTeamLimit = (event) => {
    setTeamLimit(event.target.value);
  };

  const handleCancel = () => {
    props.handleClick();
  };

  return (
    <div
      className="ui basic content center  aligned segment"
      style={{
        width: "50%",
        height: "50%",
        margin: "auto",
        border: "1px solid rgba(34,36,38,.15)",
      }}
    >
      <form className="ui form" onSubmit={handleAddTeam} method="post">
        <div>
          <div
            className="ui center aligned segment"
            style={{
              border: "0",
              margin: "0.25rem",
              padding: "0.5em",
              boxShadow: "none",
            }}
          >
            <div className="field">
              <label>Csapatnév</label>
              <input
                type="text"
                name="teamname"
                placeholder="Csapatnév"
                onChange={handleTeamName}
                required
              />
            </div>
          </div>
          <div
            className="ui compact  center aligned  segment"
            style={{
              border: "0",
              margin: "auto",
              marginBottom: "0.25rem",
              marginTop: "0.25rem",
              padding: "0.5em",
              boxShadow: "none",
            }}
          >
            <div className="field" style={{ boxShadow: "0" }}>
              <label>Max létszám</label>
              <input
                type="number"
                min="2"
                name="teamlimit"
                onChange={handleTeamLimit}
                required
                style={{ width: "5rem" }}
              />
            </div>
          </div>
        </div>
        <div
          className="ui center aligned segment"
          style={{ border: "0", boxShadow: "none" }}
        >
          <div className="field">
            <input
              type="submit"
              className="ui inverted green button"
              value="Kész"
            />
          </div>
        </div>
      </form>
      <button onClick={handleCancel} className="ui inverted red button">
        Mégse
      </button>
    </div>
  );
}
