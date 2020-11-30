// ProjectSearch.js
// This file is responsible for generating the search bar on the projects page
// it doesn't display any projects on it's own (ProjectList.js is responsible for that)
// instead it changes the state of the projects to display based on the search paramenters

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProjects } from '../actions/index';
import '../components/layout/Style.css';
import {
	Divider,
	FormLabel, 
	Switch,
	Editable, EditablePreview, EditableInput,
	Stack 
} from '@chakra-ui/core';

class SearchBar extends Component {
	state = {
		value: ""
	};

	/*Updates the state of the page whenever the text in the searchbar changes, and automatically "submits" the entry for dynamic searching. */
	handleSearchChange = e => {
		this.setState({
			value: e
		});
		this.handleSubmit(e);
	};

	/*Whenever called by the above function, a database call is made to search the entire projects list for the entered value. */
	handleSubmit = e => {
		this.props.onSearch(e.toLowerCase());
	};

	handleReset = (e) => {
		this.setState({
			value: ""
		});
		this.handleSearchChange(e);
	};

	render() {
		return (
			<Stack bg = "white" borderRadius = "lg">
				{/*Project search bar: */}
				<Editable 
					paddingLeft="5px"
					placeholder ="Enter project search terms here"
					type = "value"
					value = {this.state.value}
					onChange = {this.handleSearchChange}>
					<EditablePreview />
					<EditableInput />
				</Editable>
				<Divider></Divider>
				{/*List of switches to toggle which statuses are being displayed. TODO Currently, they don't do anything, but the switches themselves are functional. */}
				<Stack direction = "row" d= "flex">
					<FormLabel>Show: New</FormLabel><Switch colorScheme="blue" defaultIsChecked={false}/>
					<FormLabel>Recruiting</FormLabel><Switch colorScheme="teal" defaultIsChecked={true}/>
					<FormLabel>Active</FormLabel><Switch colorScheme="green" defaultIsChecked={true}/>
					<FormLabel>Paused</FormLabel><Switch colorScheme="yellow" defaultIsChecked={false}/>
					<FormLabel>Stopped</FormLabel><Switch colorScheme="orange" defaultIsChecked={false}/>
					<FormLabel>Archived</FormLabel><Switch colorScheme="red" defaultIsChecked={false}/>
					<FormLabel>Proposals</FormLabel><Switch colorScheme="gray" defaultIsChecked={false}/>
				</Stack>
			</Stack>
		);
	};
}

function mapStateToProps({ projects }) {
	return { value: projects.value };
}

function mapDispatchToProps(dispatch) {
	return {
		onSearch: value => {
			dispatch(searchProjects(value));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
