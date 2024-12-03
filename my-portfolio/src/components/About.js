
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: auto;
  font-size: 1.2em;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <AboutText>
        Organized and results-oriented software engineer with expertise in full-stack
        development and database management. I deliver impactful software
        solutions and excel in team environments to improve operational
        efficiency and system reliability.
      </AboutText>
    </AboutSection>
  );
}

export default About;
