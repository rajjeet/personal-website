import React from 'react';
import { Item } from 'semantic-ui-react';
import Posts from './postData';
import PropTypes from 'prop-types';

class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			htmlContent: '',
			post: null
		};
	}

	componentDidMount(){
		const post = Posts.filter(p => p.id === this.props.match.params.id)[0];
		fetch(`${post.id}/content.html`)
			.then(response => response.text())
			.then(text => this.setState({...this.state, post: post, htmlContent: text}));

	}

	render() {
		const post = this.state.post;
		return (
			<div>				
				{post ? 					
					<Item>
						<Item.Image src={`${post.id}/thumbnail.png`} />
						<Item.Content>
							<Item.Header>{post.header}</Item.Header>
							<Item.Meta>{post.datePosted}</Item.Meta>
							<Item.Description><div dangerouslySetInnerHTML={{__html: this.state.htmlContent}}></div></Item.Description>					
						</Item.Content>
					</Item>	
					: null}
			</div>
			
		);
	}
}

Post.propTypes = {
	match: PropTypes.object
};

export default Post;
