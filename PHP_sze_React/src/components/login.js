import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import ProtectedRoutes from "../protectedroutes";

import "../styles/login.css";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const handleRegisterClick = () => {
    setIsRegister(true);
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/projects/php_project/PHP_sze/login.php", inputs)
      .then(function (response) {
        console.log(response);
        setShouldNavigate(true);
      })
      .catch(function (error) {
        console.log(error.message);
        setShouldNavigate(false);
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    console.log(inputs);

    axios
      .post("http://localhost/projects/php_project/PHP_sze/signup.php", inputs)
      .then(function (response) {
        console.log(response);
        setShouldNavigate(true);
      })
      .catch(function (error) {
        console.log(error.message);
        setShouldNavigate(false);
      });
  };

  return shouldNavigate ? (
    <Navigate to="/csapatkereso" />
  ) : !isRegister ? (
    <div className="login-container">
      <h2 className="ui dividing header">Jelentkezz be!</h2>
      <form className="ui form" onSubmit={handleLogin} method="post">
        <div className="field" style={{ marginTop: "30px" }}>
          <label>Felhasználónév</label>
          <input
            type="text"
            name="username"
            placeholder="Felhasználónév"
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Jelszó</label>
          <input
            type="password"
            name="password"
            placeholder="Jelszó"
            onChange={handleChange}
            required
          />
        </div>
        <div
          className="ui one column center aligned grid"
          style={{ margin: "10px" }}
        >
          <a onClick={handleRegisterClick}>Nincs még fiókod?</a>
        </div>
        <div className="field">
          <div className="ui one column center aligned grid">
            <div>
              <input
                type="submit"
                className="ui primary button"
                style={{ marginTop: "15px" }}
                value={"Bejelentkezés"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div className="login-container">
      <h2 className="ui dividing header">Regisztrálj be!</h2>
      <form className="ui form" onSubmit={handleSignup} method="post">
        <div className="field" style={{ marginTop: "30px" }}>
          <label>Felhasználónév</label>
          <input
            type="text"
            name="username"
            placeholder="Felhasználónév"
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Jelszó</label>
          <input
            type="password"
            name="password"
            placeholder="Jelszó"
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Jelszó ismétlése</label>
          <input
            type="password"
            name="passwordrepeat"
            placeholder="Jelszó"
            onChange={handleChange}
            required
          />
        </div>
        <div
          className="ui one column center aligned grid"
          style={{ margin: "10px" }}
        ></div>
        <div className="field">
          <div className="ui one column center aligned grid">
            <div>
              <input
                type="submit"
                className="ui primary button"
                style={{ marginTop: "15px" }}
                value={"Regisztráció"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
