import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostListing extends React.Component {
	render(){		
		return (
			<Item>
				<Item.Image src={this.props.thumbnail} />				
				<Item.Content>
					<Item.Header>{this.props.header}</Item.Header>
					<Item.Meta>{this.props.datePosted}</Item.Meta>
					<Item.Description>{this.props.description}</Item.Description>
					<Link to={`${this.props.match.url}/${this.props.id}`}>Read more.</Link>
				</Item.Content>
			</Item>	
		);
	}
}

PostListing.propTypes = {
	header: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	datePosted: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	match: PropTypes.object
};

export default PostListing;
