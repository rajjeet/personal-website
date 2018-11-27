import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import mcseBadge from '../../assets/MCSE-Data-Management-and-Analytics-2018.png';
import awsBadge from '../../assets/aws_sa_professional_badge.png';

const Certification = () => (
	<div>
		<h3>Certifications</h3>
		<Grid columns="equal">
			<Grid.Row>
				<Grid.Column>
					<a
						href="//www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-07-07&ci=AWS00544237"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src={awsBadge} />
					</a>
				</Grid.Column>
				<Grid.Column>
					<a
						href="//www.youracclaim.com/badges/f6200875-e1f7-4973-a97d-5dc5396aa454/linked_in_profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src={mcseBadge} />
					</a>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		<br />
	</div>
);

export default Certification;
