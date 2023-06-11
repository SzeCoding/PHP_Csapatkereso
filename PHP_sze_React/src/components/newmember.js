import React, { useContext } from "react";
import axios from "axios";
import {
  Navigate,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { DataContext } from "../context";

const NewMember = (props) => {
  const [invitename, setMemberName] = useState("");
  const dataContext = useContext(DataContext);
  const { teamid } = useParams();
  const team = dataContext.teams.find((t) => t.teamId == teamid);

  const handleMemberName = (event) =>{
    setMemberName(event.target.value);
  }
  let button;

  const handleInvite = (event) => {
    event.preventDefault();

    const invitedata = {
      invitename: invitename,
      teamid: team.teamId
    } 

    axios.post("http://localhost/PHP_Csapatkereso/PHP_sze/invite.php", {invitedata})
  }
  if (props.isOpen === false) {
    if(team.teamLimit==team.teamMembersCount){
      button = <h2>A csapat megtelt!</h2>
    } else {
      button = <button
      onClick={() => {
        props.handleOpen();
      }}
      className="ui basic button icon"
    >
      <i className="large plus icon" />
    </button>}
      
    return (
      <div className="ui basic content center aligned segment">
        {button}
      </div>
    );
  } else {
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
        <div className="ui  menu">
          <div className="item">
            <div className="ui left icon input">
              <input
                className="ui input"
                type="text"
                name="invitename"
                placeholder="felhasználónév"
                onChange = {handleMemberName}
                required
              />
              <i className="users icon"></i>
            </div>
          </div>
          <div className="right menu">
            <div className="link item" style={{ padding: "0" }}>
              <button className="ui  inverted icon button" onClick={handleInvite}>
                <i
                  className="big green user plus icon"
                  style={{ margin: "auto", marginTop: "30%" }}
                ></i>
              </button>
            </div>
            <div className="link item" style={{ padding: "0" }}>
              <button
                onClick={() => {
                  props.handleOpen();
                }}
                className="ui inverted icon button"
              >
                <i
                  className="big red close icon"
                  style={{ margin: "auto", marginTop: "30%" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewMember;
