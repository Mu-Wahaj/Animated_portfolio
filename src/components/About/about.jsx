import React from 'react'
import Card from '../Card/Card'
import mern from '../../assets/st.png'
import webdev from '../../assets/lang.png'
import webdes from '../../assets/ds.png'
import './about.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function About() {
  gsap.registerPlugin(ScrollTrigger);
useGSAP(() => {

  gsap.from(".circle", { 
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 1,
    scrollTrigger: {
      trigger: ".circle",
      start: "body",
      scrub: 2,
      start: "top 60%",
      end: "top 30%"

    }
  });
  gsap.from(".line", { 
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 1,
    scrollTrigger: {
      trigger: ".line",
      start: "body",
      scrub: 2,
      start: "top 60%",
      end: "top 30%"

    }
  });
  gsap.from(".aboutdetails h1", { 
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 1,
    scrollTrigger: {
      trigger: ".aboutdetails h1",
      start: "body",
      scrub: 2,
      start: "top 60%",
      end: "top 30%"

    }
  });
  gsap.from(".aboutdetails li", { 
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 1,
    scrollTrigger: {
      trigger: ".aboutdetails li",
      start: "body",
      scrub: 2,
      start: "top 60%",
      end: "top 30%"

    }
  });
  gsap.from(".rightabout ", { 
    x: 100,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 1,
    scrollTrigger: {
      trigger: ".rightabout",
      start: "body",
      scrub: 2,
      start: "top 60%",
      end: "top 30%"

    }
  });
})
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
              <li>UI/UX DESIGN</li>
              <li>WEB ANIMATIONS</li>
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