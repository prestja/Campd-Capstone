import React from 'react';
import './Style.css';
import { Box, Button, SimpleGrid, Checkbox, Text, Flex, Icon, Link } from "@chakra-ui/core"
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject, GrChatOption } from "react-icons/gr";
import { deleteProject } from '../../actions';
import { connect } from "react-redux";

class ListingCompact extends React.Component {
	state = {
		showConf: false,
		checked: false
	};
	delProj = e => {
		this.setState({showConf: true});
	}
	delCancel = e => {
		this.setState({showConf: false});
	}
	delConfirm = e => {
		this.props.onDeleteProject(this.props._id)
	}

	checkboxchange = e => {
		this.setState({checked: !this.state.checked});
	}

	render() {
		return (
			<Box paddingTop="10px" alignSelf="center">
			<Flex width="99vw" paddingTop='1' alignSelf="center" bg="#EEEEEE" 
			borderWidth="3px" borderColor="#000000" borderRadius="lg" boxShadow="md">
			<SimpleGrid paddingLeft="2px" paddingRight="2px">
				{/*Top row: Checkbox, name, delete button*/}
				<SimpleGrid columns={3}>
					{/*Checkbox to select for download functions */}
					<Checkbox 
						defaultIsChecked={this.state.checked}
						onChange={/*TODO these function and are tracked by this.state.checked, but they aren't connected to anything*/ this.checkboxchange }
						border="3px" borderRadius="md" borderColor="#333333"
						paddingLeft='4px'
						alignItems="center"
						width={"2%"}
					></Checkbox>
					{/*Name box. Names are rendered as links to allow user to click through to project details.
						Connects to /src/components/layout/ProjectView.js */}
					<Text
						width="93vw"
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopWidth="1px" borderTopColor="#000000"
						borderBottomWidth="1px" borderBottomColor="#000000"
						paddingLeft = "3px"
					><Link color="#007700" id={this.props.id} href={"/project/"+this.props._id}>{this.props.name}</Link></Text>
					{/*Delete button, TODO this doesn't actually do anything yet */}
					{!this.state.showConf ? 
						/*Before clicking delete*/ 
							<Button
								colorScheme="red" variant="solid" size="sm" width="70px" onClick={this.delProj}
							>REMOVE</Button> : 
						/*After clicking delete, confirmation buttons*/
						<Box width='70px'>
							<Button width='35px' size='sm' variant='solid' colorScheme='green' onClick={this.delConfirm}>YES</Button>
							<Button width='35px' size='sm' variant='solid' colorScheme='red' onClick={this.delCancel}>NO</Button>
						</Box>
					}
				</SimpleGrid>

				{/*Second row: Status box, project owner, email to contact project owner */}
				<SimpleGrid columns = {3} width="100%">
					{/*Current status box, conditionally rendered so that each one has different colours and icons: */}
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

					{/*Project Owner Textbox */}
					<Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						paddingLeft="3px"
						width="62vw"
					>Project Owner: {this.props.owner}</Text>
					{/*Owner's email textbox */}
					<Text
						width="550px"
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						paddingLeft="3px"
					>CONTACT EMAIL GOES HERE</Text>
				</SimpleGrid>
				
				{/*Textbox for the list of staff on the project */}
				<Text
					width={"100%"}
					border="1px" borderRadius="md" borderColor="#666666"
					borderTopColor="#000000"
					borderBottomColor="#000000"
					paddingLeft="3px"
				>STAFF LIST GOES HERE</Text>

				{/*Extended textbox containing the project's description */}
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

const mapDispatchToProps = dispatch => {
	return {
		onDeleteProject: id => {
			dispatch(deleteProject(id))
		}
	};
};

export default connect(null,mapDispatchToProps)(ListingCompact);
