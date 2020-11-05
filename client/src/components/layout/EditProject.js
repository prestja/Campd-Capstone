// layout/EditProject.js

import React, { Component } from 'react';
import { Button } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { viewProjects, updateProject } from '../../actions';
import UpdateProject from '../EditProject';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

class EditProject extends Component{
	componentDidMount() {
		this.props.onMount(this.props.match.params.id);
	}

	render() {
		return (
			<div >
				<div >
					<div >
						{this.props.projects[0] && <UpdateProject id={this.props.match.params.id} project={this.props.projects[0]}/>}					
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onMount: id => {
			dispatch(viewProjects(id))
		},
		onUpdateProject: project => {
			dispatch(updateProject(project));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProject);

//export default EditProject;