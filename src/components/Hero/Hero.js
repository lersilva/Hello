import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi, call me Leo!<br/>
        and this is my portifolio.
      </SectionTitle>
      <SectionText>
      My purpose is to help humanity with technological evolution and show that life is beyond zeros and ones
      </SectionText>
      <Button onClick={() => window.location='https://www.linkedin.com/in/leonardo-rosa-15433a89/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;