import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jquery from 'jquery';
import App from './components/App';


jquery(document).ready(() => {
	ReactDOM.render(
		<Router>
			<Route path='/' component={App} />
		</Router>,
		document.getElementById('root')
	);
});
