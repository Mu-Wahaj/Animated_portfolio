import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
 <div id="home">
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
    <button>HIRE ME</button>
  </div>
</div>
<div className="righthome">
  <img src={man} alt="#" />
</div>
    
 </div>
  )
}

export default Home