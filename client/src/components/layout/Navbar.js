import React, { Component } from "react";
import {
	Flex,
	Image,
	Grid,
	Text,
	TabList,
	Tab,
	Tabs,
	Link
} from "@chakra-ui/core";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log: localStorage.getItem("jwtToken")
		};
	}

	render() {
		const isLoggedIn = false;
		const isAdmin = true;
		let tabData = [
			{
				  label: "Home",
				  href: "/",
			},
			{
				  label: "Projects",
				  href: "/projects",
			},
		];
		if (isLoggedIn)
		{
			tabData.push({label: "Profile", href: "/profile"});
		}
		else
		{
			tabData.push({label: "Login", href: "/login"});
		}
		if (isAdmin)
		{
			tabData.push({label: "Administration", href: "/admin"})
		}

		return (
			<Flex bg = "white">
				<Image size = "5vw" src={require('./unt-banner.svg')}></Image>
				<Grid templateColumns="repeat(auto-fit, 60vw)" gap={6} color = "untsec1" justifyContent="center">
					{/* First row */}
					<Flex>
						<Text fontWeight = "bold" fontSize = {{base: "xl", sm: "3xl", md: "4xl"}}>UNT Greenlight Projects Portal</Text>
					</Flex>
					{/* Second row*/}
					<Flex>
						<Tabs
							isFitted
							variant = "enclosed"
							onChange={(index) => { {/* */}
								window.location.href = tabData[index].href;
							}}>
							<TabList>
								{tabData.map((tab, index) => (
									<Tab key={index}>{tab.label}</Tab>
								))}
							</TabList>
						</Tabs>
					</Flex>
				</Grid>
			</Flex>
			
		);
	}
}
export default Navbar;
