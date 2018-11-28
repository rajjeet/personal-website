import React from 'react';
import Post from './Post';
import posts from './postData';
import { ItemGroup, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
	render() {
		return (			
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Header as="h3" content={this.props.heading} dividing />
						<ItemGroup>
							{posts.slice(0, this.props.showCount).map(post => {
								return (
									<Post
										key={post.header}
										header={post.header}
										datePosted={post.datePosted}
										content={post.content}
										thumbnail={post.thumbnail}
									/>
								);
							})}
						</ItemGroup>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			
		);
	}
} 

PostContainer.propTypes = {
	showCount: PropTypes.number.isRequired,
	heading: PropTypes.string.isRequired
};

export default PostContainer;
