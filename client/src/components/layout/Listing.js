// Listing.js

import React from 'react';
import './Style.css';
import { Box} from "@chakra-ui/core"
import { Link } from 'react-router-dom';

export default ({ project: { name, owner, status, description, file, _id }, onDelete, onView }) => {
	return (
		<Box>
			<h2>{name}</h2>
			<h5>{owner}</h5>
				<p>{description}</p>
			<p>Status: {status}</p>
			<Link to = {'project/' + _id}>View project</Link>
		</Box>
	);
};
