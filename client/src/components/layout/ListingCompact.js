import React from 'react';
import './Style.css';
import { Button, SimpleGrid, Checkbox, Text } from "@chakra-ui/core"
import { updateProject } from '../../actions';

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
	
	render() {
		return (
			<SimpleGrid columns = {9} paddingLeft="2" paddingRight='3' paddingTop='1'>
				<Checkbox 
					isChecked = {true}
					onClick={this.isChecked = !this.isChecked }
					border="3px" borderRadius="md" borderColor="#333333"
					paddingRight='2px'
					alignItems="center"
					></Checkbox>
				
				<Button 
					variantColor="teal" variant="solid" size="sm"
					onClick = { this.setOpen(this.props) }
				>OPEN</Button>
				<Button 
					variantColor="green" variant="solid" size="sm"
					onClick = { this.setActive }
				>ACTIVATE</Button>
				<Button 
					variantColor="yellow" variant="solid" size="sm"
					onClick = { this.setSuspend }
				>SUSPEND</Button>
				<Button 
					variantColor="red" variant="solid" size="sm"
					onClick = { this.setArchive }
				>ARCHIVE</Button>
				<Button
					variantColor="gray" variant="solid" size="sm"
					
				>REMOVE</Button>
				
				{/*Conditional rendering for current status:*/}
				{this.props.status === "open" && <Text 
					border="1px" borderRadius="md" borderColor="#666666" 
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					
					width="150px"
					paddingLeft="2"
					bg="#BBFFFF"
				>Status: {this.props.status}</Text>}
				{this.props.status === "active" && <Text 
					border="1px" borderRadius="md" borderColor="#666666" 
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					
					width="150px"
					paddingLeft="2"
					bg="#99FF99"
				>Status: {this.props.status}</Text>}
				
				{this.props.status === "suspended" && <Text 
					border="1px" borderRadius="md" borderColor="#666666" 
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					
					width="150px"
					paddingLeft="2"
					bg="#FFFF99"
				>Status: {this.props.status}</Text>}
				{this.props.status === "archived" && <Text 
					border="1px" borderRadius="md" borderColor="#666666" 
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					
					width="150px"
					paddingLeft="2"
					bg="#FF9999"
				>Status: {this.props.status}</Text>}
				{this.props.status === "proposal" && <Text 
					border="1px" borderRadius="md" borderColor="#666666" 
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					
					width="150px"
					paddingLeft="2"
					bg="#BBBBBB"
				>Status: {this.props.status}</Text>}

				<Text isTruncated 
					width="50vh"
					border="1px" borderRadius="md" borderColor="#666666"
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					paddingLeft = "3px"
					>{this.props.name}</Text>
				<Text isTruncated 
					border="1px" borderRadius="md" borderColor="#666666"
					borderTopWidth="3px" borderTopColor="#000000"
					borderBottomWidth="3px" borderBottomColor="#000000"
					paddingLeft="2px"
					>{this.props.description}</Text>
			</SimpleGrid>
		);
	}
}

export default ListingCompact;
