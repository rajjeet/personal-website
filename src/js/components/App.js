import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import PostListingsContainer from './posts/PostListingsContainer';
import MainMenu from './MainMenu';
import HomePage from './HomePage';
import 'semantic-ui-css/semantic.min.css';
import {hot} from 'react-hot-loader/root';
import {Head} from './Head';

const App = () => (
	<div>
		<Head />
		<MainMenu/>
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/posts" render={(props) => (
				<Container>
					<PostListingsContainer showCount={2} heading="Posts" {...props} />
				</Container>
			)}
			/>
			<Route path='*' render={() => <h1>Not found!</h1>}/>
		</Switch>
	</div>
);

export default hot(App);
