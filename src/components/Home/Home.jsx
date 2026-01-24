import React, { useRef } from "react";
import "./Home.css";
import man from "../../assets/man.png";
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Home() {
  const container = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        opacity: 0
      }
    });

    tl.from(".line1", { 
      x: -50,
      duration: 0.7,
      ease: "expo.out"
    })
    .from(".line2", { 
      x: -50,
      duration: 0.7,
      ease: "expo.out"
    }, "-=0.4")
    .from(".line3", { 
      x: -50,
      duration: 0.7,
      ease: "expo.out"
    }, "-=0.4");

    tl.fromTo(".homedetails button", 
      { 
        y: 30,
        opacity: 0,
        scale: 0.8
      }, 
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
      }, 
      "-=0.2"
    );

    tl.from(".righthome img", 
      { 
        x: 60,
        scale: 0.85,
        rotation: -3,
        duration: 1,
        ease: "power3.out",
      }, 
      "-=0.4"
    );

  }, { scope: container });

  return (
    <div id="home" ref={container}>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">MUHAMMAD WAHAJ</div>
          <div className="line3">
            <Typewriter
              words={["FRONTEND DEVELOPER", "WEB DESIGNER", "WEB DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          <a href="#contact">
  <button>HIRE ME</button>
</a>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="Muhammad Wahaj" />
      </div>
    </div>
  );
}

export default Home;