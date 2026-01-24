import React, { useRef } from 'react';
import Card from '../Card/Card';
import './Projects.css';
import project1 from '../../assets/va.png';
import project2 from '../../assets/fw.png';
import project3 from '../../assets/cb.png';
import project4 from '../../assets/tti.png';
import project5 from '../../assets/br.png';
import project6 from '../../assets/ise.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const scrollContainerRef = useRef(null);
  const projectsRowRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  useGSAP(() => {
    gsap.from("#para", {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#para",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    });

    const projectsRow = projectsRowRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    if (!projectsRow || !scrollContainer) return;

    const cardWidth = 350;
    const gap = 40;
    const totalCards = 6;
    const totalScrollWidth = (cardWidth + gap) * totalCards;
    const containerWidth = scrollContainer.offsetWidth;
    const maxScroll = totalScrollWidth - containerWidth;

    gsap.to(projectsRow, {
      x: -maxScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${maxScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        
      }
    });

  }, { scope: container });

  const projectsData = [
    {
      id: 1,
      title: "Virtual Assistant",
      image: project1,
      description: "AI-powered virtual assistant with natural language processing",
      tech: ["Python", "TensorFlow", "React"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "AI Fitness Website",
      image: project2,
      description: "Personalized fitness recommendations using ML",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "AI Chatbot",
      image: project3,
      description: "Intelligent chatbot with contextual understanding",
      tech: ["Python", "OpenAI", "FastAPI"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "AI Text to Image",
      image: project4,
      description: "Generate images from text using AI models",
      tech: ["React", "Stable Diffusion", "Flask"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "AI Background Remover",
      image: project5,
      description: "Automated background removal using computer vision",
      tech: ["Python", "OpenCV", "React"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Image Search Engine",
      image: project6,
      description: "Reverse image search with visual similarity matching",
      tech: ["Python", "Elasticsearch", "React"],
      github: "#",
      live: "#"
    }
  ];

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="projects" ref={container}>
      <h1 id="para">2+ Years Experience</h1>
      
      <div className="projects-container">
        <div 
          className="scroll-container"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="projects-row" ref={projectsRowRef}>
            {projectsData.map((project) => (
              <div key={project.id} className="project-card-wrapper">
                <Card 
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  tech={project.tech}
                  github={project.github}
                  live={project.live}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;