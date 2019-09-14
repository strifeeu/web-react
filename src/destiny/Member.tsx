import React from 'react';
import * as CSS from 'csstype'

import Card from 'react-bootstrap/Card'

const cardTextStyle: CSS.Properties = {
    fontSize: '1rem',
    color: '#fff',
    background: '#000',
    // textShadow: '2px 2px 2px #000',
    position: 'absolute',
    bottom: 0,
    margin: 0
}

export interface MemberHolder {
  id : string
  displayName: string,
  imageURL: string
}

export interface MemberProps {
  member: MemberHolder
}

const Member: React.FC<MemberProps> = (props) => {
    return (
      <Card border="secondary" key={props.member.id} style={{ width: '8rem' }}>
            <Card.Img variant="top" src={props.member.imageURL} />
            <Card.ImgOverlay style={{padding : '0.0rem'}}>
              <Card.Title style={cardTextStyle}>{props.member.displayName}</Card.Title>
              {/* <Card.Footer>{props.member.displayName}</Card.Footer> */}
            </Card.ImgOverlay>
        </Card>
    );
}

export default Member