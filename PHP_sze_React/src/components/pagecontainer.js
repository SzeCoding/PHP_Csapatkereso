import React, { useState } from "react";
import ViewTeam from "./viewteam";
import TopBar from "./topBar";
import SideBar from "./sidebar";
import Teamlist from "./teamlist";
import { Outlet, Route, useParams } from "react-router-dom";

export default function PageContainer() {
  const [courses] = useState([
    {
      courseName: "php",
      courseID: "111",
      teams: [
        {
          teamName: "Team 1",
          teamID: "t1",
          members: [
            { memberName: "Alice", memberID: "a1", isAdmin: false },
            { memberName: "Bob", memberID: "a2", isAdmin: true },
            { memberName: "Charlie", memberID: "a3", isAdmin: false },
          ],
        },
        {
          teamName: "Team 2",
          teamID: "t2",
          members: [
            { memberName: "Dave", memberID: "a4", isAdmin: false },
            { memberName: "Eve", memberID: "a5", isAdmin: true },
            { memberName: "Frank", memberID: "a6", isAdmin: false },
          ],
        },
        {
          teamName: "Team 3",
          teamID: "t3",
          members: [
            { memberName: "Grace", memberID: "a7", isAdmin: false },
            { memberName: "Heidi", memberID: "a8", isAdmin: false },
            { memberName: "Ivan", memberID: "a9", isAdmin: true },
          ],
        },
      ],
    },
    {
      courseName: "Projektmunka1",
      courseID: "222",
      teams: [
        {
          teamName: "Team A",
          teamID: "tA",
          members: [
            { memberName: "Jack", memberID: "b1", isAdmin: false },
            { memberName: "Kelly", memberID: "b2", isAdmin: true },
            { memberName: "Liam", memberID: "b3", isAdmin: false },
          ],
        },
        {
          teamName: "Team B",
          teamID: "tB",
          members: [
            { memberName: "Mia", memberID: "b4", isAdmin: false },
            { memberName: "Nate", memberID: "b5", isAdmin: true },
            { memberName: "Oliver", memberID: "b6", isAdmin: false },
          ],
        },
        {
          teamName: "Team C",
          teamID: "tC",
          members: [
            { memberName: "Pete", memberID: "b7", isAdmin: false },
            { memberName: "Quinn", memberID: "b8", isAdmin: false },
            { memberName: "Rose", memberID: "b9", isAdmin: true },
          ],
        },
      ],
    },
    {
      courseName: "Projektmunka2",
      courseID: "333",
      teams: [
        {
          teamName: "Team X",
          teamID: "tX",
          members: [
            { memberName: "Sam", memberID: "c1", isAdmin: false },
            { memberName: "Tina", memberID: "c2", isAdmin: true },
            { memberName: "Uma", memberID: "c3", isAdmin: false },
          ],
        },
        {
          teamName: "Team Y",
          teamID: "tY",
          members: [
            { memberName: "Vince", memberID: "c4", isAdmin: false },
            { memberName: "Wendy", memberID: "c5", isAdmin: false },
          ],
        },
      ],
    },
  ]);
  const [val, setVal] = useState(1);

  const reRender = () => {
    setVal(val + 1);
  };
  const { courseid } = useParams();
  const course = courses.find((c) => c.courseID === courseid);
  let displayName = "";
  if (courseid) {
    displayName = course.courseName;
  }
  return (
    <div>
      <TopBar />
      <div className="ui grid">
        <div className="spacer row">
          <div className="column"></div>
        </div>
        <div className="row" style={{ height: "80vh" }}>
          <div className="two wide column" style={{ marginLeft: "30px" }}>
            <SideBar courses={courses} />
          </div>
          <div className="one wide column"></div>
          <div className="twelve wide column">
            <div className="row" style={{ height: "10%" }}>
              <div className="ui basic content center aligned segment">
                <h2>{displayName}</h2>
              </div>
            </div>
            <div className="row">
              <Outlet context={{ course, reRender }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
