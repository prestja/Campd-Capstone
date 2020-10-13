import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Style.css';

class ViewProject extends Component {
	render() {
		console.log("render");
		return (
			<div> 
				<p>blank project page</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects,
	};
};

export default connect(mapStateToProps)(ViewProject);
