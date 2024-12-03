
import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const SkillsList = styled.ul`
  columns: 2;
  list-style-type: square;
  margin-left: 20px;

  @media (max-width: 768px) {
    columns: 1;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsList>
        <li>Angular</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>C/C++/C#</li>
        <li>Java</li>
        <li>Cloud Computing (AWS)</li>
      </SkillsList>
    </SkillsSection>
  );
}

export default Skills;
