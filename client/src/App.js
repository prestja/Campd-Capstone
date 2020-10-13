import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

// local imports
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Projects from "./components/layout/Projects";
import Signup from "./components/layout/Signup";
import AddProject from "./components/layout/AddProject";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/layout/Profile";
import ViewProject from "./components/layout/ViewProject";
import ViewProfileProject from "./components/layout/ViewProfileProject";
import Admin from "./components/layout/Admin";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log: (localStorage.jwtToken),
		};
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<div className="App">
						<Navbar></Navbar>
						<Route exact path = "/" component={Landing} />
						<Route exact path = "/viewprofileproject" component={ViewProfileProject} />
						<Route exact path = "/login" component={Login} />
						<Route exact path = "/projects" component={Projects} />
						<Route path = "/project/:" component={ViewProject} />
						<Route exact path = "/addproject" component={AddProject} />
						<Route exact path = "/signup" component={Signup} />
						<Route path = "/admin" component={Admin}/>
						<Switch>
							<PrivateRoute exact path="/profile" component={Profile} />
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		);
	}
}
export default App;
