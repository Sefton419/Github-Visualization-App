import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Card } from 'material-ui';

const CommitListItem = ({ commit }) => {
	return (
		<div>
			<ListGroupItem 
				header={commit.commit.author.name}
			> 
				{commit.commit.message} 
			</ListGroupItem>
	  </div>
	)
}

export default CommitListItem;