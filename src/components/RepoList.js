import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card } from 'material-ui';

import RepoListItem from './RepoListItem.js';

import '../App.css';

const RepoList = ({ repos }) => {

	console.log('LENGTH: ', Object.keys(repos).length)

	const renderRepoList = (repos) => {
		let key = 0;
		return repos.data.map( repo => {
			key++;
			return (
				<div key={key}>
					<RepoListItem repo={repo} />
				</div>
			);
		})
	}

	return (
		<Card>
		  <ListGroup>
		  	{ 'data' in repos ? renderRepoList(repos) : '' }
		  </ListGroup>
		</Card>
	);
}

export default RepoList;