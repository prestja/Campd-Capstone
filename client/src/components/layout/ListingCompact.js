import React, {useState} from 'react';
import './Style.css';
import { Box, Button, SimpleGrid, Checkbox, Text, Menu, MenuButton, MenuItem, MenuList, Flex, Icon, Link } from "@chakra-ui/core"
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject, GrChatOption } from "react-icons/gr";
import { updateProject } from '../../actions';
import { connect } from 'mongoose';

//const mapDispatchToProps = dispatch => {
//	return {
//		onUpdateProject: project => {
//			dispatch(updateProject(project));
//		}
//	};
//};
//connect(null, mapDispatchToProps)(ListingCompact);
class ListingCompact extends React.Component {
	/*setOpen = project => () => {
		return {
			updateProject(_id: project._id, this.props.name, this.props.owner, 0, "open", this.props.description));
			
		}
	}*/
	setOpen(project) {
		return function() {
			updateProject(project._id, project.name, project.owner, 0, "open", project.description, 0)
		}
	};
	setActive = e => {

	}
	setSuspend = e => {

	}
	setArchive = e => {

	}
	//setValue(e, val) {
	//	mapDispatchToProps.onUpdateProject([e.props._id, e.props.name, e.props.owner, 0, val, e.props.description, 0])
	//};
	
	testprint(e, val) {
		//console.log(e.props._id, e.props.name, e.props.owner, val, e.props.description);
		console.log(val);
	};

	render() {
		return (
			<Box paddingTop="10px" alignSelf="center">
			<Flex width="99vw" paddingTop='1' alignSelf="center" bg="#EEEEEE" 
			borderWidth="3px" borderColor="#000000" borderRadius="lg" boxShadow="md">
			<SimpleGrid  /*columns = {8}*/ paddingLeft="2px" paddingRight="2px">
				<SimpleGrid columns={3}>
					<Checkbox 
						defaultIsChecked = {false}
						onClick={this.isChecked = !this.isChecked }
						border="3px" borderRadius="md" borderColor="#333333"
						paddingLeft='4px'
						alignItems="center"
						width={"20px"}
					></Checkbox>
					<Text
						width="1350px"
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopWidth="1px" borderTopColor="#000000"
						borderBottomWidth="1px" borderBottomColor="#000000"
						paddingLeft = "3px"
					><Link color="#007700" id={this.props.id} href={"/project/"+this.props._id}>{this.props.name}</Link></Text>
					<Button
						colorScheme="red" variant="solid" size="sm" width="60px"
					>REMOVE</Button>
				</SimpleGrid>
				<SimpleGrid columns = {3} width="100%">
					{/*Conditional rendering for current status:*/}
					{this.props.status === "new" && <Text 
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statblue"
					>Status: <Icon as = {GrAddCircle}/>{this.props.status}</Text>}
					{this.props.status === "recruiting" && <Text
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statteal"
					>Status: <Icon as = {GrUserAdd}></Icon>{this.props.status}</Text>}
					{this.props.status === "active" && <Text 
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statgreen"
					>Status: <Icon as = {GrPlay} />{this.props.status}</Text>}
					{this.props.status === "paused" && <Text 
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statyellow"
					>Status: <Icon as = {GrPause} />{this.props.status}</Text>}
					{this.props.status === "stopped" && <Text
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statorange"
					>Status: <Icon as = {GrStop} />{this.props.status}</Text>}
					{this.props.status === "archived" && <Text 
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statred"
					>Status: <Icon as = {GrEject} />{this.props.status}</Text>}
					{this.props.status === "proposal" && <Text 
						border="1px" borderRadius="md" borderColor="#666666" 
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="statgray"
					>Status: <Icon as = {GrChatOption} />{this.props.status}</Text>}

					<Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						paddingLeft="3px"
					>Project Owner: {this.props.owner}</Text>
					<Text
						width="537px"
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						paddingLeft="3px"
					>CONTACT EMAIL GOES HERE</Text>
				</SimpleGrid>
					<Text
						width={"100%"}
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						paddingLeft="3px"
					>STAFF LIST GOES HERE</Text>
				<Text
					border="1px" borderRadius="md" borderColor="#666666"
					borderTopColor="#000000"
					borderBottomColor="#000000"
					paddingLeft="2px"
					width={'100%'}
					>{this.props.description}</Text>
			</SimpleGrid>
			</Flex>
			</Box>
		);
	}
}

export default ListingCompact;
