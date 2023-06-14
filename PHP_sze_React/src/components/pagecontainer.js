import React, { useContext, useState } from "react";
import TopBar from "./topBar";
import SideBar from "./sidebar";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { DataContext } from "../context";

export default function PageContainer() {
  const dataContext = useContext(DataContext);
  const [teamsUpdated, setTeamsUpdated] = useState(false);

  useEffect(() => {
    getData();
  }, [teamsUpdated]);

  const getData = () => {
    axios
      .get("http://localhost/projects/php_project/PHP_sze/fetch.php") //http://localhost/projects/php_project/PHP_sze/fetch.php
      .then(function (res) {
        dataContext.fetchData(res.data);
        const updatedUser = res.data.userData.find(
          (user) => user.userId === dataContext.loggedInUser.userId
        );

        dataContext.userUpdate(updatedUser);
      });
  };

  const handleDataUpdated = () => {
    setTeamsUpdated(!teamsUpdated);
  };

  return (
    <div>
      <TopBar />
      <div className="ui grid">
        <div className="spacer row">
          <div className="column"></div>
        </div>
        <div className="row" style={{ height: "80vh" }}>
          <div className="two wide column" style={{ marginLeft: "30px" }}>
            <SideBar />
          </div>
          <div className="one wide column"></div>
          <div className="twelve wide column">
            <div className="row" style={{ height: "10%" }}>
              <div className="ui basic content center aligned segment"></div>
            </div>
            <div className="row">
              <Outlet context={[handleDataUpdated]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
