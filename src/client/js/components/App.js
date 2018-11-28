import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PostContainer from './posts/PostContainer';
import MainMenu from './MainMenu';
import HomePage from './HomePage';
import '../../assets/favicon.ico';
import '../../css/styles.css';

const App = () => (
	<div>
		<MainMenu />

		<Route
			path="/posts"
			render={() => (
				<Container>					
					<PostContainer showCount={2} heading="Posts" />
				</Container>
			)}
		/>

		<Route
			exact
			path="/"
			component={HomePage}
		/>
	</div>
);

export default App;
