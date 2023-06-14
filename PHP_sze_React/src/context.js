import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (userData) => {
    setLoggedInUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  useEffect(() => {
    const localLoggedInUser = localStorage.getItem("loggedInUser");
    if (!localLoggedInUser) {
      setLoggedInUser(JSON.parse(localLoggedInUser));
    }
  }, []);

  const [courses, setCourses] = useState({});
  const [teams, setTeams] = useState({});
  const [users, setUsers] = useState({});

  const fetchData = (data) => {
    setCourses(data.courseData);
    setTeams(data.teamData);
    setUsers(data.userData);
  };

  const userUpdate = (userData) => {
    setLoggedInUser(userData);
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
        userUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
