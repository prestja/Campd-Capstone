// Listing.js

import React from 'react';
import './Style.css';
import { Button, Stack, Box} from "@chakra-ui/core"
import { Link } from 'react-router-dom';
{/*
const styles = {
	borderBottom: '2px solid #eee',
	background: '#fafafa',
	margin: '.75rem auto',
	padding: '.6rem 1rem',
	maxWidth: '800px',
	borderRadius: '7px'
};
*/}

export default ({ project: { name, owner, status, description, file, _id }, onDelete, onView }) => {
	const newTo = {
		pathname: "/viewproject"
	}
	return (
		<Box>
			<h2>{name}</h2>
			<h5>{owner}</h5>
			<div className="overflow">
				<p className="overflow-ellipsis">{description}</p>
			</div>
			<p>Status: {status}</p>
			<Button>
  Home
				View
			</Button>
		</Box>
	);
};
