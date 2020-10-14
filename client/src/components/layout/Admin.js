import React, { Component } from "react";
import { Menu, MenuButton, MenuItem, MenuList, Button, Box } from "@chakra-ui/core";

class Admin extends Component {
	render() {
		return (
			<Box>
				<Menu>
					<MenuButton as={Button} rightIcon="chevron-down">
    					Administrative Actions
  					</MenuButton>
					<MenuList>
    					<MenuItem>Download all projects</MenuItem>
    					<MenuItem>Download selected projects</MenuItem>
						<MenuItem>Merge projects from file</MenuItem>
						<MenuItem>Delete all projects</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		);
	}
}
export default Admin;
