import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const slideContent = [
    {
      text: "\" internee.pk is the best, most comprehensive 21st-century innovation for those students who are looking for internships and upgrading their skillsets. Their projects are tough but market-valued. \"",
      name: "Rabia Javed",
      location: "Karachi, Pakistan",
    },
    {
      text: "\" internee.pk is all about helping us grow our careers. May ALLAH give them more achivements and success on their journey. \"",
      name: "Nagina Asif",
      location: "Karachi, Pakistan",
    },
    {
      text: "\" Thanks to internee.pk, I grew up my skills here and now i am working as a Flutter Developer in a US company. \"",
      name: "Razaullah Sami",
      location: "KPK, Pakistan",
    },
    {
      text: "\" I find internee.pk to be an outstanding tool forgetting hands on experience. Sometimes you have to spend a little to make a lot to develop projects. \"",
      name: "Kashan Soomro",
      location: "Multan, Pakistan",
    },
    {
      text: " \"Amazing! internee.pk is a gamechanger! The way thier team is working is so crazy. Thank you for giving me this opportunity. \"",
      name: "Naila Rozi",
      location: "Lahore, Pakistan",
    },
    {
      text: " \" After getting this internship, my skill got enhance more than my expectation. JazakALLAH for this. \"",
      name: "Muhammad Rafiq",
      location: "Sindh Division, Pakistan",
    },
    {
      text: " \" I would like to say, I think you have a great product and I’m excited that I found it! \"",
      name: "Ayesha Laghari",
      location: "Islamabad, Pakistan",
    },
    {
      text: " \" Been using internee.pk for internship is amazing experience. I do some other virtual internship as well but thier task portal and presentation is amazing \"",
      name: "Sidra",
      location: "Bahawalnagar, Pakistan",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slideContent.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="testimonials">
      <div className="head">
        <h1>
          What Students are saying <br />
          about internee.pk
        </h1>
        <div className="arrows">
          <svg
            onClick={prevSlide}
            className={`arrow prev ${currentSlide === 0 ? 'disabled' : ''}`}
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="27" stroke="#B7BDC3" strokeWidth="2" />
            <path
              d="M32.5467 34.1067L26.44 28L32.5467 21.88L30.6667 20L22.6667 28L30.6667 36L32.5467 34.1067Z"
              fill="#90969D"
            />
          </svg>
          <svg
            onClick={nextSlide}
            className={`arrow next ${currentSlide === slideContent.length - 1 ? 'disabled' : ''}`}
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="27" stroke="#B7BDC3" strokeWidth="2" />
            <path
              d="M23.4533 34.1067L29.56 28L23.4533 21.88L25.3333 20L33.3333 28L25.3333 36L23.4533 34.1067Z"
              fill="#90969D"
            />
          </svg>
        </div>
      </div>
      <div className="slidebar" style={{ transform: `translateX(-${currentSlide * 40}%)` }}>
        {slideContent.map((content, index) => (
          <div className="slide" data-aos = "fade-up" key={index}>
            <p>{content.text}</p>
            <div>
              <div className="name">{content.name}</div>
              <div className="location">{content.location}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="foot">
        <div className="first">
          <div className="icon" data-aos = "fade-up">
          <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 17.3333C30 26.5833 23.6 35.2333 15 37.3333C6.4 35.2333 0 26.5833 0 17.3333V7.33333L15 0.66666L30 7.33333V17.3333ZM15 34C21.25 32.3333 26.6667 24.9 26.6667 17.7V9.49999L15 4.29999L3.33333 9.49999V17.7C3.33333 24.9 8.75 32.3333 15 34ZM11.6667 27.3333L5 20.6667L7.35 18.3167L11.6667 22.6167L22.65 11.6333L25 14" fill="#43a724"/>
</svg>
          </div>
<div className="content">
  <h1>Safe and Secure</h1>
  <ul>
    <li>Powered by Microsoft Azure cloud technology.</li>
    <li>Encrypted at rest and in transit.</li>
    <li>Data resides in US-based data centers.</li>
  </ul>
</div>
        </div>
        <div className="second">
          <div className="icon" data-aos = "fade-up"><svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6667 25.6667C20.6667 25.1 20.7334 24.55 20.8167 24H4.00002V14H30.6667V15.6667C31.8334 15.6667 32.95 15.8833 34 16.25V3.99999C34 2.14999 32.5167 0.66666 30.6667 0.66666H4.00002C2.15002 0.66666 0.666687 2.14999 0.666687 3.99999V24C0.666687 25.8333 2.15002 27.3333 4.00002 27.3333H20.8167C20.7334 26.7833 20.6667 26.2333 20.6667 25.6667ZM4.00002 3.99999H30.6667V7.33333H4.00002V3.99999ZM28.5834 30.6667L24 25.6667L25.9334 23.7333L28.5834 26.3833L34.5667 20.4L36.5 22.75L28.5834 30.6667Z" fill="#43a724"/>
</svg>
</div>
          <div className="content">
            <h1>Free From Internship To Certification</h1>
            <ul><li>Profile Building & Optimization</li>
            <li>Free Learning Management System</li>
            <li>Hands on Tasks with Certification</li></ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
