import React, { Component } from 'react';
import {Box, Button, Text } from '@chakra-ui/core'; 
import { Link } from 'react-router-dom';

class ProjectView extends Component {
	render() {
		const {name, description} = this.props.location.state;
		return (
			<Box>
				<Text>{this.props.location.state.name}</Text>
				<Text>{this.props.location.state.description}</Text>
				<Button><Link to = '/projects'>Back to projects page</Link></Button>
			</Box>
		);
	}
}

export default ProjectView;
