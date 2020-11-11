import React, { Component } from "react";
import {
	Heading, 
	Flex,
	Link,
	Stack,
	Image,
	Divider,
	Grid,
	Text,
	AspectRatioBox
} from "@chakra-ui/core";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log: localStorage.getItem("jwtToken")
		};
	}

	render() {
		const isLoggedIn = true;
		const isAdmin = true; 
		return (
			<Grid templateColumns="repeat(auto-fit, 60vw)" gap={6} bg = "untaccentgray" color = "white" justifyContent="center">
				<Flex>
					<Image>

					</Image>
					<Heading>UNT Greenlight Projects Portal</Heading>	
				</Flex>
				<Flex marginRight = "40px">
					<Link marginRight = "1rem" color = "white" href ="/">Home</Link >
					<Link marginRight = "1rem" color = "white" href  = "/projects">Projects</Link>
					{!isLoggedIn ? null: <Link marginRight = "1rem" color = "white" href="/AddProject">Add Project</Link>}
					{!isLoggedIn ? <div><Link marginRight = "1rem" color = "white" href="/login">Login</Link> <Link marginRight = "1rem" color = "white" to="/signup">Sign up</Link> </div>: <Link marginRight = "1rem" color = "white" href = "/profile">Profile</Link>}
					{isAdmin && isLoggedIn ? <Link marginRight = "1rem" color = "white" href="/admin">Admin</Link> : null}
				</Flex>
					
			</Grid>
		);
	}
}
export default Navbar;
