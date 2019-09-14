import React from 'react';

import Container from 'react-bootstrap/Container';
import DestinyMembers from '../destiny/Members';

const Members: React.FC = () => <Container style={{marginTop: '1rem'}}>
  <h2>Our Members</h2>
  <p className="lead">
    Bunch of Knobbers
  </p>
  <DestinyMembers/>
</Container>
export default Members