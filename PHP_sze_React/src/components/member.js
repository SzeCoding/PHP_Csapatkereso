import React, { useContext } from "react";
import axios from "axios";
import { DataContext } from "../context";

const Member = (props) => {
  const dataContext = useContext(DataContext);
  const memberName = props.member.userName;
  console.log(props.member);
  const handleKick = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/projects/php_project/PHP_sze/kick.php", {
        memberName,
      })
      .then(
        setTimeout(function () {
          props.handleDataUpdated();
        }, 100)
      );
  };

  const handlePromote = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/projects/php_project/PHP_sze/promote.php", {
        memberName,
      })
      .then(
        setTimeout(function () {
          props.handleDataUpdated();
        }, 100)
      );
  };
  let userRender;

  if (dataContext.loggedInUser.teamId == props.team.teamId) {
    if (dataContext.loggedInUser.isAdmin == 1) {
      userRender = (
        <div className="ui  menu">
          <div className="item">
            <h2>{props.member.userName}</h2>
          </div>
          <div className="right menu">
            <div className="link item" style={{ padding: "0" }}>
              <button className="ui icon button" onClick={handlePromote}>
                <i
                  className=" big green angle double up icon"
                  style={{ margin: "auto" }}
                ></i>
              </button>
            </div>
            <div className="link item" style={{ padding: "0" }}>
              <button className="ui icon button" onClick={handleKick}>
                <i
                  className=" big red trash alternate outline icon"
                  style={{ margin: "auto", marginTop: "30%" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      userRender = (
        <div className="ui menu">
          <div className="item">
            <h2>{props.member.userName}</h2>
          </div>
        </div>
      );
    }
  } else {
    userRender = (
      <div className="ui  menu">
        <div className="item">
          <h2>{props.member.userName}</h2>
        </div>
      </div>
    );
  }

  if (dataContext.loggedInUser.userId == props.member.userId) {
    userRender = (
      <div className="ui menu">
        <div className="item">
          <h2>{props.member.userName} (te) </h2>
        </div>
      </div>
    );
  }

  if (props.member.isAdmin == 1) {
    userRender = (
      <div className="ui menu">
        <div className="item">
          <h2>{props.member.userName} (admin) </h2>
        </div>
      </div>
    );
    if (dataContext.loggedInUser.userId == props.member.userId) {
      userRender = (
        <div className="ui menu">
          <div className="item">
            <h2>{props.member.userName} (te) (admin) </h2>
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className="item"
      style={{
        paddingTop: "0px",
        paddingBottom: "0px",
        marginTop: "0.25rem",
        marginBottom: "0.25rem",
      }}
    >
      {userRender}
    </div>
  );
};

export default Member;
