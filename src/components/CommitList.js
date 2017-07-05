import React from 'react';
import { ListGroup, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import CommitListItem from './CommitListItem.js'
import '../App.css';

const CommitList = ({ commits, state }) => {

	const renderCommitList = (commits) => {
		let key = 0;
		return commits.data.map( commit => {
			key++;
			if (key < 21) {
				return (
					<div className="margin-list" key={key}>
						<CommitListItem commit={commit} keyVal={key} />
					</div>
				);
			} else {
				return '';
			}
		})
	}

	return (
		<div>
			<FormGroup>
				<ControlLabel>Search For Commit</ControlLabel>
			  <FormControl
			    componentClass="input"
			    placeholder="Enter text here..."
			  />
			</FormGroup>
		  <ListGroup>
		  	{ 'data' in commits ? renderCommitList(commits) : '' }
		  </ListGroup>
	  </div>
	);
}

export default CommitList;