import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import jquery from 'jquery';

jquery(document).ready(() => {
	ReactDOM.render(
		<Router>
			<Route path='/' component={App} />
		</Router>,
		document.getElementById('root')
	);
});