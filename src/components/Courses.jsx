import React, { useEffect, useRef } from "react";
import "./Portal.css";
import instructor from ".././assets/img/instructor.png";
import './Courses.css'
const Courses = () => {
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

  return (
    <div className="Portal">
      <div className="instructor-img">
        <img ref={imgRef} src={instructor} alt="" />
      </div>
      <div className="portal-text">
        <h5>Are you Tech Instructor or Content Creator?</h5>
        <h1>Create Courses In Local Language & Generate Income</h1>
        <p>
        Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal  </p>
        <div className="options">
          <div className="option">
            <div className="icon" ref={addIconRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM5 3H19C20.11 3 21 3.89 21 5V13.03C20.5 12.23 19.81 11.54 19 11V5H5V19H9.5C9.81 19.75 10.26 20.42 10.81 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3ZM7 7H17V9H7V7ZM7 11H12.03C11.23 11.5 10.54 12.19 10 13H7V11ZM7 15H9.17C9.06 15.5 9 16 9 16.5V17H7V15Z" fill="#43a724"/>
</svg>

            </div>
            <div className="option-txt">
              <p>
                <b>Upload Tutorials & Excersice</b> Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon" ref={addIconRef}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14V22H3V14H11ZM9 16H5V20H9V16ZM12 2.5L17.5 11.5H6.5L12 2.5ZM12 6.36L10.08 9.5H13.92L12 6.36ZM17.5 13.5C20 13.5 22 15.5 22 18C22 20.5 20 22.5 17.5 22.5C15 22.5 13 20.5 13 18C13 15.5 15 13.5 17.5 13.5ZM17.5 15.5C16.837 15.5 16.2011 15.7634 15.7322 16.2322C15.2634 16.7011 15 17.337 15 18C15 18.663 15.2634 19.2989 15.7322 19.7678C16.2011 20.2366 16.837 20.5 17.5 20.5C18.163 20.5 18.7989 20.2366 19.2678 19.7678C19.7366 19.2989 20 18.663 20 18C20 17.337 19.7366 16.7011 19.2678 16.2322C18.7989 15.7634 18.163 15.5 17.5 15.5Z" fill="#43a724"/>
</svg>

            </div>
            <div className="option-txt">
              <p>
                <b>Generate Revenue</b> Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon" ref={addIconRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" fill="#43a724"/>
</svg>


            </div>
            <div className="option-txt">
              <p>
                <b>Instructor Identity</b> Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon" ref={addIconRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10H2V12H14V10ZM14 6H2V8H14V6ZM2 16H10V14H2V16ZM21.5 11.5L23 13L16 20L11.5 15.5L13 14L16 17L21.5 11.5Z" fill="#43a724"/>
</svg>


            </div>
            <div className="option-txt">
              <p>
                <b>Perfact Share Ratio</b> We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
