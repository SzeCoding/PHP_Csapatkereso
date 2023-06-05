import React from "react";
import axios from "axios";


export default class NewTeam extends React.Component {
  state = {
    teamname: '',
    teamlimit: ''
  };
  
  handleAddTeam = event => {
    event.preventDefault();
    const teamdata = {
      teamname: this.state.teamname,
      teamlimit: this.state.teamlimit
    }
    axios.post('http://localhost/PHP_Csapatkereso/PHP_sze/addteam.php', {teamdata})
  }
  handleTeamname = event =>{
    this.setState({teamname: event.target.value});
  }
  handleTeamlimit = event =>{
    this.setState({teamlimit: event.target.value});
  }
  render() {
    const handleCancel = () => {
      this.props.handleClick();}


    return (
      <div
        className="ui basic content center  aligned segment"
        style={{
          width: "50%",
          height: "50%",
          margin: "auto",
          border: "1px solid rgba(34,36,38,.15)",
        }}
      >
        <form className="ui form" onSubmit={this.handleAddTeam} method="post">
          <div>
            <div
              className="ui center aligned segment"
              style={{
                border: "0",
                margin: "0.25rem",
                padding: "0.5em",
                boxShadow: "none",
              }}
            >
              <div className="field">
                <label>Csapatnév</label>
                <input 
                type="text"
                name="teamname"
                placeholder="Csapatnév"
                onChange={this.handleTeamname}
                required />
              </div>
            </div>
            <div
              className="ui compact  center aligned  segment"
              style={{
                border: "0",
                margin: "auto",
                marginBottom: "0.25rem",
                marginTop: "0.25rem",
                padding: "0.5em",
                boxShadow: "none",
              }}
            >
              <div className="field" style={{ boxShadow: "0" }}>
                <label>Max létszám</label>
                <input
                  type="number"
                  min="2"
                  name="teamlimit"
                  onChange={this.handleTeamlimit}
                  required
                  style={{ width: "5rem" }}
                />
              </div>
            </div>
          </div>
          <div
            className="ui center aligned segment"
            style={{ border: "0", boxShadow: "none" }}
          >
            <div className="field">
              <input
                type="submit"
                className="ui inverted green button"
                value="Kész"
              />
            </div>
          </div>
        </form>
        <button onClick={handleCancel} className="ui inverted red button">
          Mégse
        </button>
      </div>
    );
            
}}
