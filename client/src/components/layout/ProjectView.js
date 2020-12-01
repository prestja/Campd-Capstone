import React, { Component } from 'react';
import { Box, Button, Link, Text, Image, SimpleGrid, Badge, Icon } from '@chakra-ui/core'; 
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject, GrChatOption } from "react-icons/gr"
import undraw from '../../images/projects.svg'
import { viewProjects } from '../../actions';
import { connect } from 'react-redux';

class ProjectView extends Component {
	/*When the project details page is loaded, a query is sent out
		to the database and the response is bound to the page's props.
		This is not an instantaneous process, and is the reason for the
		strange flickering when loading the page, along with the mess of
		conditional rendering that this page is comprised of.*/
	componentDidMount() {
		this.props.onMount(this.props.match.params.id);
	};

	render() {	
		return (
			<Box width = "100%" height = "100%">
				{/* Outer box in which everything is contained. */}
				<Box spacing={3} padding="12px" width="75%" bg="#F3F3F3" borderRadius="lg">
					{/* Two-column "grid" to allow the image to be rendered off to the side of the page's content. */}
					<SimpleGrid columns = {2}>
						{/* Secondary, darker box containing all of the page's non-image content. */}
						<Box bg="#DDDDDD" boxShadow="md" borderRadius="lg">
							{/* Conditionally rendered box containing the status badge and name for the project. */}
							{this.props.projects[0] && this.props.projects[0].status === "new" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statblue"><Icon as = {GrAddCircle}/>NEW</Badge>{this.props.projects[0].name}
							</Text>}
							{this.props.projects[0] && this.props.projects[0].status === "recruiting" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statteal"><Icon as = {GrUserAdd}/>RECRUITING</Badge>{this.props.projects[0].name}
							</Text>}
							{this.props.projects[0] && this.props.projects[0].status === "active" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statgreen"><Icon as = {GrPlay}/>ACTIVE</Badge>{this.props.projects[0].name}
							</Text>}
							{this.props.projects[0] && this.props.projects[0].status === "paused" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statyellow"><Icon as = {GrPause}/>PAUSED</Badge>{this.props.projects[0].name}
							</Text>}
							{this.props.projects[0] && this.props.projects[0].status === "stopped" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statorange"><Icon as = {GrStop}/>STOPPED</Badge>{this.props.projects[0].name}
							</Text>}
							{this.props.projects[0] && this.props.projects[0].status === "archived" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statred"><Icon as = {GrEject}/>ARCHIVED</Badge>{this.props.projects[0].name}
							</Text>}
							{this.props.projects[0] && this.props.projects[0].status === "proposal" && <Text fontSize = "lg" border="2px" borderRadius="md" 
								bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
									<Badge rounded="full" bg="statgray"><Icon as = {GrChatOption}/>PROPOSAL</Badge>{this.props.projects[0].name}
							</Text>}

							{/* TODO non-implemented text entry that contains the list of staff working on the project. */}
							<Text paddingLeft="4px">PROJECT TEAM GOES HERE{/*this.props.projects[0] && this.props.projects[0].staff*/}</Text>
							{/* Text field containing the full description of the project. */}
							<Text paddingLeft="4px">{this.props.projects[0] && this.props.projects[0].description}</Text>
							{/* TODO Text field containing the name of the project's owner and their contact email (the email part has not been implemented). */}
							<Text paddingLeft="4px">CONTACT: {this.props.projects[0] && this.props.projects[0].owner} [email]</Text>
							{/* Return button, connects to /src/components/layout/projects.js */}
							<Button bg="untgreen"><Link color="#FFFFFF" href='/projects'>Back to projects page</Link></Button>
							{/* Edit button, connects to /src/components/EditProject.js - TODO make sure this is only accessible for admins and owners */}
							{this.props.projects[0] && <Button bg="untgreen"><Link color="#FFFFFF" id={this.props.match.params.id} project={this.props.projects[0]} href={'/edit/'+this.props.projects[0]._id/*this.props.match.params.id*/}>Edit</Link></Button>}
						</Box>
						<Image src={this.props.projects[0] && imagePath(this.props.projects[0].name)} paddingLeft="5px"/>
					</SimpleGrid>
				</Box>
			</Box>
		);
	}
}

//export default ProjectView;

const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onMount: id => {
			dispatch(viewProjects(id))
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);

const imagePath = (path) => {
	//If there is an image associated with the project, render it on the card.
	try{
		return require('../../../../routes/images/'+path+'.png');
	}
	//If the image isn't found, instead render the default image from src/images.
	catch(err){
		return undraw
	}
}