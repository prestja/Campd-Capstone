import React, { useState }  from 'react'
import './Navigation.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Projects from './Projects'

class Navigation extends React.Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

         <Route path="/sign-in" component={Login} />
         <Route path="/sign-up" component={Signup} />
         <Route path="/projects" component={Projects} />

        </Switch>

      </Router>
    )
  }
}

function Home() {
  return (
    <div>

      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/sign-in">Login {Login}</a>
        <a href="/sign-up">Sign up {Signup}</a>
        <a href="/projects">Projects {Projects}</a>
      </div>

      <img src={ require('./unt-logo.jpeg') }/>
      <h1>The University of North Texas Research and Project Portal</h1>
      <br/>
      <p>The Research and Project Portal is a centralized database of all projects and research ideas by UNT students and faculty. <br/> You can search for specific projects, topics, projects held by specific professors or maintained by specific students.
      </p>
    </div>
  );
}

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Navigation;
