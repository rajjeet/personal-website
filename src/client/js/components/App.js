import React from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import MyCard from './MyCard';
import PostContainer from './posts/PostContainer';
import MainMenu from './MainMenu';
import Certification from './Certification';
import Education from './Education';
import BookList from './reading/bookList';
import CourseList from './courses/CourseList';
import GithubCommitList from './GithubCommitList';
import '../../assets/favicon.ico';
import '../../css/styles.css';

const leftColumnStyle = {
	paddingLeft: '30px'
};

const App = () => (
	<div>
		<MainMenu />

		<Route
			path="/posts"
			render={() => (
				<div>
					<Divider hidden />
					<PostContainer showCount={2} heading="Posts" />
				</div>
			)}
		/>

		<Route
			exact
			path="/"
			render={() => (
				<Grid>
					<Grid.Row>
						<Grid.Column
							mobile={16}
							tablet={11}
							computer={12}
							style={leftColumnStyle}
						>
							<PostContainer showCount={1} heading="Latest Post" />
							<Divider hidden />
							<Grid stackable>
								<Grid.Row>
									<Grid.Column width={8} only="computer tablet">
										<Grid.Row only="computer tablet">
											<GithubCommitList />
										</Grid.Row>
										<Divider hidden />
										<Grid.Row>
											<BookList />
										</Grid.Row>
									</Grid.Column>
									<Grid.Column width={8} only="computer tablet">
										<CourseList />
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={5} computer={4}>
							<Segment>
								<MyCard />
								<Divider />
								<Certification />
								<Divider />
								<Education />
								<Grid stackable>
									<Grid.Row>
										<Grid.Column only="mobile">
											<Divider />
											<GithubCommitList />
										</Grid.Column>
										<Grid.Column only="mobile">
											<CourseList />
										</Grid.Column>
										<Grid.Column only="mobile">
											<BookList />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			)}
		/>
	</div>
);

export default App;
