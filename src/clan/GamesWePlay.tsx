import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

interface GamesHolder {
  name: string,
  imageURL: string
}

const GamesWePlay: React.FC = () => {
  let widthheight = 128;  

  let games : GamesHolder[] = [];
  games.push({name: "Borderlands", imageURL : "./images/games/borderlands.jpg"});
  games.push({name: "Starcraft", imageURL : "./images/games/Starcraft.jpg"});
  games.push({name: "PUBG", imageURL : "./images/games/PUBG.jpg"});
  games.push({name: "Smite", imageURL : "./images/games/smite.jpg"});
  games.push({name: "World of Warcraft", imageURL : "./images/games/wow.jpg"});

  const items = games.map((game, index) => (
    <Image width={widthheight} height={widthheight} 
            src={game.imageURL}
            alt={game.name}/>  
  ));

  return (
    <Container style={{textAlign: 'center'}}>
      <h2>Other Games we play</h2>
      <Container>
      <Row>
        <Col lg="10" className="mx-auto">
          {items}
        </Col>
      </Row>  
      </Container>       
    </Container>
  )
}
export default GamesWePlay