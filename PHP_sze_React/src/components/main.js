import React from "react";

import TopBar from "./topBar";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Outlet />
      </div>
    );
  }
}
