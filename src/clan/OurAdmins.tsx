import React from 'react';

import Container from 'react-bootstrap/Container';
import DestinyAdmins from '../destiny/Admins';

const Admins: React.FC = () => <Container style={{marginTop: '1rem'}}>
  <h2>Our Team</h2>
  <p className="lead">
    Founder Defwhish and the Admins
  </p>
  <DestinyAdmins/>
</Container>

export default Admins