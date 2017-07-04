import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card } from 'material-ui';

import RepoListItem from './RepoListItem.js';

const RepoList = ({ repos }) => {

	console.log('repos: ', repos)

	const renderRepoList = (repos) => {
		const repoListItems = repos.map( repo => {
			return <RepoListItem repo={repo} />
		});
	}

	return (
		<Card>
		  <ListGroup>
		  	Repositories
		  	{ Object.keys(repos) > 0 ? renderRepoList(repos) : '' }
		  </ListGroup>
		);
		</Card>
	)
}

export default RepoList;