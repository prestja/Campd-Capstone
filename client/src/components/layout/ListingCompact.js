import React from 'react';
import './Style.css';
import { SimpleGrid, Checkbox, Text } from "@chakra-ui/core"

class ListingCompact extends React.Component {
	render() {
		return (
			<SimpleGrid columns = {3}>
				<Checkbox isChecked = {true}></Checkbox>
				<Text isTruncated>{this.props.name}</Text>
				<Text isTruncated>{this.props.description}</Text>
			</SimpleGrid>
		);
	}
}

export default ListingCompact;
