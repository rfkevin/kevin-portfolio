import React from 'react'
import "./header.css"
import CTA from './Cta';
import ME from '../../assets/Me.jpg'
import Social from './Social';
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm </h5>
        <h1> Rakotoarsion Kevin </h1>
        <h5 className="text-light">
            Developer
        </h5>
        <CTA/>
        <Social/>
        <div className="me">
          <img src={ME} alt="me" className='me_img'/>
        </div>
        <a href="#contact" className='scroll'>Scroll</a>
      </div>
    </header>
  )
}

export default Header
