import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectView extends Component {
	render() {
		return (
			<div> 
				<p>Blank project page</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state.project);
	return {
		project: state.project,
	};
};

export default connect(mapStateToProps)(ProjectView);
