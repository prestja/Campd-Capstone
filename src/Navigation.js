import React from 'react'
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
        <div>
          <ul id="nav">
            <li><Link to="/">Hometest</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>



        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

      </Router>
    )
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h3>test</h2>
      <h3>test</h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default Navigation;
