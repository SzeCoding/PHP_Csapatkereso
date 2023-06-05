import React from "react";
import axios from "axios";

const handleLogout = () => {
  axios
    .post("http://localhost/PHP_Csapatkereso/PHP_sze/api/logout.php") //check if path is correct
    .then((response) => {
      window.location.href = "http://localhost:3000/login";
    });
};

export default class TopBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="ui huge top attached fluid secondary menu">
          <h1 className="ui item header">SZE csapatkereső</h1>
          <div className="right menu">
            <div className="item">név</div>
            <div className="item">
              <button onClick={handleLogout} method="POST">
                <a className="ui primary button">Kijelentkezés</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
