import React, { Component } from 'react';
import { Box, Button, Link, Text, Image, SimpleGrid, Badge } from '@chakra-ui/core'; 
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject, GrChatOption } from "react-icons/gr"
//import { Link } from 'react-router-dom';
import undraw from '../../images/projects.svg'
import { viewProjects } from '../../actions';
import { connect } from 'react-redux';

class ProjectView extends Component {
	componentDidMount() {
		this.props.onMount(this.props.match.params.id);
	}
	render() {	
		return (
			<Box spacing={3} padding="12px" width="75%" bg="#F3F3F3" borderRadius="lg">
				<SimpleGrid columns = {2}>
					<Box bg="#DDDDDD" boxShadow="md" borderRadius="lg">
						{this.props.projects[0] && this.props.projects[0].status === "new" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statblue"><GrAddCircle/>NEW</Badge>{this.props.projects[0].name}
						</Text>}
						{this.props.projects[0] && this.props.projects[0].status === "recruiting" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statteal"><GrUserAdd/>RECRUITING</Badge>{this.props.projects[0].name}
						</Text>}
						{this.props.projects[0] && this.props.projects[0].status === "active" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statgreen"><GrPlay/>ACTIVE</Badge>{this.props.projects[0].name}
						</Text>}
						{this.props.projects[0] && this.props.projects[0].status === "paused" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statyellow"><GrPause/>PAUSED</Badge>{this.props.projects[0].name}
						</Text>}
						{this.props.projects[0] && this.props.projects[0].status === "stopped" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statorange"><GrStop/>STOPPED</Badge>{this.props.projects[0].name}
						</Text>}
						{this.props.projects[0] && this.props.projects[0].status === "archived" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statred"><GrEject/>ARCHIVED</Badge>{this.props.projects[0].name}
						</Text>}
						{this.props.projects[0] && this.props.projects[0].status === "proposal" && <Text fontSize = "lg" border="2px" borderRadius="md" 
							bg="#F3F3F3" borderColor="#777777" paddingLeft="4px">
								<Badge rounded="full" bg="statgray"><GrChatOption/>PROPOSAL</Badge>{this.props.projects[0].name}
						</Text>}
						
						<Text paddingLeft="4px">PROJECT TEAM GOES HERE{/*this.props.projects[0] && this.props.projects[0].staff*/}</Text>
						<Text paddingLeft="4px">{this.props.projects[0] && this.props.projects[0].description}</Text>
						<Text paddingLeft="4px">CONTACT: {this.props.projects[0] && this.props.projects[0].owner} [email]</Text>
						<Button bg="untgreen"><Link color="#FFFFFF" href='/projects'>Back to projects page</Link></Button>
						<Button bg="untgreen"><Link color="#FFFFFF" id={this.props.match.params.id} href={'/edit/'+this.props.match.params.id}>Edit</Link></Button>
					</Box>
					<Image src={this.props.projects[0] && imagePath(this.props.projects[0].name)} paddingLeft="5px"/>
					
				</SimpleGrid>
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

//const imagePath = (path) => {
//	try { return require('../../images/'+path+'.png'); }
//	catch (err) { return undraw }
//}

const imagePath = (path) => {
	try{
		return require('../../../../routes/images/'+path+'.png');
	}
	catch(err){
		return undraw
	}
}