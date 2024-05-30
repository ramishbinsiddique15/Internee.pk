import React from 'react'
import logo from '.././assets/img/fav.png'
import './About.css'
const About = () => {
  return (
    <div className="about">
        <div className="image">
        <img width={80} src={logo} />
        </div>
        <h1>Who is Internee.pk?</h1>
        <p>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
        <b>👇 Click Below and grab your internship now 👇</b>
    </div>

  )
}

export default About
