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
		terms: "",
		filters: {
			new: false,
			recruiting: false,
			active: false,
			paused: false,
			stopped: false,
			archived: false,
			proposals: false
		}
	};

	componentDidMount() {
		console.log("componentDidMount");
		this.setState({
			filters: {
				new: this.props.new,
				recruiting: this.props.recruiting,
				active: this.props.active,
				paused: this.props.paused,
				stopped: this.props.stopped,
				archived: this.props.archived,
				proposals: this.props.proposals,
			}
		});
	}
	
	handleSearchChange = e => {
		this.setState({
			...this.state,
			terms: e,
		});
		this.handleSubmit(e);
	};

	handleSubmit = (e, f) => {
		this.props.onSearch(e.toLowerCase(), f);
	};

	handleReset = (e) => {
		this.setState({
			terms: ""
		});
		this.handleSearchChange(e);
	};

	handleSwitch = (n) => {
		// create and modify a copy of our state with the changed filter
		let copy = this.state;
		copy.filters[n] = !copy.filters[n];
		// then apply the filter
		this.setState(copy);
		// submit the search as usual
		this.handleSubmit(this.state.terms, this.state.filters);
	};

	render() {
		return (
			<Stack bg = "white" borderRadius = "lg">
				<Editable 
					placeholder ="Enter the name, description, or set of tags for projects you are interested in"
					type = "value"
					value = {this.state.terms}
					onChange = {this.handleSearchChange}>
					<EditablePreview />
					<EditableInput />
				</Editable>
				<Divider></Divider>
				<Stack direction = "row" d= "flex">
					<FormLabel>Show: New</FormLabel><Switch colorScheme="blue" isChecked={this.state.filters.new} onChange={(e) => this.handleSwitch("new")}/>
					<FormLabel>Recruiting</FormLabel><Switch colorScheme="teal" isChecked={this.state.filters.recruiting} onChange={(e) => this.handleSwitch("recruiting")}/>
					<FormLabel>Active</FormLabel><Switch colorScheme="green" isChecked={this.state.filters.active} onChange={(e) => this.handleSwitch("active")}/>
					<FormLabel>Paused</FormLabel><Switch colorScheme="yellow" isChecked={this.state.filters.paused} onChange={(e) => this.handleSwitch("paused")}/>
					<FormLabel>Stopped</FormLabel><Switch colorScheme="orange" isChecked={this.state.filters.stopped} onChange={(e) => this.handleSwitch("stopped")}/>
					<FormLabel>Archived</FormLabel><Switch colorScheme="red" isChecked={this.state.filters.archived} onChange={(e) => this.handleSwitch("archived")}/>
					<FormLabel>Proposals</FormLabel><Switch colorScheme="gray" isChecked={this.state.filters.proposals} onChange={(e) => this.handleSwitch("proposals")}/>
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
		onSearch: (value, filters) => {
			dispatch(searchProjects(value, filters));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
