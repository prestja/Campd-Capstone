import React from 'react'
import './Navigation.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Navigation extends React.Component {
  render() {
    return (
      <Router>
         

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
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
  <a href="/register">Registration</a>
</div> 
      <h2>Home</h2>
    </div>
  );
}


function Register() {
  return (
    <div>
      <div class="topnav">
  <a href="/">Home</a>
  <a class="active" href="/register">Registration</a>
</div> 
      <h2>Register</h2>
    </div>
  );
}

export default Navigation;
