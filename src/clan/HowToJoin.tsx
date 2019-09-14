import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const HowToJoin: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      return;
    } 
    window.location.href = "https://discord.gg/EfGSbKE"; 
  };
  return <Container style={{marginTop: '1rem'}}>
    <Row>
      <Col lg="10" className="mx-auto">
        <div>
          <div>
            <h2>How to join</h2>
            <p className="lead">
            After reading through what we offer, maybe you'd like to join us!
            </p>
          </div>
        </div>
        <Jumbotron>
          <h2>Requirements</h2>
          <p className="lead">Please accept the following requirements to join the clan.</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Check name="age" required label="You are 18 or older."
                feedback="Must be accepted">
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check name="english" required type="checkbox" label="You can speak English.">
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check name="timezone" required type="checkbox" label="You live in an EU or similar timezone.">
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check name="members" required type="checkbox" label="You will play with clan members.">
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Check name="rules" required type="checkbox" label="You have read the clan rules.">
              </Form.Check>
            </Form.Group>
            <Button style={{borderColor: '#7289da', backgroundColor: '#7289da'}} type="submit">
              Join Strife on Discord
            </Button>
          </Form>    
        </Jumbotron>
      </Col>
    </Row>         
  </Container>
}

export default HowToJoin