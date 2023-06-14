import React, { useContext } from "react";
import axios from "axios";
import { DataContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function TopBar(props) {
  const dataContext = useContext(DataContext);
  const loggedInUser = dataContext.loggedInUser;
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("http://localhost/PHP_Csapatkereso/PHP_sze/logout.php") // http://localhost/projects/php_project/PHP_sze/fetch.php
      .then((response) => {
        navigate("/login");
        dataContext.logout();
      });
  };

  return (
    <div>
      <div className="ui huge top attached fluid secondary menu">
        <h1 className="ui item header">SZE csapatkereső</h1>
        <div className="right menu">
          <div className="item">{loggedInUser.userName}</div>
          <div className="item">
            <button
              className="ui primary button"
              onClick={handleLogout}
              method="POST"
            >
              Kijelentkezés
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
