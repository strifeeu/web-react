import React from 'react';
import Axios from 'axios';

import Button from 'react-bootstrap/Button'

const DestinyAdmins: React.FC = () => {
    
    Axios.get('https://www.bungie.net/Platform/GroupV2/3398023/AdminsAndFounder/', {
        headers: {
          'X-API-Key': '938d2ce8722247099f4ddfd80e5d2703'
        }
    }).then(function(response) {
            // handle success
            console.log(response);        
        })

    return <div className="p-1">
        <Button variant="primary" className="mr-1">Admins</Button>
    </div>
}

export default DestinyAdmins