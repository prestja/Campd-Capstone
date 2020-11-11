import React, { Component } from "react";
import {
	Heading, 
	Flex,
	Link,
	Box,
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
			<Grid templateColumns="repeat(auto-fit, 60vw)" gap={6} bg = "untaccentgray.700" color = "white" justifyContent="center">
				<Flex>
					<Image size = "5vw" src={require('./unt-banner.svg')}></Image>
					<Text fontWeight = "bold" fontSize = {{base: "xl", sm: "3xl", md: "4xl"}} color = "white" textAlign= "center">UNT Greenlight</Text>
				</Flex>
				<Flex>
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
