import React from "react";
import axios from "axios";

const Member = (props) => {
  
  const member = props.memberName;
  
  const handleKick = (event) =>{
    event.preventDefault();

    axios.post("http://localhost/PHP_Csapatkereso/PHP_sze/kick.php", {member})
  }

  const handlePromote = (event) =>{
    event.preventDefault();

    axios.post("http://localhost/PHP_Csapatkereso/PHP_sze/promote.php", {member})
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
      <div className="ui  menu">
        <div className="item">
          <h2>{props.memberName}</h2>
        </div>
        <div className="right menu">
          <div className="link item" style={{ padding: "0" }}>
            <button onClick={handlePromote}>
              <i
                className=" big green angle double up icon"
                style={{ margin: "auto", marginTop: "30%" }}
              ></i>
            </button>
          </div>
          <div className="link item" style={{ padding: "0" }}>
            <button onClick={handleKick}>
              <i
                className=" big red trash alternate outline icon"
                style={{ margin: "auto", marginTop: "30%" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
