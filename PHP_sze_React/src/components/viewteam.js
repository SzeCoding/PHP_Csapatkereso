import React, { useContext } from "react";
import Member from "./member";
import NewMember from "./newmember";
import {
  Navigate,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { DataContext } from "../context";

export default function ViewTeam() {
  const [isOpen, setIsOpen] = useState(false);
  const { courseid } = useParams();
  const dataContext = useContext(DataContext);

  const { teamid } = useParams();
  const team = dataContext.teams.find((t) => t.teamId == teamid);

  console.log(team.teamMembersCount);

  const members = dataContext.users
    .filter((user) => user.teamId == teamid)
    .map((member) => (
      <Member memberName={member.userName} key={member.userId} />
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
          <NewMember handleOpen={handleOpen} isOpen={isOpen} />
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
          <button
            className="ui negative button"
            style={{
              marginRight: "0em",
            }}
          >
            Csapat törlése
          </button>
        </div>
      </div>
    </div>
  );
}
