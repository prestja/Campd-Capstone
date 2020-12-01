import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/core";
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

//Top-level component of the website. Everything is contained inside here
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log: (localStorage.jwtToken),
		};
	}

	render() {
		//const isLoggedIn = true;
		//const isAdmin = true;
		return (
			//custTheme: src/components/layout/theme.js (source of custom colors used elsewhere in the project)
			<ChakraProvider theme={custTheme}>
				<Router>
					<Stack className="App" bg= "untsec1" minH = "100vh" maxW = "100vw" overflow="hidden">
						<Box>
							{/* Navbar: src/components/layout/Navbar.js (The bar at the top of the site with links to each page) */}
							<Navbar></Navbar>
						</Box>
						{/* Creates the component below the navbar based on the current URL being accessed. */}
						<Box minH = "100%">
							{/* src/components/layout/landing.js - the home page you're sent to when first accessing the website */}
							<Route exact path = "/" component={Landing} />
							<Route exact path = "/viewprofileproject" component={ViewProfileProject} />
							
							{/* src/components/auth/login.js and src/components/auth/adduser.js - basic login and signup pages */}
							<Route exact path = "/login" component={Login} />
							<Route exact path = "/signup" component={Signup} />
							
							{/* src/components/layout/projects.js - The user-facing list of all projects accessed from the navbar */}
							<Route exact path = "/projects" component={Projects} />

							{/* src/components/layout/projectview.js and src/components/layout/editproject.js - The pages to view or edit the details of a single project, 
									accessed by clicking links within the other lists */}
							<Route path = "/project/:id" component={ProjectView} />
							<Route path = "/edit/:id" component={EditProject} />

							{/* src/components/layout/addproject.js - The page to add a new project to the site's database */}
							<Route exact path = "/addproject" component={AddProject} />

							{/* src/components/layout/image.js */}
							<Route path = "/Image/:id" Component={Image}/>

							{/* src/components/layout/admin.js - The page which should only be visible to admins, which gives them a different view of the project list 
									and some additional controls. */}
							<Route exact path="/admin" component={Admin} />

							{/* src/components/layout/profile.js - The profile page for the specific user who's been signed in */}
							<Switch>
								<PrivateRoute exact path="/profile" component={Profile} />
							</Switch>
						</Box>
					</Stack>
				</Router>
			</ChakraProvider>
		);
	}
}
export default App;
