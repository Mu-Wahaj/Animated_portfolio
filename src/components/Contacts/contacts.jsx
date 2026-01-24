import React, { useState } from 'react'
import contact from '../../assets/contact.png'
import './contacts.css'
import { FaUser, FaEnvelope, FaCommentAlt, FaLinkedin, FaPaperPlane, FaGithub } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Contacts() {
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    console.log("Contact GSAP Animation Initialized");
    gsap.from(".leftcontact", { 
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftcontact",
        start: "top 85%",
        end: "top 40%",
        scrub: 1
      }
    });
    
    gsap.from(".rightcontact", { 
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightcontact",
        start: "top 85%",
        end: "top 40%",
        scrub: 1
      }
    });
  });
  
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your message...");
    setResultType("sending");
    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);
    formDataObj.append("access_key", "a9feaeb7-e604-46f9-b6cc-563d9d206efc");
    formDataObj.append("subject", "New Portfolio Contact Form Submission");
    formDataObj.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon. 🎉");
        setResultType("success");
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setResult("");
          setResultType("");
        }, 5000);
      } else {
        setResult("Failed to send message. Please try again or email me directly.");
        setResultType("error");
      }
    } catch (error) {
      setResult("Network error. Please check your connection or email me directly.");
      setResultType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const directEmail = "wahaj@example.com";
  const emailSubject = encodeURIComponent("Portfolio Contact");
  const emailBody = encodeURIComponent(`Hello Wahaj,\n\nI saw your portfolio and wanted to connect...\n\nMy name: ${formData.name || ''}\nMy email: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`);
  const directEmailLink = `mailto:${directEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact} alt="Contact illustration" />
      </div>
      
      <div className="rightcontact">
        <div className="contact-wrapper">
          <div className="contact-box">
            <div className="contact-header">
              <div className="contact-title">
                <span>Get In Touch</span>
              </div>
            </div>
            
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <FaUser className="icon" />
                <label htmlFor="name" className="label">
                  Your Name
                </label>
              </div>
              
              <div className="input-box">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <FaEnvelope className="icon" />
                <label htmlFor="email" className="label">
                  Your Email
                </label>
              </div>
              
              <div className="input-box">
                <textarea 
                  id="message"
                  name="message"
                  className="input-field textarea-field"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows="4"
                />
                <FaCommentAlt className="icon" />
                <label htmlFor="message" className="label">
                  Your Message
                </label>
              </div>
              
              <div className="contact-links">
                <div className="social-links">
                  <span>Connect directly:</span>
                  <a 
                    href="https://www.linkedin.com/in/muhammadwahajj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin className="social-icon" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/MU-Wahaj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGithub className="social-icon" />
                    GitHub
                  </a>
                </div>
              </div>
              
              <div className="form-actions">
                <button
                  type="submit"
                  className="input-submit"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane className="submit-icon" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                
              
              </div>
              
              {result && (
                <div className={`result-message ${resultType}`}>
                  {result}
                  {resultType === "error" && (
                    <div className="error-help">
                      <a href={directEmailLink} className="direct-link">
                        Click here to email me directly instead
                      </a>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;