import React, { useEffect, useRef } from "react";
import "./Portal.css";
import lms from ".././assets/img/lms.png";
import './LMS.css'
const LMS = () => {
  const imgRef = useRef();
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    iconRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
      iconRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const addIconRef = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  const options = [
    {
      iconPath: "M19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10H6.71C7.37 7.69 9.5 6 12 6C15.04 6 17.5 8.46 17.5 11.5V12H19C20.66 12 22 13.34 22 15C22 16.66 20.66 18 19 18ZM19.35 10.03C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.03C2.34 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.03ZM10 17L6.5 13.5L7.91 12.08L10 14.17L14.59 9.59L16 11",
      title: "Sell Courses and Earn",
      description: "Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise."
    },
    {
      iconPath: "M15.5 14L20.5 19L19 20.5L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14H15.5ZM9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14ZM12 10H10V12H9V10H7V9H9V7H10V9H12V10Z",
      title: "Certification",
      description: "Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape."
    },
    {
      iconPath: "M11 9H13V7H11V9ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2ZM11 17H13V11H11V17Z",
      title: "Courses in Urdu",
      description: "Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home."
    },
    {
      iconPath: "M22.5625 4.01453C23.0929 4.01453 23.6016 4.22524 23.9767 4.60031C24.3518 4.97539 24.5625 5.48409 24.5625 6.01453V16.0145C24.5625 16.545 24.3518 17.0537 23.9767 17.4287C23.6016 17.8038 23.0929 18.0145 22.5625 18.0145H6.5625C6.03207 18.0145 5.52336 17.8038 5.14829 17.4287C4.77321 17.0537 4.5625 16.545 4.5625 16.0145V4.01453C4.5625 3.48409 4.77321 2.97539 5.14829 2.60031C5.52336 2.22524 6.03207 2.01453 6.5625 2.01453H12.5625L14.5625 4.01453H22.5625ZM2.5625 6.01453V20.0145H20.5625V22.0145H2.5625C2.03207 22.0145 1.52336 21.8038 1.14829 21.4287C0.773214 21.0537 0.5625 20.545 0.5625 20.0145V11.0145V6.01453H2.5625ZM6.5625 6.01453V16.0145H22.5625V6.01453H6.5625Z",
      title: "Practice Exercises",
      description: "Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence"
    }
  ];
  return (
    <div className="Portal">
      
      <div className="portal-text">
        <h5>Our LMS</h5>
        <h1>Guided Tutorials in Learning Management System</h1>
        <p>
        Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you.   </p>
        <div className="options">
          {options.map((option, index) => (
            <div className="option" key={index}>
              <div className="icon" ref={addIconRef}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={option.iconPath} fill="#43a724" />
                </svg>
              </div>
              <div className="option-txt">
                <p>
                  <b>{option.title}</b> {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lms-img ">
        <img ref={imgRef} src={lms} alt="" />
      </div>
    </div>
  );
};

export default LMS;
