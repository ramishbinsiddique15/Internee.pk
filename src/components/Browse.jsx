import React from 'react'
import backend from ".././assets/img/Backend.webp";
import mobileApp from ".././assets/img/Mobile App.webp";
import logoDesigner from ".././assets/img/logo-designer.webp";
import chatbot from ".././assets/img/chatbot.webp";
import analysis from ".././assets/img/analysis.webp";
import figma from ".././assets/img/figma.png"
import './Browse.css'
const Browse = () => {
  return (
    <div className='browse'>
      <div className="up">
        <div className="txt">
            <p>
      <b>Internships every months</b> Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
      </p>
      </div>
      <div>
        <button>
            Browse Internship
        </button>
      </div>
      </div>
      <div className="down">
        <div className="intern">
            <img src={backend} alt="" />
            <div className="text">
            <h1>Backend Development</h1>
            <hr />
            <button>Apply Now</button>
            </div>
            
        </div>
        <div className="intern">
            <img src={mobileApp} alt="" />
            <div className="text">
            <h1>App Development Internship</h1>
            <hr />
            <button>Apply Now</button>
            </div>
            
        </div>
        <div className="intern">
            <img src={logoDesigner} alt="" />
            <div className="text">
            <h1>Graphic Design</h1>
            <hr />
            <button>Apply Now</button>
            </div>
            
        </div>
        <div className="intern">
            <img src={chatbot} alt="" />
            <div className="text">
            <h1>Chatbot Development</h1>
            <hr />
            <button>Apply Now</button>
            </div>
            
        </div>
        <div className="intern">
            <img src={analysis} alt="" />
            <div className="text">
            <h1>Data Analytics</h1>
            <hr />
            <button>Apply Now</button>
            </div>
            
        </div>
        <div className="intern">
            <img src={figma} alt="" />
            <div className="text">
            <h1>Figma Internship</h1>
            <hr />
            <button>Apply Now</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Browse
