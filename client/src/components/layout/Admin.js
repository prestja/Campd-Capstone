import React from "react";
import { connect } from 'react-redux';
import { Menu, MenuButton, MenuItem, MenuList, Button, Box, Stack } from "@chakra-ui/core";
import ListingCompact from "./ListingCompact";

function Admin({projects}) {
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
			<Stack>
				{projects.map(project => {
					return (
						<ListingCompact name = {project.name} owner = {project.owner} description = {project.description} _id = {project._id} status = {project.status}></ListingCompact>
					);
				})}
			</Stack>
		</Box>		
	);
}

const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDelete: id => {
			//dispatch(deleteProject(id));
		},
		onView: id => {
			//dispatch(viewProjects(id))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Admin);

