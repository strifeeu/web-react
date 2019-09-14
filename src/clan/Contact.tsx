import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact: React.FC = () => <Container>
<Row>
  <Col lg="8" className="mx-auto">
    <div style={{textAlign: 'center'}}> 
      <h2>Contact</h2>
      <p className="lead">If you wish to get in touch with us for any reason, may it be a question or a join request, please contact me(BenBytes) via one of the ways displayed below.</p>
    </div>
    <ul>
      <li>             
        Discord: 《BenBytes》#7686
      </li>
      <li>             
        Email: benbytesstrife@gmail.com
      </li>
      <li>             
        Steam: BenBytes
      </li>
      <li>             
        Battle.net: xXBenBytesXx#2504
      </li>
    </ul> 
  </Col>
</Row>
</Container>

export default Contact