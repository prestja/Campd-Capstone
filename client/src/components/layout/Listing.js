import React from 'react';
import './Style.css';
import './theme.js';
import { Text, Box, Image, Badge, Icon, Link } from "@chakra-ui/core"
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject } from "react-icons/gr";

import undraw from '../../images/projects.svg';

class Listing extends React.Component {
	render() {
		return (
			<Box maxW="sm" rounded="lg" overflow="hidden"
				boxShadow="lg" bg="#EEEEEE">
				<Image src={imagePath(this.props.name)}  maxW = "100%" />
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						
						{/* Conditional rendering logic to properly set the colour of status badges. */}
						{this.props.status === "new" &&
							<Badge rounded="lg" mr = "4px" bg="statblue">
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
					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						color="#000000"
					>
						<Link color="#007700" 
							href={"/project/"+this.props._id}
							>{this.props.name}
						</Link>
					</Box>
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
	try{
		return require('../../../../routes/images/'+path+'.png');
	}
	catch(err){
		return undraw
	}
}
