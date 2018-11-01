import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

jquery(document).ready(() => {
	const wrapper = document.getElementById('root');
	ReactDOM.render(
		<Router>
			<Route path="/" component={App} />
		</Router>,
		wrapper
	);
});
