import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			htmlContent: ''
		};
	}
	componentDidMount(){
		
		fetch(this.props.content)
			.then(r =>  {
				return r.text();
			})
			.then(d => this.setState({...this.state, htmlContent: d }));
		
	}

	render() {		
		return (
			<Item>
				<Item.Image verticalAlign='middle' src={this.props.thumbnail} />
				<Item.Content>
					<Item.Header>{this.props.header}</Item.Header>
					<Item.Meta>{this.props.datePosted}</Item.Meta>
					<Item.Description><div dangerouslySetInnerHTML={{__html: this.state.htmlContent}}></div></Item.Description>					
				</Item.Content>
			</Item>	
		);
	}
}

Post.propTypes = {
	header: PropTypes.string.isRequired,
	datePosted: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired
};

export default Post;
