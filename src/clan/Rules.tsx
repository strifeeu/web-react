import React from 'react';

import Container from 'react-bootstrap/Container';

const Rules: React.FC = () => <Container style={{marginTop: '1rem'}}>
  <div> 
    <h2>General community rules</h2>
    <p className="lead">These are our general community roles, more and game specific rules can be found in our discord in the #welcome-page</p>
  </div> 
  <ol>
    <li>             
      Be civil and treat each other with respect. Treat others with respect and you will receive the same courtesy.
    </li>
    <li>             
      Whilst banter is fine, we will not tolerate racism, xenophobia, sexism and homophobia. Links back to the first rule, treat each other with respect. Keep it to yourself and out of the server. 
    </li>
    <li>             
      Do not direct message other members with the intent of starting an argument, especially targeting anything included in rule 2.
    </li>
    <li>             
      No advertising other community servers similar to ours. If someone is advertising another server and trying to poach members from Strife into a different server, please message a Mod or defwhish with screenshots of the advert. Poaching members is a serious offense and you may be booted instantly.
    </li>
    <li>             
      If a mod or def tell you to drop a topic or conversation, drop it. They will have said it for a reason, maybe things are touchy or getting too heated. Mods will try to remain neutral on situations. Failure to heed what a mod has said may result in a warning being given
    </li>
  </ol>       
</Container>

export default Rules