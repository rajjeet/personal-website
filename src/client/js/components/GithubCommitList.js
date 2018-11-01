import React from 'react';
import { List, Popup, Icon } from 'semantic-ui-react';
import axios from 'axios';

function compare(a, b) {
	if (a.created_at < b.created_at) return 1;
	if (a.created_at > b.created_at) return -1;
	return 0;
}

function timeSince(date) {
	const seconds = Math.floor((new Date() - date) / 1000);
	let interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + ' years ago';
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + ' months ago';
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + ' days ago';
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + ' hours ago';
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + ' minutes ago';
	}
	return Math.floor(seconds) + ' seconds ago';
}

const commitStyle = {
	fontSize: '10px'
};

class GithubCommitList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { events: [] };
	}

	componentDidMount() {
		axios
			.get('https://api.github.com/users/rajjeet/events')
			.then(response => {
				let events = response.data
					.filter(event => {
						if (event.type === 'PushEvent') {
							return true;
						} else {
							return false;
						}
					})
					.sort(compare)
					.slice(0, 3);
				this.setState({ events: events });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { events } = this.state;
		return (
			<div>
				<h3>
					Github Activity{' '}
					<Popup inverted hoverable trigger={<Icon name="info circle" />}>
						<Popup.Content>
							<p>
								See my public code repositories at{' '}
								<a
									href="//github.com/rajjeet"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github.
								</a>
							</p>
						</Popup.Content>
					</Popup>
				</h3>
				<List divided relaxed>
					{events.map(event => {
						return (
							<List.Item key={event.id}>
								<List.Icon name="github" size="large" verticalAlign="middle" />
								<List.Content>
									<List.Header>
										{event.payload.commits.length}{' '}
										{event.payload.commits.length == 1 ? 'commit' : 'commits'}{' '}
										to
										<a
											href={event.repo.url
												.replace('api.', '')
												.replace('repos/', '')}
											target="_blank"
											rel="noopener noreferrer"
										>
											{' '}
											{event.repo.name}
										</a>
									</List.Header>
									<List.Description>
										{timeSince(new Date(event.created_at))}
										{event.payload.commits.map(commit => {
											return (
												<p style={commitStyle} key={commit.sha}>
													{commit.message}
												</p>
											);
										})}
									</List.Description>
								</List.Content>
							</List.Item>
						);
					})}
				</List>
			</div>
		);
	}
}

export default GithubCommitList;
