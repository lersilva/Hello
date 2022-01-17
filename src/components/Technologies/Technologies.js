import React from 'react';
import { DiAws, DiFirebase, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiAws size="3rem"/>
        <ListContainer>
          <ListTitle>Architecture</ListTitle>
          <ListParagraph>
            Enterprise architecture on AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            C#, Java, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Angular, React
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
    </List>
  </Section>
);

export default Technologies;
