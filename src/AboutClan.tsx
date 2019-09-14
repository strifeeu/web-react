import React from 'react';

import About from './clan/About';
import History from './clan/History';
import UsInDestiny from './destiny/UsInDestiny';


const AboutClan: React.FC = () => {
  return (
    <div>
        <section id="about">
          <About/>
          <History/>
          <UsInDestiny/>
        </section>
      </div>
  );
}

export default AboutClan;
