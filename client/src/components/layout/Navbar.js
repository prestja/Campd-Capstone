import React, { Component } from "react";
import {
	Heading, 
	Flex,
	Link,
	Stack,
	Box
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
			<Flex
      			align="center"
				justify="space-between"
				wrap="wrap"
				bg="untgreen"
    		>
				<Stack minW = "100%">
					<Heading as="h1" size="lg" letterSpacing={"-.1rem"} color = "white">UNT Greenlight Projects Portal</Heading>
					<Box bg = "untaccentgray">
						<Link href ="/">Home</Link>
						<Link href  = "/projects">Projects</Link>
						{!isLoggedIn ? null: <Link href="/AddProject">Add Project</Link>}
						{!isLoggedIn ? <div><Link href="/login">Login</Link> <Link to="/signup">Sign up</Link> </div>: <Link href = "/profile">Profile</Link>}
						{isAdmin && isLoggedIn ? <Link href="/admin">Admin</Link> : null}
					</Box>
				</Stack>
			</Flex>
		);
	}
}
export default Navbar;
