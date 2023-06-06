import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../context";

export default function TopBar(props) {
  const userContext = useContext(UserContext);
  const loggedInUser = userContext;

  const handleLogout = () => {
    axios
      .post("http://localhost/projects/php_project/PHP_sze/logout.php") // Check if the path is correct
      .then((response) => {
        window.location.href = "http://localhost:3000/login";
        userContext.logout();
      });
  };

  return (
    <div>
      <div className="ui huge top attached fluid secondary menu">
        <h1 className="ui item header">SZE csapatkereső</h1>
        <div className="right menu">
          <div className="item">{loggedInUser.user.username}</div>
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
