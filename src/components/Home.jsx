import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";
import hero from ".././assets/img/hero.webp";
import incubation from "../assets/img/incubation.jpg";
import nep from "../assets/img/nep.png";
import nic from "../assets/img/nic.png";
const Home = () => {
  const {text} = useTypewriter({
    words: ["On your desired domain", "Gives hands-on experience", "Get a competitive job"],
    loop: true,
  });
  return (
    <div className="home">
      <div className="left">
        <h1>Looking for a dream Internship?</h1>
        <div className="animation">
          <p><span>{text}</span><Cursor /></p>
        </div>
        <p className="desc">Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
        <div className="bottom">
            <div className="imgs">
                <img width={200}  src={incubation} alt="" />
                <img width={70}  src={nep} alt="" />
                <img width={100}  src={nic} alt="" />
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
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Home;

