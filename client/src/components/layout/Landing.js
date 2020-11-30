import React, { Component } from "react";
import { Stack, Text, Box, Grid, Image } from "@chakra-ui/core";

export default class Landing extends Component {
	render() {
		return (
			<Grid templateColumns="repeat(auto-fit, 90vh)" gap={6} justifyContent="center">
			{/*First box: Logo, title, introduction to the project */}
			<Box borderRadius = "lg" bg = "white" width = "100%" height = "100%">
			<Stack d="flex" mt="2">
				<Text alignSelf = "center" fontWeight = "bold" fontSize = {{base: "xl", sm: "3xl", md: "4xl"}} color = "black" textAlign= "center">Introducting UNT Greenlight</Text>
				<Image alignSelf = "center" src={require('./diving_eagle.svg')} width="50%" />
				<Text alignSelf = "center" color = "black" className="center" textAlign= "center">A research and projects portal featuring a variety of project and research concepts by UNT students and faculty.</Text>
			</Stack>
			</Box>
			{/*Second box: Being used to test a more mobile-friendly design */}
			<Box borderRadius = "lg" bg = "white" width = "100%" height = "100%">
				text2
			</Box>
			</Grid>
		);
	}
}
