import React from 'react';
import PostListing from './PostListing';
import posts from './postData';
import { ItemGroup, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PostListingsContainer extends React.Component {
	render() {
		return (			
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Header as="h3" content={this.props.heading} dividing />
						<ItemGroup>
							{posts.slice(0, this.props.showCount).map(post => {
								return (
									<PostListing
										key={post.header}
										header={post.header}
										datePosted={post.datePosted}
										description={post.description}
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

PostListingsContainer.propTypes = {
	showCount: PropTypes.number.isRequired,
	heading: PropTypes.string.isRequired
};

export default PostListingsContainer;
