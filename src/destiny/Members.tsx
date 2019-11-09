import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

import Member, { MemberHolder } from "./Member"

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const DestinyMembers: React.FC = () => {
    const [members, membersUpdate] = useState(new Array<MemberHolder>());

    useEffect(() => {
        Axios.get('https://strife-eu.appspot.com/members').then(function(response) {
          var memberArray = new Array<MemberHolder>();
          response.data.map((member : any, index : number) => (
            memberArray.push({
                id : member.id,
                displayName : member.nickname,
                imageURL : member.avatarURL
              })
          ));
          shuffleArray(memberArray);
          handleMembersUpdate(memberArray);     
        });
      }, []);

      function handleMembersUpdate(members: MemberHolder[]) {
        console.log(members); 
        membersUpdate(members);
    }

    if (!members || !members.length) {
        return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>);
      } else {
        const items = members.map((admin, index) => (
              <Member key={index} member={admin}></Member>      
        ));
        return (
          <Row>
            {items}               
          </Row>
        );
      }
}

export default DestinyMembers