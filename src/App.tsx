import React, { useLayoutEffect, useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import HowToJoin from './clan/HowToJoin';
import GamesWePlay from './clan/GamesWePlay';


const App: React.FC = () => {
  // let [width, setWidth] = useState(calculateWidth());
  let [background, setBackground] = useState();
  useLayoutEffect(() => {
    function calculateWidth() {
      return Math.max(window.innerWidth || 0);
    }

    function updateSize() {
      if (calculateWidth() > 700) {
        setBackground(<video poster="https://www.bungie.net/7/ca/destiny/bgs/shadowkeep/mobile/finishers_mobile_bg.jpg" style={{position: 'absolute', zIndex: 1, width : '100%'}} autoPlay muted loop playsInline>
        <source type="video/webm" src="https://www.bungie.net/7/ca/destiny/videos/shadowkeep_finishers.webm" ></source>
        <source type="video/mp4" src="httpps://www.bungie.net/7/ca/destiny/videos/shadowkeep_finishers.mp4" ></source>
        </video>);
      } else {
        setBackground(<img alt="" src="https://www.bungie.net/7/ca/destiny/bgs/shadowkeep/mobile/finishers_mobile_bg.jpg" style={{position: 'absolute', zIndex: 1, width : '100%'}}>
        </img>)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize()
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  return (
    <div>
      <Jumbotron style={{backgroundColor: '#fff', overflow : 'hidden', position: 'relative', padding: '0rem', marginBottom: '0rem'}} fluid>
          {background}
          <Container className="text-white" style={{zIndex: 2, position: 'relative', padding : '6rem'}}>
            <h1>STRIFE EU</h1>
            <p className="lead">STRIKE FAIR - STRIKE HARD - NO MERCY</p>
          </Container>
      </Jumbotron>
      <section id="pitch">
        {/* <Row>
          <Col lg="10" className="mx-auto"> */}
            <Jumbotron fluid>
              <Container>
              <h2>Welcome</h2>
              <p className="lead">
                Strife EU is a PC gaming clan with a heavy focus on playing Destiny 2. 
              </p>
              <p>Members are active and sociable. We place a massive emphasis on clan interaction. We want you to come in and chat, engage, play.</p>
              <p>We play:</p>
              <ul>
                <li>All Raid content and Challenges</li>
                <li>Speed runs</li>
                <li>Pinnacle weapon grinds</li>
                <li>Endgame content</li>
              </ul>
              <GamesWePlay/>
              </Container>
            </Jumbotron>
          {/* </Col>
        </Row> */}
      </section>
      <section id="htj">
        <HowToJoin/>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Strife EU 2019</p>
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
}

export default App;
