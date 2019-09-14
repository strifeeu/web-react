import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About: React.FC = () => <Container style={{marginTop: '1rem'}}>
<Row>
  <Col lg="8" className="mx-auto">
    <h2>About this clan</h2>
    <p>
      Strife EU is much more than a Destiny clan, it's a community of people that come together to form new friendships, play games and have a laugh. Whilst our main game is Destiny 2, the community plays multiple different games; such as PUBG, Smite and StarCraft. 
    </p>
    <p>
      Our home is our Discord server. In here we all of our members can interact in the different sections of the server, with a main general section which everyone has access to as well as sections for the different games. Looking for a game of duos in PUBG? Head over to that section and ask if anyone's up for a game! Looking to do a Last Wish raid? Head over to the Destiny section and use the Charlemagne bot to set up a post! There's something for everyone in the server. 
    </p>
    <p>
      The server is run by the owner, Defwhish, and the admin team who you can meet in the Team section of this website! We make sure that everything runs smoothly and everyone has a good time and a good laugh! We make sure that everyone has a good laugh, but also enforce the rules when the time comes to make sure that everyone's happy.
    </p>
  </Col>
</Row>
</Container>

export default About