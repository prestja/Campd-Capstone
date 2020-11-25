import React, {useState} from 'react';
import './Style.css';
import { Box, Button, SimpleGrid, Checkbox, Text, Menu, MenuButton, MenuItem, MenuList, Flex, Icon, Link } from "@chakra-ui/react"
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
			<Flex width="1440px" paddingTop='1' alignSelf="center" bg="#EEEEEE"
			borderWidth="3px" borderColor="#000000" borderRadius="lg" boxShadow="md">
			<SimpleGrid  /*columns = {8}*/ paddingLeft="2px" paddingRight="2px">
				<SimpleGrid columns={3}>
					<Checkbox
						isChecked = {false}
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
						variantColor="red" variant="solid" size="sm" width="60px"
					>REMOVE</Button>
				</SimpleGrid>
				<SimpleGrid columns = {3} width="100%">
					{/*<Select
						width={"150px"}
						size="sm"
						variant="outline"
						placeholder="Modify Status"
						value={selection}
						onChange={onChange}
						/*onChange={/*setstatusvar = this.value /*e => updateProject(this.props._id, this.props.name, this.props.owner, 0, this.value, this.props.description, 0)}
						>
						<option value="new">New</option>
						<option value="recruiting">Recruiting</option>
						<option value="active">Active</option>
						<option value="paused">Paused</option>
						<option value="stopped">Stopped</option>
						<option value="archived">Archived</option>
					</Select>
					<Menu width={"150px"}>
						<MenuButton as={Button} width={"150px"} rightIcon="chevron-down">
							Change Status
						</MenuButton>
						<MenuList>
							<MenuItem color="#003366" onClick={() => this.testprint(this, "new")}><GrAddCircle />New</MenuItem>
							<MenuItem color="#006666" onClick={() => this.testprint(this, "recruiting")}><GrUserAdd />Recruiting</MenuItem>
							<MenuItem color="#006600" onClick={() => this.testprint(this, "active")}><GrPlay />Active</MenuItem>
							<MenuItem color="#666600" onClick={() => this.testprint(this, "paused")}><GrPause />Paused</MenuItem>
							<MenuItem color="#663300" onClick={() => this.testprint(this, "stopped")}><GrStop />Stopped</MenuItem>
							<MenuItem color="#660000" onClick={() => this.testprint(this, "archived")}><GrEject />Archived</MenuItem>
						</MenuList>
					</Menu>
					{/*<Button
						variantColor="green" variant="solid" size="sm" width="30px"
						//onClick={e => this.testprint(setstatusvar)/*console.log({setstatus})}
					>GO</Button>*/}

					{/*Conditional rendering for current status:*/}
					{this.props.status === "new" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#BBDDFF"
					>Status: <GrAddCircle />{this.props.status}</Text>}
					{this.props.status === "recruiting" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#BBFFDD"
					>Status: <GrUserAdd />{this.props.status}</Text>}
					{this.props.status === "active" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#99FF99"
					>Status: <GrPlay />{this.props.status}</Text>}
					{this.props.status === "paused" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#FFFF99"
					>Status: <GrPause />{this.props.status}</Text>}
					{this.props.status === "stopped" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#FFCC99"
					>Status: <GrStop />{this.props.status}</Text>}
					{this.props.status === "archived" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#FF9999"
					>Status: <GrEject />{this.props.status}</Text>}
					{this.props.status === "proposal" && <Text
						border="1px" borderRadius="md" borderColor="#666666"
						borderTopColor="#000000"
						borderBottomColor="#000000"
						width="150px"
						paddingLeft="2"
						bg="#BBBBBB"
					>Status: <GrChatOption />{this.props.status}</Text>}

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
