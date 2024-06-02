import React, { useEffect, useRef } from "react";
import Aos from "aos";
import Typed from "typed.js";
import "aos/dist/aos.css";
import "./Home.css";
import hero from "../assets/img/hero.webp";
import incubation from "../assets/img/incubation.jpg";
import nep from "../assets/img/nep.png";
import nic from "../assets/img/nic.png";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    Aos.init();
    
    const typed = new Typed(typedElement.current, {
      strings: ["On your desire domain", "Gives hands on experience","Get a compitative job"],
      typeSpeed: 30,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);

  return (
    <div className="home">
      <div className="left">
        <h1>Looking for a dream Internship?</h1>
        <div className="animation">
          <p><span className="element" ref={typedElement}></span></p>
        </div>
        <p className="desc">
          Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
        </p>
        <div className="bottom">
          <div className="imgs">
            <img width={200} src={incubation} alt="Incubation" />
            <img width={70} src={nep} alt="NEP" />
            <img width={100} src={nic} alt="NIC" />
          </div>
          <div className="button">
            <div className="jportal">
              <button>Job Portal</button>
              <p className="des">Coming Soon</p>
            </div>
            <div className="lms">
              <button>Our LMS</button>
              <p className="des">90% Courses are in Urdu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={hero} alt="Hero" data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Home;
