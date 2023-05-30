import React from "react";

export default class Member extends React.Component {
  render() {
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
            <h2>{this.props.memberName}</h2>
          </div>
          <div className="right menu">
            <div className="link item" style={{ padding: "0" }}>
              <i
                className=" big green angle double up icon"
                style={{ margin: "auto", marginTop: "30%" }}
              ></i>
            </div>
            <div className="link item" style={{ padding: "0" }}>
              <i
                className=" big red trash alternate outline icon"
                style={{ margin: "auto", marginTop: "30%" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
