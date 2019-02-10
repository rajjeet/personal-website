import React from 'react';
import { Table, Menu, Icon, Popup } from 'semantic-ui-react';
import data from './bookData';

const greenFont = {
	color: 'SeaGreen'
};

function compare(a, b) {
	if (Date.parse(a.date_added) < Date.parse(b.date_added)) return 1;
	if (Date.parse(a.date_added) > Date.parse(b.date_added)) return -1;
	return 0;
}

class BookList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pageNo: 1, maxPerPage: 5, menuItems: [] };

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
									Reading List{' '}
									<Popup
										inverted
										hoverable
										trigger={<Icon name="info circle" />}
									>
										<Popup.Content>
											<p>
												Always learning new things via audiobooks from Audible.
												My plan is to start reviewing and documenting action
												steps for each books I finish.
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
							.map(book => {
								return (
									<Table.Row key={book.title}>
										<Table.Cell>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={book.url}
											>
												{book.title}
											</a>
										</Table.Cell>
										<Table.Cell
											style={book.status === 'Reading' ? greenFont : null}
										>
											{book.status}
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

export default BookList;
