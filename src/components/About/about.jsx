import React from 'react'
import Card from '../Card/card'
import mern from '../../assets/mern.png'
import webdev from '../../assets/java.png'
import webdes from '../../assets/dsa.png'
import './about.css'

function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        
        <div className="aboutdetails">
          <div className="personelinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span>: MUHAMMAD WAHAJ
              </li>
              <li>
                <span>AGE</span>: 21
              </li>
              <li>
                <span>LANGUAGES</span>: ENGLISH, URDU
              </li>
            </ul>
          </div>
          
          <div className="personelinfo">
            <h1>Education</h1>
            <ul>
              <li>
                <span>BACHELORS</span>: INFORMATION TECHNOLOGY
              </li>
              <li>
                <span>INSTITUTE</span>: PUNJAB UNIVERSITY COLLEGE OF INFORMATION TECHNOLOGY
              </li>
              <li>
                <span>YEAR</span>: 2024-2028
              </li>
            </ul>
          </div>
          
          <div className="personelinfo">
            <h1>SKILLS</h1>
            <ul>
              <li>WEB DEVELOPMENT</li>
              <li>REACT JS DEVELOPMENT</li>
              <li>RESPONSIVE DESIGN</li>
              <li>UI/UX DESIGN</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="rightabout">
        <Card title="FRONT-END DEVELOPER" image={mern} />
        <Card title="WEB DEVELOPER" image={webdev} />
        <Card title="WEB DESIGNER" image={webdes} />
      </div>
    </div>
  );
}

export default About;