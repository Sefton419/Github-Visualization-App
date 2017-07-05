import React from 'react';
import { ListGroup } from 'react-bootstrap';

import RepoListItem from './RepoListItem.js';

import '../App.css';

const RepoList = ({ repos, getCommits }) => {

	const renderRepoList = (repos) => {
		let key = 0;
		return repos.data.map( repo => {
			key++;
			return (
				<div key={key}>
					<RepoListItem repo={repo} getCommits={getCommits} />
				</div>
			);
		})
	}

	return (

		  <ListGroup>
		  	{ 'data' in repos ? renderRepoList(repos) : '' }
		  </ListGroup>

	);
}

export default RepoList;