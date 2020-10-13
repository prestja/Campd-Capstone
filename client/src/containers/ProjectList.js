import React from 'react';
import { connect } from 'react-redux';
import Listing from '../components/layout/Listing';
import { deleteProject, viewProjects } from '../actions';

function ProjectList({ projects, onDelete, onView }) {
	if (!projects.length) {
		return (
			<div>No Projects</div>
		)
	}
	return (
		<div>
			{projects.map(project => {
				return (
					<Listing name = {project.name} owner = {project.owner} description = {project.description}></Listing>
				);
			})}
		</div>
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
