import React from 'react';
// import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			htmlContent: ''
		};
	}

	componentDidMount(){
		// fetch(this.props.content)
		// 	.then(response => response.text())
		// 	.then(text => this.setState({...this.state, htmlContent: text}));
		console.log('here');
	}

	render() {
		return (
			// <Item>
			// 	<Item.Image verticalAlign='middle' src={this.props.thumbnail} />
			// 	<Item.Content>
			// 		<Item.Header>{this.props.header}</Item.Header>
			// 		<Item.Meta>{this.props.datePosted}</Item.Meta>
			// 		<Item.Description><div dangerouslySetInnerHTML={{__html: this.state.htmlContent}}></div></Item.Description>					
			// 	</Item.Content>
			// </Item>	
			<h1>{this.props.match.params.id}</h1>
		);
	}
}

Post.propTypes = {
	// header: PropTypes.string.isRequired,
	// datePosted: PropTypes.string.isRequired,
	// content: PropTypes.string.isRequired,
	// thumbnail: PropTypes.string.isRequired
	match: PropTypes.object
};

export default Post;
