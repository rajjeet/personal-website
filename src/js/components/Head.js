import {Helmet} from 'react-helmet';
import favicon from '../../assets/icons/favicon.ico';
import React from 'react';

export const Head = () => (
	<Helmet>
		<meta charset="utf-8"/>
		<title>Ortmesh</title>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="shortcut icon" href={favicon}/>
	</Helmet>
);