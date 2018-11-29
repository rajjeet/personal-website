import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PostListingsContainer from './posts/PostListingsContainer';
import MainMenu from './MainMenu';
import HomePage from './HomePage';
import '../../assets/favicon.ico';
import '../../css/styles.css';

const App = () => (

	<div>
		<MainMenu />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/posts"
				render={(props) => (
					<Container>
						<PostListingsContainer showCount={2} heading="Posts" {...props} />
					</Container>
				)}
			/>
			<Route path='*' render={() => <h1>Not found!</h1>} />
		</Switch>
	</div>
);

export default App;
