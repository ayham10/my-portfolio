
import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const Job = styled.div`
  margin-bottom: 40px;

  h3 {
    color: #64ffda;
    margin-bottom: 5px;
  }

  p {
    color: #8892b0;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h2>Work Experience</h2>

      <Job>
        <h3>Poriya Hospital</h3>
        <p>
          <strong>Software Developer</strong> | <em>Jan 2024 - Present</em>
        </p>
        <ul>
          <li>Designed and developed software applications, increasing process efficiency by 30%.</li>
          <li>Conducted over 50 comprehensive tests to ensure application quality and reliability.</li>
          <li>Delivered solutions supporting 100+ hospital staff in streamlining daily workflows.</li>
        </ul>
      </Job>

      <Job>
        <h3>Femi Premium</h3>
        <p>
          <strong>SQL-Technician Engineer</strong> | <em>Jul 2021 - May 2022</em>
        </p>
        <ul>
          <li>Provided SQL database support for COVID-19 testing projects serving over 10,000 daily travelers.</li>
          <li>Reduced database errors by 20% through optimized SQL queries.</li>
          <li>Collaborated with laboratory teams, cutting processing times by 15%.</li>
        </ul>
      </Job>
    </ExperienceSection>
  );
}

export default Experience;
