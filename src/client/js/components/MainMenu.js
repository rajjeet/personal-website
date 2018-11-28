import React, { Component } from 'react';
import { Menu, Grid, Icon, Dropdown, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class MainMenu extends Component {
	render() {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Menu stackable className="computer only row">
							<Menu.Item header as={NavLink} to="/">
								<Icon name="home" />
								Ortmesh
							</Menu.Item>
							<Menu.Item as={NavLink} to="/posts">
								<Icon name="sticky note outline" />
								Posts
							</Menu.Item>
							<Dropdown item text="Contact">								
								<Dropdown.Menu>
									<Dropdown.Item>
										<a href="mailto:rajjeet.phull@gmail.com">
											<List.Icon name="mail" /> Email
										</a>
									</Dropdown.Item>
									<Dropdown.Item>
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="//linkedin.com/in/rajjeetphull"
										>
											<List.Icon name="linkedin" />
											LinkedIn
										</a>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Menu>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
