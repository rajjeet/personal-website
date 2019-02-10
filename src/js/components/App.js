import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import PostListingsContainer from './posts/PostListingsContainer';
import MainMenu from './MainMenu';
import HomePage from './HomePage';
import favicon from '../../assets/icons/favicon.ico';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
	<div>
		<Helmet>
			<meta charset="utf-8" />
			<title>Ortmesh</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />			
			<link rel="shortcut icon" href={favicon} />
		</Helmet>
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
