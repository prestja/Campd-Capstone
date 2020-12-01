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

	/*When the searchbar is loaded, its initial project filers are set based on the parameters passed in by the parent component. */
	componentDidMount() {
		this.setState({
			filters: {
				new: this.props.new || false,
				recruiting: this.props.recruiting || false,
				active: this.props.active || false,
				paused: this.props.paused || false,
				stopped: this.props.stopped || false,
				archived: this.props.archived || false,
				proposals: this.props.proposals || false,
			}
		});
	}
	
	/*Updates the state of the page whenever the text in the searchbar changes, and automatically "submits" the entry for dynamic searching. */
	handleSearchChange = e => {
		this.setState({
			...this.state,
			terms: e,
		});
		this.handleSubmit(e, this.state.filters);
	};

	/*Whenever called by the above function, a database call is made to search the entire projects list for the entered value. */
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
		console.log(this.state);
		this.handleSubmit(this.state.terms, this.state.filters);
	};

	render() {
		return (
			<Stack bg = "white" borderRadius = "lg">
				{/*Project search bar: */}
				<Editable 
					paddingLeft="5px"
					placeholder ="Enter project search terms here"
					type = "value"
					value = {this.state.terms}
					onChange = {this.handleSearchChange}>
					<EditablePreview />
					<EditableInput />
				</Editable>
				<Divider></Divider>
				{/*List of switches to toggle which statuses are being displayed. TODO Currently, they don't do anything, but the switches themselves are functional. */}
				<Stack direction = "row" d= "flex" pl = "4px">
					<Switch colorScheme="blue" isChecked={this.state.filters.new} onChange={(e) => this.handleSwitch("new")}/>
					<FormLabel>New</FormLabel>
					<Switch colorScheme="teal" isChecked={this.state.filters.recruiting} onChange={(e) => this.handleSwitch("recruiting")}/>
					<FormLabel>Recruiting</FormLabel>
					<Switch colorScheme="green" isChecked={this.state.filters.active} onChange={(e) => this.handleSwitch("active")}/>
					<FormLabel>Active</FormLabel>
					<Switch colorScheme="yellow" isChecked={this.state.filters.paused} onChange={(e) => this.handleSwitch("paused")}/>
					<FormLabel>Paused</FormLabel>
					<Switch colorScheme="orange" isChecked={this.state.filters.stopped} onChange={(e) => this.handleSwitch("stopped")}/>
					<FormLabel>Stopped</FormLabel>
					<Switch colorScheme="red" isChecked={this.state.filters.archived} onChange={(e) => this.handleSwitch("archived")}/>
					<FormLabel>Archived</FormLabel>
					<Switch colorScheme="gray" isChecked={this.state.filters.proposals} onChange={(e) => this.handleSwitch("proposals")}/>
					<FormLabel>Proposals</FormLabel>
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
