import React from 'react';
import { connect } from 'react-redux';
import Listing from '../components/layout/Listing';
import { deleteProject, viewProjects } from '../actions';
import { Grid, Box } from "@chakra-ui/core";
import undraw from '../images/projects.svg';
import ImageUpload from "../components/layout/Image";

function ProjectList({ projects, onDelete, onView }) {
	if (!projects.length) {
		return (
			<div>No Projects</div>
		)
	}
	return (
		<Grid templateColumns="repeat(auto-fit, 40vh)" gap={6} bg = "green.400" justifyContent="center">
			{projects.map(project => {
				if (project.status !== "proposal") {
				return (
					<Listing file={project.file} name = {project.name} owner = {project.owner} description = {project.description} _id = {project._id} status = {project.status}></Listing>
				);}
			})}
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
