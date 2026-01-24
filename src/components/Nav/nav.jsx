import React, { useRef, useEffect } from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Nav() {
  let menu = useRef()
  let mobile = useRef()

  useGSAP(() => {
    gsap.from("nav h1", {
      y: -100,
      duration: 0.8,
      opacity: 0,
      ease: "power3.out"
    })
    
    gsap.from("nav ul li", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    })
  })

  const toggleMenu = () => {
    const mobileMenu = mobile.current
    const hamburger = menu.current
    
    mobileMenu.classList.toggle('activemobile')
    hamburger.classList.toggle('activeham')
    
    if (mobileMenu.classList.contains('activemobile')) {
      document.body.classList.add('menu-open')
      gsap.fromTo(mobileMenu.querySelectorAll('li'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      )
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  const closeMenu = () => {
    const mobileMenu = mobile.current
    const hamburger = menu.current
    
    mobileMenu.classList.remove('activemobile')
    hamburger.classList.remove('activeham')
    document.body.classList.remove('menu-open')
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav>
      <h1>PORTFOLIO</h1>
      
      <ul className='desktopmenu'>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}>
          <li>HOME</li>
        </Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}>
          <li>ABOUT</li>
        </Link>
        <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}>
          <li>PROJECTS</li>
        </Link>
        <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}>
          <li>CONTACT</li>
        </Link>
      </ul>
      
      <div 
        className="hamburger" 
        ref={menu} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      
      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} onClick={closeMenu}>
          <li>HOME</li>
        </Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} onClick={closeMenu}>
          <li>ABOUT</li>
        </Link>
        <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500} onClick={closeMenu}>
          <li>PROJECTS</li>
        </Link>
        <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500} onClick={closeMenu}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav