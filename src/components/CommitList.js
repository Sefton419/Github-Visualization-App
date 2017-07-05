import React from 'react';
import { Card } from 'material-ui';
import { ListGroup } from 'react-bootstrap';

import CommitListItem from './CommitListItem.js'

const CommitList = ({ commits }) => {
	const renderCommitList = (commits) => {
		let key = 0;
		return commits.data.map( commit => {
			console.log('commit: ', commit)
			key++;
			if (key < 21) {
				return (
					<div key={key}>
						<CommitListItem commit={commit} />
					</div>
				);
			}
		})
	}

	return (
	  <ListGroup>
	  	{ 'data' in commits ? renderCommitList(commits) : '' }
	  </ListGroup>
	);
}

export default CommitList;