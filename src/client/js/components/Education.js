import React from 'react';
import { Item } from 'semantic-ui-react';
import ryersonLogo from '../../assets/ryerson-university-logo.png';
import uoftLogo from '../../assets/university-of-toronto-logo.png';

// const imageStyle = {
// 	width: '50px',
// 	height: '50px'
// };

const Education = () => (
	<div>
		<h3>Education</h3>
		<Item.Group unstackable>
			<Item>
				<Item.Image
					src={uoftLogo}
					verticalAlign="top"
					className="education-logo"
				/>
				<Item.Content>
					<Item.Header as="h5">University of Toronto</Item.Header>
					<Item.Meta>
						<span>2013-2015</span>
					</Item.Meta>
					<Item.Description>
						Masters of Applied Science - Engineering
					</Item.Description>
				</Item.Content>
			</Item>
			<Item>
				<Item.Image
					src={ryersonLogo}
					className="education-logo"
					verticalAlign="top"
					size="small"
				/>
				<Item.Content>
					<Item.Header>Ryerson University</Item.Header>
					<Item.Meta>
						<span>2009-2013</span>
					</Item.Meta>
					<Item.Description>
						Bachelors of Engineering: Biomedical Enginering (BEng.)
					</Item.Description>
				</Item.Content>
			</Item>
		</Item.Group>

		{/* <Grid columns="equal">
			<Grid.Row>
				<Grid.Column>
					<Image src={uoftLogo} avatar size="large" />
				</Grid.Column>
				<Grid.Column>
					<Image src={ryersonLogo} avatar size="large" />
				</Grid.Column>
			</Grid.Row>
		</Grid> */}
		<br />
	</div>
);

export default Education;
