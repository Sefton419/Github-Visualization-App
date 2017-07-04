import React from 'react';
import ListGroupItem from 'react-bootstrap';
import { Card } from 'material-ui';

const RepoListItem = ({ repo }) => {
	console.log('REPO: ', repo)
	return (
		<div key={repo.id}>
	    {repo.name}
	  </div>
	)
}

export default RepoListItem;