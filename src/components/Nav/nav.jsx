import React, { useRef } from 'react'
import './nav.css'
import{Link} from 'react-scroll'
function Nav() {

  let menu=useRef()
  console.log(menu)
  let mobile=useRef()
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
       <Link to="home"   activeClass='active' spy={true} smooth={true} duration={500}> <li>HOME</li></Link>
         <Link to="about"  activeClass='active' spy={true} smooth={true} duration={500}> <li>ABOUT</li></Link>
         <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}> <li>PROJECTS</li></Link>
         <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}> <li>CONTACT</li></Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={()=>{
mobile.current.classList.toggle('activemobile')
menu.current.classList.toggle('activeham')
        }}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='mobilemenu' ref={mobile}>
       <Link to="home"   activeClass='active' spy={true} smooth={true} duration={500}> <li>HOME</li></Link>
         <Link to="about"  activeClass='active' spy={true} smooth={true} duration={500}> <li>ABOUT</li></Link>
         <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}> <li>PROJECTS</li></Link>
         <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}> <li>CONTACT</li></Link>
        </ul>
    </nav>
  )
}

export default Nav