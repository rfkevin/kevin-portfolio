import React from 'react'
import CV from '../../assets/otherFile/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download = "RK" className="btn"> Download CV</a>
      <a href="#contact" className="btn btn-primary">Talk</a>
    </div>
  )
}

export default CTA
