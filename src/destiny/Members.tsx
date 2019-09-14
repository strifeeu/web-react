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
        Axios.get('https://www.bungie.net/Platform/GroupV2/3398023/Members/', {
            headers: {
            'X-API-Key': '938d2ce8722247099f4ddfd80e5d2703'
            }
        }).then(function(response) {
          var memberArray = new Array<MemberHolder>();
          response.data.Response.results.map((member : any, index : number) => (
            memberArray.push({
                id : member.bungieNetUserInfo.membershipId,
                displayName : member.destinyUserInfo.displayName,
                imageURL : 'https://www.bungie.net' + member.bungieNetUserInfo.iconPath
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