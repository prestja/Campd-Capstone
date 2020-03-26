import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div >


        <img src={ require('./unt-logo.jpeg') }/>
        <h1>The University of North Texas Research and Project Portal</h1>
        <br/>
        <p>The Research and Project Portal is a centralized database of all projects and research ideas by UNT students and faculty. <br/> You can search for specific projects, topics, projects held by specific professors or maintained by specific students.
        </p>
      </div>



    );
  }
}
export default Landing;
