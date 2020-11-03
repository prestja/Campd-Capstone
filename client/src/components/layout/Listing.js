import React from 'react';
import './Style.css';
import { Text, Box, Image, Badge, theme } from "@chakra-ui/core"
import { GrAddCircle, GrUserAdd, GrPlay, GrPause, GrStop, GrEject } from "react-icons/gr";
import { Link } from 'react-router-dom';
import undraw from '../../images/projects.svg';
import ImageUpload from './Image';

class Listing extends React.Component {
	render() {
		return (
			
			<Box maxW="sm" rounded="lg" overflow="hidden"
				boxShadow="md" bg="#EEEEEE">
				<Image src={imagePath(this.props.name)}  maxW = "100%" />
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						
						{/* Conditional rendering logic to properly set the colour of status badges. */}
						{this.props.status === "new" &&
							<Badge rounded="full" px="2" 
									variantColor="blue">
								<GrAddCircle/>{this.props.status}
				  			</Badge>						
						}
						{this.props.status === "recruiting" &&
							<Badge rounded="full" px="2" 
									variantColor="teal">
								<GrUserAdd/>{this.props.status}
				  			</Badge>						
						}
						{this.props.status === "active" && 
							<Badge rounded="full" px="2" 
									variantColor="green">
								<GrPlay/>{this.props.status}
				  			</Badge>
						}	
						{this.props.status === "paused" &&
							<Badge rounded="full" px="2" 
									variantColor="yellow">
								<GrPause/>{this.props.status}
				  			</Badge>
						}
						{this.props.status === "stopped" &&
							<Badge rounded="full" px="2" 
									variantColor="orange">
								<GrStop/>{this.props.status}
				  			</Badge>
						}
						{this.props.status === "archived" &&
							<Badge rounded="full" px="2" 
									variantColor="red">
								<GrEject/>{this.props.status}
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
						<Link color="#000000" to={"/project/"+this.props._id}>{this.props.name}</Link>
					</Box>
					<Box isTruncated>
					{this.props.description}
						<Box as="span" color="gray.600" fontSize="sm">
							/ wk
          				</Box>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default Listing;

const imagePath = (path) => {
	try{
		return require('../../images/'+path+'.png');
	}
	catch(err){
		return undraw
	}
}
