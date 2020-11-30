// layout/EditProject.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewProjects, updateProject } from '../../actions';
import UpdateProject from '../EditProject';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

class EditProject extends Component{
	/* When this page is accessed, a database query goes out to retrieve the relevant information, 
		which is then loaded into the page data. */
	componentDidMount() {
		this.props.onMount(this.props.match.params.id);
	}

	render() {
		return (
			<div >
				<div >
					<div >
						{/* The body of the project edit page is only rendered once the data for the project has been retrieved. 
							/src/containers/UpdateProject.js is a middleman that establishes a react-redux connect to the actual
							edit page body, found at /src/components/EditProject.js */}
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