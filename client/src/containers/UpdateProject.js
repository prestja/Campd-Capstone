// UpdateProject.js

import { connect } from 'react-redux';
import { updateProject } from '../actions';
import EditProject from '../components/EditProject';

const mapDispatchToProps = dispatch => {
	return {
		onUpdateProject: project => {
			dispatch(updateProject(project));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(EditProject);
