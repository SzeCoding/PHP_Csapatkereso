import React from "react";

export default class TopBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="ui huge top attached fluid secondary menu">
          <h1 className="ui item header">SZE csapatkereső</h1>
          <div className="right menu">
            <div className="item">
              <a className="ui primary button">Kijelentkezés</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
