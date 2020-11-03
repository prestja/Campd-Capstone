import React, { Component } from 'react';
import { Box, Button, Text, Image, SimpleGrid, Badge } from '@chakra-ui/core'; 
import { GrAddCircle } from "react-icons/gr"
import { Link } from 'react-router-dom';
import undraw from '../../images/projects.svg'
import { viewProjects } from '../../actions';

class ProjectView extends Component {
	render() {
		const resp = viewProjects(this.props.match.params.id);

		return (
			<Box spacing={3} padding="12px" width="75%" bg="#F3F3F3" borderRadius="lg">
				<SimpleGrid columns = {2}>
					<Box bg="#DDDDDD" boxShadow="md" borderRadius="lg">
						<Text fontSize = "lg" border="2px" borderRadius="md" borderColor="#777777" bg="#EEF8FF" paddingLeft="4px"><Badge rounded="full" variantColor="blue"><GrAddCircle/>STATUS</Badge>{/*this.props.location./*state.name*/}PROJECT NAME HERE!</Text>
						
						<Text paddingLeft="4px">PROJECT TEAM GOES HERE</Text>
						<Text paddingLeft="4px">{/*this.props./*location.state.description*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
						<Text paddingLeft="4px">CONTACT: [ownername] [email]</Text>
						<Button bg="#FFEEBB"><Link to = '/projects'>Back to projects page</Link></Button>
						<Button bg="#44EF7B"><Link to = {'/edit/'+this.props.match.params.id}>Edit</Link></Button>
						<Button onClick={() => this.testprint(resp)}>debug</Button>
					</Box>
					<Image src={imagePath(this.props.name)} paddingLeft="5px"/>
				</SimpleGrid>
			</Box>
		);
	}
	testprint(e) {
		console.log(e);
	};
}

export default ProjectView;

const imagePath = (path) => {
	try { return require('../../images/'+path+'.png'); }
	catch (err) { return undraw }
}
