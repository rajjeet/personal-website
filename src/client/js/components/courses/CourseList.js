import React from 'react';
import { Table, Menu, Icon, Popup } from 'semantic-ui-react';
import data from './courseData';

const orangeFontStyle = {
	color: 'Orange'
};

function compare(a, b) {
	if (a.sequence < b.sequence) return 1;
	if (a.sequence > b.sequence) return -1;
	return 0;
}

class CourseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pageNo: 1, menuItems: [], maxPerPage: 10 };

		this.jumpToPageNo = this.jumpToPageNo.bind(this);
		this.jumpToNextPageNo = this.jumpToNextPageNo.bind(this);
		this.jumpToPrevPageNo = this.jumpToPrevPageNo.bind(this);
	}

	jumpToPageNo(num) {
		this.setState({ pageNo: num });
	}

	jumpToNextPageNo() {
		if (data.length - this.state.pageNo * this.state.maxPerPage > 0) {
			this.setState({ pageNo: this.state.pageNo + 1 });
		}
	}

	jumpToPrevPageNo() {
		if (this.state.pageNo > 1) {
			this.setState({ pageNo: this.state.pageNo - 1 });
		}
	}
	render() {
		const { pageNo, maxPerPage } = this.state;
		return (
			<div>
				<Table basic="very" compact>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>
								<h3>
									Courses{' '}
									<Popup
										inverted
										hoverable
										trigger={<Icon name="info circle" />}
									>
										<Popup.Content>
											<p>
												Pluralsight courses that help me stay updated. To see my
												full detailed profile, checkout my{' '}
												<a
													target="_blank"
													rel="noopener noreferrer"
													href="//pluralsight.com/profile/phullraj"
												>
													Pluralsight profile.
												</a>
											</p>
										</Popup.Content>
									</Popup>
								</h3>
								Page {pageNo} of {Math.ceil(data.length / maxPerPage)}
							</Table.HeaderCell>
							<Table.HeaderCell colSpan="3">
								<Menu floated="right" pagination>
									<Menu.Item icon onClick={this.jumpToPrevPageNo}>
										<Icon name="chevron left" />
									</Menu.Item>
									<Menu.Item icon onClick={this.jumpToNextPageNo}>
										<Icon name="chevron right" />
									</Menu.Item>
								</Menu>
							</Table.HeaderCell>
						</Table.Row>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{data
							.sort(compare)
							.slice(pageNo * maxPerPage - maxPerPage, pageNo * maxPerPage)
							.map(course => {
								return (
									<Table.Row key={course.sequence}>
										<Table.Cell>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={course.link}
											>
												{course.name}
											</a>
										</Table.Cell>
										<Table.Cell
											style={
												course.status === 'In Progress' ? orangeFontStyle : null
											}
										>
											{course.status}
										</Table.Cell>
									</Table.Row>
								);
							})}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default CourseList;
