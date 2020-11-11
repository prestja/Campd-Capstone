import React, { Component } from "react";
import {
	Stack,
	Text,
	Divider,
	Image
} from "@chakra-ui/core";

export default class Landing extends Component {
	render() {
		return (
			<Stack d="flex" mt="2" maxW = "100vw">
				<Image alignSelf = "center" src={require('./diving_eagle.svg')} width="50%" />
				<Text alignSelf = "center" fontWeight = "bold" fontSize = {{base: "xl", sm: "3xl", md: "4xl"}} color = "white" textAlign= "center">UNT Greenlight Projects Portal</Text>
				<Text alignSelf = "center" color = "white" className="center" textAlign= "center">The Research and Project Portal is a centralized database of all projects and research ideas by UNT students and faculty.</Text>
			</Stack>
		);
	}
}
