import React from 'react';
// import PostListing from './PostListing';
import Post from './Post';
import posts from './postData';
import { Route, Link } from 'react-router-dom';
import { ItemGroup, Header, Grid, Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PostListingsContainer extends React.Component {
	render() {					
		return (			
			<Grid>			
				<Grid.Row>
					<Grid.Column>
						<Route exact path={this.props.match.path} render={() => (
							<div>
								<Header as="h3" content={this.props.heading} dividing />
								<ItemGroup>
									{posts.slice(0, this.props.showCount).map(post => {								
										return (
											<Item key={post.id}>
												<Item.Image src={post.thumbnail} />				
												<Item.Content>
													<Item.Header>{post.header}</Item.Header>
													<Item.Meta>{post.datePosted}</Item.Meta>
													<Item.Description>{post.description}</Item.Description>
													<Link to={`${this.props.match.url}/${post.id}`}>Read more.</Link>
												</Item.Content>
											</Item>													
										);
									})}
								</ItemGroup>
							</div>
						)}
						/>	
						<Route exact path={`${this.props.match.url}/:id`} component={Post} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
} 

PostListingsContainer.propTypes = {
	showCount: PropTypes.number.isRequired,
	heading: PropTypes.string.isRequired,
	match: PropTypes.object
};

export default PostListingsContainer;
