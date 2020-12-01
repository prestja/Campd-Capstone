import React from 'react';
import { connect } from 'react-redux';
import Listing from '../components/layout/Listing';
import { deleteProject, viewProjects } from '../actions';
import { Grid, Box, Text } from "@chakra-ui/core";

function ProjectList({ projects, onDelete, onView }) {
	//Gives an error message if there are no projects available or if the queries don't match anything in the list
	if (!projects.length) {
		return (
			<Box bg="white" width={"60vw"} borderRadius="lg" alignSelf="center">
				<Text width={"100%"} textAlign={"center"} paddingY="3px">Looks like there aren't any project matching those search terms. Modify your search or consider creating a project of your own.</Text>
			</Box>
		)
	}
	return (
		//The constraining grid for project cards. Auto-expands to fill the space given to it by the window it's in.
		<Grid templateColumns="repeat(auto-fit, 35vh)" gap={6} justifyContent="center">
			{
				projects.map(project => {
				//Proposed but unverified projects don't show up on the user projects page, only on the admin page.
					if (project.status !== "proposal") {
						return (
							// src/components/layout/Listing.js - the individual "card" displays of each project.
							<Listing file={project.file} name = {project.name} owner = {project.owner} description = {project.description} _id = {project._id} status = {project.status}></Listing>
						);
					}
				})
			}
		</Grid>
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
			dispatch(deleteProject(id));
		},
		onView: id => {
			dispatch(viewProjects(id))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectList);
