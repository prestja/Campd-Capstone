import React from "react";
import { connect } from 'react-redux';
import { Menu, MenuButton, MenuItem, MenuList, Button, Box, Stack } from "@chakra-ui/react";
import ListingCompact from "./ListingCompact";
import { fetchAllProjects } from "../../actions"

function Admin({projects, onView}) {


	return (
		<Box>
			<Menu>
				<MenuButton as={Button} rightIcon="chevron-down">
					Administrative Actions
				</MenuButton>
				<MenuList>
					<MenuItem onClick={() => downloadCSV(projects)} >Download selected projects as CSV</MenuItem>
					<MenuItem onClick={() => downloadJson(projects)}>Download selected projects as JSON</MenuItem>
					<MenuItem onClick={() => uploadJsonFile(projects)}>Merge projects from file</MenuItem>
				</MenuList>
			</Menu>
			<Stack>
				{projects.map(project => {
					return (
						<ListingCompact name = {project.name} owner = {project.owner} description = {project.description} _id = {project._id} status = {project.status}></ListingCompact>
					);
				})}
			</Stack>
		</Box>
	);
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

function uploadJsonFile(projects){
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
			var dbVal = JSON.parse(projects);
			//var newVal = [];

			for(var i = 0; i < dbVal.length; i++)
			{
				//var found = false;
				for(var j = 0; j < formData.length; j++)
				{
					if(formData[j]._id != dbVal[i]._id)
					{
						formData[j].push(dbVal[i]);
					}
					else{
						console.log("entry is repeated");
					}
				}

			}
			//console.log("Test");
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
			if (line != '') line += ','

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
