import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context";
import axios from "axios";

export default function SideBar() {
  const dataContext = useContext(DataContext);

  const courses = dataContext.courses.map((course) => (
    <NavLink
      className="item"
      to={"/csapatkereso/" + course.courseId}
      key={course.courseId}
    >
        {course.courseName}
    </NavLink>
  ));

  return (
    <div
      className="ui vertical pointing menu"
      style={{
        height: "80vh",
        width: "100%",
      }}
    >
      <h2 className="header item">Kurzusok</h2>
      {courses}
    </div>
  );
}
