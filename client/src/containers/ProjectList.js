import React from 'react';
import { connect } from 'react-redux';
import Listing from '../components/layout/Listing';
import { deleteProject, viewProjects } from '../actions';
import { SimpleGrid } from "@chakra-ui/core";

function ProjectList({ projects, onDelete, onView }) {
	if (!projects.length) {
		return (
			<div>No Projects</div>
		)
	}
	return (
		<SimpleGrid minChildWidth="50vh" spacing="1vw" m = {[8, 8, 8, 8]}>
			{projects.map(project => {
				return (
					<Listing name = {project.name} owner = {project.owner} description = {project.description} _id = {project._id} status = {project.status}></Listing>
				);
			})}
		</SimpleGrid>
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
