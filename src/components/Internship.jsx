import React, { useState } from "react";
import "./Internship.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import frontEnd from ".././assets/img/FrontEnd.webp";
import cloud from ".././assets/img/cloud.webp";
import logoDesigner from ".././assets/img/logo-designer.webp";
import backend from ".././assets/img/Backend.webp";
import videoEditing from ".././assets/img/videoEditing.webp";
import mobileApp from ".././assets/img/Mobile App.webp";
import chatbot from ".././assets/img/chatbot.webp";
import digitalMarketing from ".././assets/img/marketing-assistant.webp";
import hack from ".././assets/img/hack.webp";
import technical from ".././assets/img/technical.webp";
const Internship = () => {
  const [fill1, setFill1] = useState("white");
  const [fill2, setFill2] = useState("transparent");
  const [fill3, setFill3] = useState("transparent");

  const toggleFill1 = () => {
    setFill1("white");
    if (fill1 === "transparent") {
      setFill2("transparent");
      setFill3("transparent");
    }
  };

  const toggleFill2 = () => {
    setFill2("white");
    if (fill2 === "transparent") {
      setFill1("transparent");
      setFill3("transparent");
    }
  };

  const toggleFill3 = () => {
    setFill3("white");
    if (fill3 === "transparent") {
      setFill1("transparent");
      setFill2("transparent");
    }
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="internship">
      <div className="container">
        <div className="top">
          <div
            className="headings"
            style={{ display: fill1 === "white" ? "flex" : "none" }}
          >
            <h1>Get Internship In Your Favourite Domain 🙌. Almost 30+ </h1>
            <h1>
              Internships Are Open, Go & Grab Your Seats Now and secure your
              future👨🏼‍💻
            </h1>
          </div>
          <div className="cards">
            <div
              className="circle1"
              style={{ display: fill1 === "transparent" ? "none" : "flex" }}
            >
              <div className="card">
                <img src={frontEnd} />
                <h1>Frontend Internship</h1>
                <p>
                  Choosing Internee.pk means more than just learning to code.
                  It's about career advancement and propelling your journey
                  towards becoming a proficient frontend developer. We believe
                  in sculpting future tech leaders, and with us, you become part
                  of a vibrant community committed to excellence.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={cloud} />
                <h1>Cloud Computing internship</h1>
                <p>
                  Internee.pk for your Cloud Computing journey? We offer a
                  comprehensive curriculum crafted by industry experts, ensuring
                  you grasp the intricacies of cloud platforms and services.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={logoDesigner} />
                <h1>Graphic Designing Internship</h1>
                <p>
                  What sets our Graphic Designing internship apart? It's the
                  perfect blend of theory and hands-on practice. You'll not only
                  grasp the principles of design but also dive into real-world
                  projects that challenge and enhance your creative skills.
                </p>
                <button>Apply Now</button>
              </div>
            </div>
            <div
              className="circle2"
              style={{ display: fill2 === "white" ? "flex" : "none" }}
            >
              <div className="card">
                <img src={backend} />
                <h1>Backend Internship</h1>
                <p>
                  Backend internship? It's not just about learning; it's about
                  crafting scalable solutions that power the digital landscape.
                  Throughout the internship, you'll engage in hands-on projects,
                  tackling real-world challenges alongside seasoned developers
                  who are passionate about mentoring the next generation.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={videoEditing} />
                <h1>Video Editing Internship</h1>
                <p>
                  It's not just about splicing clips; it's about understanding
                  the nuances of pacing, rhythm, and visual aesthetics.
                  Throughout the internship, you'll work on diverse projects,
                  refining your skills under the guidance of experienced
                  professionals passionate about visual storytelling.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={mobileApp} />
                <h1> Mobile App Internship</h1>
                <p>
                  Our internship goes beyond coding; it's about understanding
                  user behavior, mastering UI/UX principles, and creating apps
                  that leave a lasting impression. Whether you're a seasoned
                  coder or a budding developer, our program is tailored to
                  nurture your skills and broaden your understanding of app
                  architecture.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={chatbot} />
                <h1>Chatbot Development Internship</h1>
                <p>
                  Our program is designed for enthusiasts eager to explore
                  natural language processing, machine learning, and the art of
                  crafting intelligent conversational agents. From understanding
                  user intents to deploying chatbots in real-world scenarios,
                  you'll gain hands-on experience with cutting-edge
                  technologies.
                </p>
                <button>Apply Now</button>
              </div>
            </div>
            <div
              className="circle3"
              style={{ display: fill3 === "white" ? "flex" : "none" }}
            >
              <div className="card">
                <img src={digitalMarketing} />
                <h1>Digital Marketing Internship</h1>
                <p>
                  Internee.pk offers a comprehensive Digital Marketing
                  internship that goes beyond textbooks. Gain practical
                  experience in social media management, content creation, SEO
                  optimization, and analytics. Work on real projects, refine
                  your skills, and make a tangible impact.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={hack} />
                <h1>Cyber Security Internship</h1>
                <p>
                  We believe in nurturing talent that can tackle evolving cyber
                  threats. Our interns don't just learn; they engage with
                  cutting-edge technologies, analyze vulnerabilities, and
                  develop robust security strategies.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={backend} />
                <h1>Backend Internship</h1>
                <p>
                  Backend internship? It's not just about learning; it's about
                  crafting scalable solutions that power the digital landscape.
                  Throughout the internship, you'll engage in hands-on projects,
                  tackling real-world challenges alongside seasoned developers
                  who are passionate about mentoring the next generation.
                </p>
                <button>Apply Now</button>
              </div>
              <div className="card">
                <img src={technical} />
                <h1>Technical Writing Internship</h1>
                <p>
                  We understand the importance of effective communication in the
                  tech world. Our Technical Writing Internship offers a unique
                  blend of hands-on experience in translating technical jargon
                  into clear, concise, and engaging content.
                </p>
                <button>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="circles">
            <svg
              onClick={toggleFill1}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="white"
                strokeWidth="1"
                fill={fill1}
              />
            </svg>
            <svg
              onClick={toggleFill2}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="white"
                strokeWidth="1"
                fill={fill2}
              />
            </svg>
            <svg
              onClick={toggleFill3}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="white"
                strokeWidth="1"
                fill={fill3}
              />
            </svg>
          </div>
          <div className="learn">
            <p>
              Learn skills,{" "}
              <span>
                <b>Market will be yours.</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
