import React, { useState } from "react";
import "../styles/login.css";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegisterClick = () => {
    setIsRegister(true);
  };

  return !isRegister ? (
    <div className="login-container">
      <h2 className="ui dividing header">Jelentkezz be!</h2>
      <form className="ui form">
        <div className="field" style={{ marginTop: "30px" }}>
          <label>Felhasználónév</label>
          <input type="text" name="username" placeholder="Felhasználónév" />
        </div>
        <div className="field">
          <label>Jelszó</label>
          <input type="password" name="last-name" placeholder="Jelszó" />
        </div>
        <div
          className="ui one column center aligned grid"
          style={{ margin: "10px" }}
        >
          <a onClick={handleRegisterClick}>Van már fiókod?</a>
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
      <h2 className="ui dividing header">Regisztrálj!</h2>
      <form className="ui form">
        <div className="field" style={{ marginTop: "30px" }}>
          <label>Felhasználónév</label>
          <input type="text" name="username" placeholder="Felhasználónév" />
        </div>
        <div className="field">
          <label>Jelszó</label>
          <input type="password" name="last-name" placeholder="Jelszó" />
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
