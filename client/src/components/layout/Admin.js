import React from "react";
import { connect } from 'react-redux';
import { Menu, MenuButton, MenuItem, MenuList, Button, Box, Stack, Icon } from "@chakra-ui/core";
import ListingCompact from "./ListingCompact";
import { fetchAllProjects } from "../../actions"
import { GrCaretDown } from "react-icons/gr"
import ProjectSearch from "../../utils/ProjectSearch";

function Admin({projects, onView}) {
	return (
		<Box>
			{/*The dropdown menu at the top of the admin page, allowing for importing or exporting the database as CSV/JSON file. */}
			<Menu>
				<MenuButton as={Button} rightIcon={<Icon as={GrCaretDown}></Icon>}>
					Administrative Actions
				</MenuButton>
				<MenuList>
					<MenuItem onClick={() => downloadCSV(projects)} >Download selected projects as CSV</MenuItem>
					<MenuItem onClick={() => downloadJson(projects)}>Download selected projects as JSON</MenuItem>
					<MenuItem onClick={() => uploadJsonFile()}>Merge projects from file</MenuItem>
				</MenuList>
			</Menu>

			{/* src/utils/ProjectSearch.js - Search bar and switches to filter through projects */}
			<ProjectSearch />
			<Stack>
				{projects.map(project => {
					/* TODO but also FIXME this really is not good code at all, it's a very-quick-and-even-dirtier fix for a bug where viewing details and then going
						straight to the admin page doesn't restore the full list of projects - this happens because /admin doesn't include a database 
						query like /projects does, it just relies on the already existing projects[] list, which gets repopulated either on refreshing (as
						it does here) or visiting the /projects page. It's also going to break the admin page entirely if for some reason all of the
						projects or all but one of the projects in the database are deleted.*/
					if (projects.length<=1) {forceRefresh();}
					return (
						/* src/components/layout/ListingCompact.js - The individual entry for each project on the admin page */
						<ListingCompact name = {project.name} owner = {project.owner} description = {project.description} _id = {project._id} status = {project.status}></ListingCompact>
					);
				})}
			</Stack>
		</Box>
	);
}

function forceRefresh() {
	window.location.reload();
}

function downloadJson(projects){
	console.log("DOWNLOAD JSON");

	let json = JSON.stringify(projects);
	let blobJSON = new Blob([json]);
	let link = document.createElement('a');

	link.href = window.URL.createObjectURL(blobJSON);
	link.download = "projects.json";
	link.click();
}

function downloadCSV(projects){
	console.log("DOWNLOAD CSV");

	let csv = ConvertToCSV(projects);
	let blobCSV = new Blob([csv]);
	let link = document.createElement('a');

	link.href = window.URL.createObjectURL(blobCSV);
	link.download = "projects.csv";
	link.click();
}

function uploadJsonFile(){
	console.log("UPLOAD JSON FILE");

	let fileInput = document.createElement('input');
	fileInput.type = 'file'

	fileInput.addEventListener('click' , function(){
		console.log("file clicked");
	})

	fileInput.addEventListener('change' , function(){
		console.log("file changed");

		console.log("the file input" , fileInput);
		const formData = new FormData();
		formData.append('file' , fileInput.files[0]);
		const request = new XMLHttpRequest();

		request.responseType = 'json';
		request.onload = () => {
			console.log(request.response);
		}

		request.open('POST' , 'http://localhost:5000/projects/uploadJson');
		request.send(formData);
	})
	fileInput.click();
}

function ConvertToCSV(objArray) {
	var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
	var str = '';
	for (var i = 0; i < array.length; i++) {
		var line = '';
		for (var index in array[i]) {
			if (line !== '') line += ','

			line += array[i][index];
		}
		str += line + '\r\n';
	}
	return str;
}


const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDelete: id => {
			//dispatch(deleteProject(id));
		},
		onView: id => {
			dispatch(fetchAllProjects())
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Admin);
