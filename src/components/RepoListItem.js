import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const RepoListItem = ({ repo, getCommits }) => {
	return (
		<div className="margin-list">
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