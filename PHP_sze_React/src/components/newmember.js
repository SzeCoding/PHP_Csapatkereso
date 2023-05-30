import React from "react";

export default class NewMember extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return (
        <div className="ui basic content center aligned segment">
          <button
            onClick={() => {
              this.props.handleOpen();
            }}
            className="ui basic button icon"
          >
            <i className="large plus icon" />
          </button>
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
                  name="newMember"
                  placeholder="felhasználónév"
                />
                <i className="users icon"></i>
              </div>
            </div>
            <div className="right menu">
              <div className="link item" style={{ padding: "0" }}>
                <button className="ui  inverted icon button">
                  <i
                    className="big green user plus icon"
                    style={{ margin: "auto", marginTop: "30%" }}
                  ></i>
                </button>
              </div>
              <div className="link item" style={{ padding: "0" }}>
                <button
                  onClick={() => {
                    this.props.handleOpen();
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
  }
}
