import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Box, Stack} from "@chakra-ui/core";
import ProjectList from '../../containers/ProjectList';
import ProjectSearch from '../../utils/ProjectSearch';
import { fetchAllProjects } from '../../actions';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Projects extends Component {
	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return (
			<Stack>
				<Box width = {{base: "99%", lg: "70%"}} alignSelf = "center">
				<ProjectSearch new = {true} recruiting = {true} active = {true}/>
				</Box>
				<ProjectList />
			</Stack>
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
			dispatch(fetchAllProjects())
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Projects);
