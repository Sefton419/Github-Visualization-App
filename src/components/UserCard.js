import React from 'react';
import { Card } from 'material-ui';
import { Row, Col, Thumbnail } from 'react-bootstrap';

const UserCard = ({ repos }) => {
	return (
		<Card>
			<Row>
			  <Col xs={6} md={3}>
			    <Thumbnail href="#" alt="171x180" src={repos.data[0].owner.avatar_url}/>
			  </Col>
			  <Col xs={6} md={3}>
			    <h3>{repos.data[0].owner.login}</h3>
			  </Col>
		  </Row>
		</Card>
	)
}

export default UserCard;
