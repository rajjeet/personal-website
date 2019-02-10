import React from 'react';
import { Image } from 'semantic-ui-react';
import headshot from '../../assets/headshot.jpg';

const MyCard = () => (
	<div>
		<Image src={headshot} rounded size="large" centered />
		<br />
		<span>
			<h3>Rajjeet Phull</h3>
		</span>

		<p>
			Welcome to my website. I&#39;m an obsessed techie that loves cloud
			computing, databases, books, coding, and avocados. My mission is to build
			technical solutions that solves challenging problems at scale and
			positively impact tons of people.
		</p>
	</div>
);

export default MyCard;
