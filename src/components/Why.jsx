import React, { useEffect, useRef } from "react";
import "./Portal.css";
import job from ".././assets/img/programing.jpg";
import './LMS.css'
import './Why.css'
import Aos from "aos";
import "aos/dist/aos.css";
const Why = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const optionsText = [
    "5500+ Students already registered",
    "Task based projects that based on hands on experience",
    "Massive Courses with high-quality videos on LMS",
    "Empowering youth towards IT revolution & technology",
    "Hands on Experience via Virtual internship",
    "Complete your task and get market competent job",
    "Direct Collaboration with companies for direct hiring"
  ];

  return (
    <div className="Portal Why">
      <div className="portal-text">
        <h1>Why Internee.pk?</h1>
        <p>Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.</p>
        <div className="why-options">
          {optionsText.map((text, index) => (
            <div className="why-option" key={index}>
              <div className="why-icon" >
                <div className="svg" data-aos = "fade-up">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.6754 3.17645H6.46186C4.19376 3.17645 2.3551 5.01511 2.3551 7.28321V13.854C2.3551 16.1221 4.19376 17.9608 6.46186 17.9608H14.6687L14.8468 17.9568C17.0316 17.8617 18.774 16.0622 18.7771 13.8552L18.7797 7.28814L18.7821 7.28154C18.7821 5.013 16.9428 3.17437 14.6754 3.17645ZM14.6761 4.81911L14.8208 4.82316C16.0658 4.89422 17.0631 5.89112 17.1353 7.13671L17.1378 7.28275L17.1344 13.8536C17.1325 15.2138 16.0289 16.3168 14.668 16.318L6.46187 16.318C5.10102 16.318 3.99782 15.2148 3.99782 13.854V7.28316C3.99782 5.92231 5.10102 4.81911 6.46187 4.81911L14.6761 4.81911Z" fill="#43a724"/>
                  <g opacity="0.5">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.70242 7.52377C6.9985 7.22769 7.4644 7.20491 7.78661 7.45544L7.86399 7.52377L8.82626 8.48604C9.75004 9.40982 11.2248 9.44678 12.1927 8.5969L12.311 8.48604L13.2732 7.52377C13.594 7.20301 14.114 7.20301 14.4348 7.52377C14.7309 7.81985 14.7537 8.28575 14.5031 8.60796L14.4348 8.68534L13.4725 9.64761C11.9173 11.2028 9.42516 11.2499 7.81318 9.78899L7.66469 9.64761L6.70242 8.68534C6.38166 8.36458 6.38166 7.84453 6.70242 7.52377Z" fill="#43a724"/>
                  </g>
                </svg>
                </div>
              </div>
              <div className="option-txt">
                <p><b>{text}</b></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="why-img" data-aos = "fade-right">
        <img src={job} />
      </div>
    </div>
  );
};

export default Why;
