import React from 'react';
import './Style.css';
import { Text, Box, Image, Badge, theme } from "@chakra-ui/core"
import { Link } from 'react-router-dom';
import undraw from '../../images/projects.svg';

class Listing extends React.Component {
	render() {
		return (
			<Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
				<Image src={undraw} maxW = "100%"/>
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						
						{/* Conditional rendering logic to properly set the colour of status badges. */}
						{this.props.status === "open" &&
							<Badge rounded="full" px="2" 
									variantColor="teal">
								{this.props.status}
				  			</Badge>						
						}
						{this.props.status === "active" && 
							<Badge rounded="full" px="2" 
									variantColor="green">
								{this.props.status}
				  			</Badge>
						}	
						{this.props.status === "suspended" &&
							<Badge rounded="full" px="2" 
									variantColor="yellow">
								{this.props.status}
				  			</Badge>
						}
						{this.props.status === "archived" &&
							<Badge rounded="full" px="2" 
									variantColor="red">
								{this.props.status}
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
					>
						{this.props.name}
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
