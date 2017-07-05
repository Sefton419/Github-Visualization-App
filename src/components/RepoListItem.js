import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Card } from 'material-ui';

const RepoListItem = ({ repo, getCommits }) => {
	return (
		<div>
			<ListGroupItem 
				onClick={function() {
					getCommits(repo.owner.login, repo.name)
				}}
				header={repo.name}
			> 
				{repo.description} 
			</ListGroupItem>
	  </div>
	)
}

export default RepoListItem;