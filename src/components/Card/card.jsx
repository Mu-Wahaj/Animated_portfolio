import React from 'react'
import './card.css'

function Card({ title, image }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <div className="hovercard">
          <img 
            src={image} 
            alt={title}
            className="card-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default Card