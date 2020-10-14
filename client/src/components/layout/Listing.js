import React from 'react';
import './Style.css';
import { Text, Box, AspectRatioBox, Image, SimpleGrid } from "@chakra-ui/core"
import { Link } from 'react-router-dom';
import undraw from '../../images/projects.svg';

class Listing extends React.Component {
	render() {
		return (
			<SimpleGrid columns = {2} pl = "1vw" pr = "1vw">
				<Box>
					<AspectRatioBox maxW = "30vw" ratio = {1 / 1}>
						<Image src = {undraw}/>
					</AspectRatioBox>
				</Box>
				<Box>
					<Link to = {{pathname: 'project/' + this.props._id, state: {name: this.props.name, description: this.props.description}}}>
						<Text fontSize = "xl">{this.props.name}</Text>
					</Link>
					<Text fontSize = "sm"><i>Created by {this.props.owner}</i></Text>
						<Text>{this.props.description}</Text>
					<Text>Status: {this.props.status}</Text>
				</Box>
			</SimpleGrid>
		);
	}
}

export default Listing;
