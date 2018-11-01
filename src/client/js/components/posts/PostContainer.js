import React from 'react';
import Post from './Post';
import posts from './postData';
import { ItemGroup, Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PostContainer = ({ showCount, heading }) => (
	<Container>
		<Header as="h3" content={heading} dividing />
		<ItemGroup>
			{posts.slice(0, showCount).map(post => {
				return (
					<Post
						key={post.header}
						header={post.header}
						datePosted={post.datePosted}
						content={post.content}
					/>
				);
			})}
		</ItemGroup>
	</Container>
);

PostContainer.propTypes = {
	showCount: PropTypes.number.isRequired,
	heading: PropTypes.string.isRequired
};

export default PostContainer;
