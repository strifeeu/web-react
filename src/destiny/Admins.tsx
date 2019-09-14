import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Member, { MemberHolder } from './Member';
import Col from 'react-bootstrap/Col';

const DestinyAdmins: React.FC = () => {
    const [admins, adminsUpdate] = useState(new Array<MemberHolder>());

    useEffect(() => {
        Axios.get('https://www.bungie.net/Platform/GroupV2/3398023/AdminsAndFounder/', {
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
          handleAdminsUpdate(memberArray);     
        });
      }, []);

      function handleAdminsUpdate(admins: MemberHolder[]) {
        console.log(admins); 
        adminsUpdate(admins);
    }

    if (!admins || !admins.length) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>);
      } else {
        const items = admins.map((admin, index) => (
          <Col style={{marginBottom : '2rem'}} xs={6} sm={4}  md={3} lg={2}>
              <Member key={index} member={admin}></Member>  
          </Col> 
        ));  
        return (
          <div>
            <Row>
                {items}
            </Row>  
          </div>
        );
      }
}

export default DestinyAdmins