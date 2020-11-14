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
		console.log("componenetDidMOutn");
		this.setState({
			...this.state,
			filters: {
				new: this.props.new,
				recruiting: this.props.recruiting,
				active: this.props.active,
				paused: this.props.paused,
				stopped: this.props.stopped,
				archived: this.props.archived,
				proposals: this.props.proposals
			}
		});
		console.log(this.state);
		console.log(this.props);

	}
	
	handleSearchChange = e => {
		this.setState({
			...this.state,
			terms: e,
		});
		this.handleSubmit(e);
	};

	handleSubmit = e => {
		this.props.onSearch(e.toLowerCase());
	};

	handleReset = (e) => {
		this.setState({
			value: ""
		});
		this.handleSearchChange(e);
	};

	handleSwitch = (n) => {
		let copy = this.state;
		copy.filters[n] = !copy.filters[n];
		this.setState(copy);
	};

	render() {
		return (
			<Stack bg = "white" borderRadius = "lg">
				<Editable 
					placeholder ="Enter project search terms here"
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
		onSearch: value => {
			dispatch(searchProjects(value));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
