
import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'; 

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const Project = styled.div`
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

  .project-links {
    margin-top: 10px;
  }

  .project-link {
    color: #64ffda;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-right: 15px;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>

      <Project>
        <h3>Recycling App</h3>
        <p>
          <em>2022 - 2023</em>
        </p>
        <ul>
          <li>Second place in Ramat Gan Municipality's Innovation Exchange hackathon.</li>
          <li>Used React, NodeJS, MongoDB, and IoT integrations.</li>
        </ul>
      </Project>

      <Project>
        <h3>Parking Web-app</h3>
        <p>
          <em>2022</em>
        </p>
        <ul>
          <li>Developed using React and Node.js for seamless functionality.</li>
        </ul>
      </Project>
    </ProjectsSection>
  );
}

export default Projects;
