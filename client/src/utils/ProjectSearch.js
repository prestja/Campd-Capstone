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

	handleSearchChange = e => {
		this.setState({
			value: e
		});
		this.handleSubmit(e);
	};

	handleStatusChange = e => {

	}

	handleSubmit = e => {
		this.props.onSearch(e.toLowerCase());
	};

	handleReset = (e) => {
		this.setState({
			value: ""
		});
		this.handleSearchChange(e);
	};

	handleSwitch = (n, b) => {
		console.log(n);
		console.log(b);
	};

	render() {
		return (
			<Stack bg = "white" borderRadius = "lg">
				<Editable 
					placeholder ="Enter project search terms here"
					type = "value"
					value = {this.state.value}
					onChange = {this.handleSearchChange}>
					<EditablePreview />
					<EditableInput />
				</Editable>
				<Divider></Divider>
				<Stack direction = "row" d= "flex">
					<FormLabel>Show: New</FormLabel><Switch colorScheme="blue" defaultIsChecked={this.props.new} onChange={(e) => this.handleSwitch("news", true)}/>
					<FormLabel>Recruiting</FormLabel><Switch colorScheme="teal" defaultIsChecked={this.props.recruiting} onChange={(e) => this.handleSwitch("recruiting", true)}/>
					<FormLabel>Active</FormLabel><Switch colorScheme="green" defaultIsChecked={this.props.active} onChange={(e) => this.handleSwitch("active", true)}/>
					<FormLabel>Paused</FormLabel><Switch colorScheme="yellow" defaultIsChecked={this.props.paused} onChange={(e) => this.handleSwitch("paused", true)}/>
					<FormLabel>Stopped</FormLabel><Switch colorScheme="orange" defaultIsChecked={this.props.stopped} onChange={(e) => this.handleSwitch("stopped", true)}/>
					<FormLabel>Archived</FormLabel><Switch colorScheme="red" defaultIsChecked={this.props.archived} onChange={(e) => this.handleSwitch("archived", true)}/>
					<FormLabel>Proposals</FormLabel><Switch colorScheme="gray" defaultIsChecked={this.props.proposals} onChange={(e) => this.handleSwitch("proposals", true)}/>
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
