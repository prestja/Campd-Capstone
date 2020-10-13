// Listing.js

import React from 'react';
import './Style.css';
import { Box} from "@chakra-ui/core"
import { Link } from 'react-router-dom';

class Listing extends React.Component {
	render() {
		return (
			<Box>
				<h2>{this.props.name}</h2>
				<h5>{this.props.owner}</h5>
					<p>{this.props.description}</p>
				<p>Status: {this.props.status}</p>
				<Link to = {{pathname: 'project/' + this.props._id, state: {project: this.props}}}>View Project</Link>
			</Box>
		);
	}
}

export default Listing;
