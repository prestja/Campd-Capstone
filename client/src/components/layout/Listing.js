import React from 'react';
import './Style.css';
import './theme.js';
import { Text, Box, Image, Badge, Icon, Link } from "@chakra-ui/core"
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject } from "react-icons/gr";

import undraw from '../../images/projects.svg';

class Listing extends React.Component {
	render() {
		return (
			//Box that provides the background and outer edge of the card.
			<Box maxW="sm" rounded="lg" overflow="hidden"
				boxShadow="lg" bg="#EEEEEE">
				<Image src={imagePath(this.props.name)}  maxW = "100%" />
				{/*Box that contains all of the non-image content of the card. Includes padding in all directions
					to stop content from running up against the border. */}
				<Box p="6">
					{/*Box for owner's name and status badge. */}
					<Box d="flex" alignItems="baseline">
						
						{/* Status badges - makes use of conditional rendering logic to properly
							set the colour and icon of each status badge. */}
						{this.props.status === "new" &&
							<Badge rounded="full" px="2" bg="statblue">
								<Icon as = {GrAddCircle}></Icon>	
								{this.props.status}
				  			</Badge>						
						}
						{this.props.status === "recruiting" &&
							<Badge rounded="full" px="2" bg="statteal">
								<Icon as = {GrUserAdd}></Icon>	
								{this.props.status}
				  			</Badge>						
						}
						{this.props.status === "active" && 
							<Badge rounded="full" px="2" bg="statgreen">
								<Icon as = {GrPlay}></Icon>	
								{this.props.status}
				  			</Badge>
						}	
						{this.props.status === "paused" &&
							<Badge rounded="full" px="2" bg="statyellow">
								<Icon as = {GrPause}/>{this.props.status}
				  			</Badge>
						}
						{this.props.status === "stopped" &&
							<Badge rounded="full" px="2" bg="statorange">
								<Icon as = {GrStop}/>{this.props.status}
				  			</Badge>
						}
						{this.props.status === "archived" &&
							<Badge rounded="full" px="2" bg="statred">
								<Icon as = {GrEject}/>{this.props.status}
				  			</Badge>
						}
						{/*Box for containing the name of the project's owner */}	
						<Box
							color="gray.500"
							fontWeight="semibold"
							letterSpacing="wide"
							fontSize="xs"
							textTransform="uppercase"
						>
							&nbsp;By {this.props.owner}
         				</Box>
					</Box>
					{/*Box for the name/link of the project */}
					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						color="#000000"
					>
						{/*The project's name, rendered as a link to let users click through
							to project details from the card. 
							Connects to /src/components/layout/ProjectView.js */}
						<Link color="#007700" 
							href={"/project/"+this.props._id}
							>{this.props.name}
						</Link>
					</Box>
					{/*The description of each project, fixed to 3 lines to keep card size in
						check without removing too much information. */}
					<Text width = "95%"noOfLines={3}>
						{this.props.description}
					</Text>
				</Box>
			</Box>
		);
	}
}

export default Listing;

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
