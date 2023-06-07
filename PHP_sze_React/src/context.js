import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (userData) => {
    setLoggedInUser(userData);
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  const [courses, setCourses] = useState({});
  const [teams, setTeams] = useState({});
  const [users, setUsers] = useState({});

  const fetchData = (data) => {
    setCourses(data.courseData);
    setTeams(data.teamData);
    setUsers(data.userData);
  };

  return (
    <DataContext.Provider
      value={{
        loggedInUser,
        login,
        logout,
        fetchData,
        courses,
        teams,
        users,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
