import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { Stack, Box } from "@chakra-ui/core";
import custTheme from "./components/layout/theme.js";

// local imports
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Projects from "./components/layout/Projects";
import Signup from "./components/layout/Signup";
import AddProject from "./components/layout/AddProject";
import EditProject from "./components/layout/EditProject";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/layout/Profile";
import ProjectView from "./components/layout/ProjectView";
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
			<ThemeProvider theme={custTheme}>
				<Router>
					<Stack className="App" bg= "untsec1" minH = "100vh" maxW = "100vw" overflow="hidden">
						<Box>
							<Navbar></Navbar>
						</Box>
						<Box minH = "100%">
							<Route exact path = "/" component={Landing} />
							<Route exact path = "/viewprofileproject" component={ViewProfileProject} />
							<Route exact path = "/login" component={Login} />
							<Route exact path = "/projects" component={Projects} />
							<Route path = "/project/:id" component={ProjectView} />
							<Route path = "/edit/:id" component={EditProject} />
							<Route exact path = "/addproject" component={AddProject} />
							<Route exact path = "/signup" component={Signup} />
							<Route path = "/admin" component={Admin}/>
							<Route path = "/Image/:id" Component={Image}/>
							<Switch>
								<PrivateRoute exact path="/profile" component={Profile} />
							</Switch>
						</Box>
					</Stack>
				</Router>
			</ThemeProvider>
		);
	}
}
export default App;
