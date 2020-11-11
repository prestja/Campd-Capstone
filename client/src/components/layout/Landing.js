import React, { Component } from "react";
import './Style.css';
import {Stack, Text} from "@chakra-ui/core";

export default class Landing extends Component {
	render() {
		return (
			<Stack d="flex" mt="2" alignItems="center">
				<img className="center" alt={'University of North Texas logo'} src={require('./diving_eagle.svg')} width="50%" />
				<Text fontWeight = "bold" fontSize = "4xl" color = "white">UNT Greenlight Projects Portal</Text>
				<br />
				<Text color = "white" className="center">The Research and Project Portal is a centralized database of all projects and research ideas by UNT students and faculty. You can search for specific projects, topics, projects held by specific professors or maintained by specific students.</Text>
			</Stack>
		);
	}
}
