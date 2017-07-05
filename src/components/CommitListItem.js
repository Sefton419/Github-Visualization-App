import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Card } from 'material-ui';

const CommitListItem = ({ commit, keyVal }) => {
	return (
		<div>
			<ListGroupItem 
				header={`${keyVal}. ${commit.commit.author.name}`}
			> 
				{commit.commit.message} 
			</ListGroupItem>
	  </div>
	)
}

export default CommitListItem;