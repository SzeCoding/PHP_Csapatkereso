import React, { useContext } from "react";
import axios from "axios";
import { DataContext } from "../context";

export default function TopBar(props) {
  const dataContext = useContext(DataContext);
  const loggedInUser = dataContext.loggedInUser;

  const handleLogout = () => {
    axios
      .post("http://localhost/PHP_Csapatkereso/PHP_sze/logout.php") // http://localhost/projects/php_project/PHP_sze/fetch.php
      .then((response) => {
        window.location.href = "http://localhost:3000/login";
        dataContext.logout();
      });
  };

  return (
    <div>
      <div className="ui huge top attached fluid secondary menu">
        <h1 className="ui item header">SZE csapatkereső</h1>
        <div className="right menu">
          <div className="item">{loggedInUser.username}</div>
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
