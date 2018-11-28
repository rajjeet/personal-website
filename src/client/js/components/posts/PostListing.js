import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PostListing = ({header, datePosted, description, thumbnail})  => (
	<Item>
		<Item.Image verticalAlign='middle' src={thumbnail} />
		<Item.Content>
			<Item.Header>{header}</Item.Header>
			<Item.Meta>{datePosted}</Item.Meta>
			<Item.Description>{description}</Item.Description>					
		</Item.Content>
	</Item>	
);

PostListing.propTypes = {
	header: PropTypes.string.isRequired,
	datePosted: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired
};

export default PostListing;
