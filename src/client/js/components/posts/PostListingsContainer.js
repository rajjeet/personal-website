import React from 'react';
// import PostListing from './PostListing';
import Post from './Post';
import posts from './postData';
import { Route, Link } from 'react-router-dom';
import { Header, Grid, Item } from 'semantic-ui-react';
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
								<Item.Group unstackable divided>								
									{posts.slice(0, this.props.showCount).map(post => {
										return (
											<Item key={post.id}>
												<Item.Image size="small" src={`posts/${post.id}/thumbnail.png`} />				
												<Item.Content>
													<Item.Header>{post.header}</Item.Header>
													<Item.Meta>{post.datePosted}</Item.Meta>
													<Item.Description>{post.description}</Item.Description>
													<Link to={this.props.match.path === '/' ?
														`${this.props.match.url}posts/${post.id}`:`${this.props.match.url}/${post.id}`}
													>Read more.</Link>
												</Item.Content>
											</Item>	
										);
									})}
								</Item.Group>
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
