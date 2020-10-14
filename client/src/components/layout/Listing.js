import React from 'react';
import './Style.css';
import { Text, Box, AspectRatioBox, Image, SimpleGrid } from "@chakra-ui/core"
import { Link } from 'react-router-dom';
import undraw from '../../images/projects.svg';

class Listing extends React.Component {
	render() {
		return (
			<SimpleGrid columns = {2}>
				<Box>
					<AspectRatioBox maxW = "800px" ratio = {1 / 1}>
						<Image src = {undraw}/>
					</AspectRatioBox>
				</Box>
				<Box>
					<Text fontSize = "2xl"><b>{this.props.name}</b></Text>
					<Text fontSize = "sm"><i>Created by {this.props.owner}</i></Text>
						<Text>{this.props.description}</Text>
					<Text>Status: {this.props.status}</Text>
					<Link to = {{pathname: 'project/' + this.props._id, state: {name: this.props.name, description: this.props.description}}}>View Project</Link>
				</Box>
			</SimpleGrid>
		);
	}
}

export default Listing;
