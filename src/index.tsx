import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import App from './App';
import AboutClan from './AboutClan';
import Team from './clan/OurAdmins';
import Members from './clan/OurMembers';
import Rules from './clan/Rules';

import "bootstrap/dist/css/bootstrap.min.css";
import HowToJoin from './clan/HowToJoin';

const routing = (
    <Router>
      <div>
        {/* Navigation */}
        <Navbar sticky="top" bg="dark" variant="dark" expand="sm">
          {/* <Navbar.Brand href="#page-top">Strife EU</Navbar.Brand> */}
          <Navbar.Brand href="/">
            <Image
              src="./images/StrifeLogo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Strife logo"
              rounded
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              {/* <Nav.Link href="#features">History</Nav.Link> */}
              {/* <Nav.Link href="#uid">Us in Destiny 2</Nav.Link> */}
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/members">Members</Nav.Link>
              <Nav.Link href="rules">Rules</Nav.Link>
              {/* <Nav.Link href="#htj">How to join</Nav.Link> */}
            </Nav>
            <Button href="/join" style={{borderColor: '#7289da', backgroundColor: '#7289da'}}>Join us on Discord</Button>
          </Navbar.Collapse>
        </Navbar>  
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutClan} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/join" component={HowToJoin} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
