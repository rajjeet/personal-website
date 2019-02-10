import React from 'react';
import { Grid, Segment, Divider, Container } from 'semantic-ui-react';
import Certification from './Certification';
import BookList from './reading/bookList';
import CourseList from './courses/CourseList';
import GithubCommitList from './GithubCommitList';
import MyCard from './MyCard';
import PostListingsContainer from './posts/PostListingsContainer';
import { Route } from 'react-router-dom';

const HomePage = () => (	
	<Container>
		<Grid padded>
			<Grid.Row>
				<Grid.Column
					mobile={16}
					tablet={11}
					computer={12}				
				>
					<Route exact path='/' render={(props) => (
						<PostListingsContainer showCount={1} heading="Latest Posts" {...props} />
					)} />					
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
	</Container>
);


export default HomePage;