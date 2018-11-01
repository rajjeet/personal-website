import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Post = ({ header, datePosted, content }) => (
	<Item>
		<Item.Content>
			<Item.Header>{header}</Item.Header>
			<Item.Meta>{datePosted}</Item.Meta>
			<Item.Description>{content}</Item.Description>
		</Item.Content>
	</Item>
);

Post.propTypes = {
	header: PropTypes.string.isRequired,
	datePosted: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default Post;
