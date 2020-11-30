import React, { Component } from "react";
import {
	Stack,
	Text,
	Box,
	Grid,
	Image
} from "@chakra-ui/core";

export default class Landing extends Component {
	render() {
		return (
			<Grid templateColumns="repeat(auto-fit, 90vh)" gap={6} justifyContent="center">
			<Box borderRadius = "lg" bg = "white" width = "100%" height = "100%">
			<Stack d="flex" mt="2">
				<Text alignSelf = "center" fontWeight = "bold" fontSize = {{base: "xl", sm: "3xl", md: "4xl"}} color = "black" textAlign= "center">Introducting UNT Greenlight</Text>
				<Image alignSelf = "center" src={require('./diving_eagle.svg')} width="50%" />
				<Text alignSelf = "center" color = "black" className="center" textAlign= "center">
					The UNT Greenlight Projects Portal works to serve as a central hub for a repository of 
					carefully curated project concepts by UNT faculty and students. 
				</Text>
			</Stack>
			</Box>
			
			</Grid>
		);
	}
}
