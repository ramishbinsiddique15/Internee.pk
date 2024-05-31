import React, { useEffect, useRef } from "react";
import "./Portal.css";
import task from ".././assets/img/task.png";

const Portal = () => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
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

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="Portal">
      <div className="portal-img animate">
        <img ref={imgRef} src={task} alt="" />
      </div>
      <div className="portal-text">
        <h5>Our own task portal</h5>
        <h1>Manage Project Via Own Task Portal</h1>
        <p>
          Welcome to internee.pk task portal. Where Tasks Transform Into Skills
        </p>
        <div className="options">
          <div className="option">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H10C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3H22V5H21V16H15.25L17 22H15L13.25 16H10.75L9 22H7L8.75 16H3V5H2V3ZM5 5V14H19V5H5ZM11.85 11.85C11.76 11.94 11.64 12 11.5 12C11.3674 12 11.2402 11.9473 11.1464 11.8536C11.0527 11.7598 11 11.6326 11 11.5V7.5C11 7.36739 11.0527 7.24021 11.1464 7.14645C11.2402 7.05268 11.3674 7 11.5 7C11.64 7 11.76 7.06 11.85 7.15L13.25 8.54C13.57 8.86 13.89 9.18 13.89 9.5C13.89 9.82 13.57 10.14 13.25 10.46L11.85 11.85Z"
                  fill="#43a724"
                />
              </svg>
            </div>
            <div className="option-txt">
              <p>
                <b>Hands on Projects</b> we believe in learning by doing. Dive
                into hands-on projects that simulate real-world scenarios. From
                coding challenges to creative projects, every task is crafted to
                impart practical skills that resonate in professional
                environments.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H10C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3H22V5H21V16H15.25L17 22H15L13.25 16H10.75L9 22H7L8.75 16H3V5H2V3ZM5 5V14H19V5H5ZM11.85 11.85C11.76 11.94 11.64 12 11.5 12C11.3674 12 11.2402 11.9473 11.1464 11.8536C11.0527 11.7598 11 11.6326 11 11.5V7.5C11 7.36739 11.0527 7.24021 11.1464 7.14645C11.2402 7.05268 11.3674 7 11.5 7C11.64 7 11.76 7.06 11.85 7.15L13.25 8.54C13.57 8.86 13.89 9.18 13.89 9.5C13.89 9.82 13.57 10.14 13.25 10.46L11.85 11.85Z"
                  fill="#43a724"
                />
              </svg>
            </div>
            <div className="option-txt">
              <p>
                <b>Hands on Projects</b> we believe in learning by doing. Dive
                into hands-on projects that simulate real-world scenarios. From
                coding challenges to creative projects, every task is crafted to
                impart practical skills that resonate in professional
                environments.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H10C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3H22V5H21V16H15.25L17 22H15L13.25 16H10.75L9 22H7L8.75 16H3V5H2V3ZM5 5V14H19V5H5ZM11.85 11.85C11.76 11.94 11.64 12 11.5 12C11.3674 12 11.2402 11.9473 11.1464 11.8536C11.0527 11.7598 11 11.6326 11 11.5V7.5C11 7.36739 11.0527 7.24021 11.1464 7.14645C11.2402 7.05268 11.3674 7 11.5 7C11.64 7 11.76 7.06 11.85 7.15L13.25 8.54C13.57 8.86 13.89 9.18 13.89 9.5C13.89 9.82 13.57 10.14 13.25 10.46L11.85 11.85Z"
                  fill="#43a724"
                />
              </svg>
            </div>
            <div className="option-txt">
              <p>
                <b>Hands on Projects</b> we believe in learning by doing. Dive
                into hands-on projects that simulate real-world scenarios. From
                coding challenges to creative projects, every task is crafted to
                impart practical skills that resonate in professional
                environments.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H10C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3H22V5H21V16H15.25L17 22H15L13.25 16H10.75L9 22H7L8.75 16H3V5H2V3ZM5 5V14H19V5H5ZM11.85 11.85C11.76 11.94 11.64 12 11.5 12C11.3674 12 11.2402 11.9473 11.1464 11.8536C11.0527 11.7598 11 11.6326 11 11.5V7.5C11 7.36739 11.0527 7.24021 11.1464 7.14645C11.2402 7.05268 11.3674 7 11.5 7C11.64 7 11.76 7.06 11.85 7.15L13.25 8.54C13.57 8.86 13.89 9.18 13.89 9.5C13.89 9.82 13.57 10.14 13.25 10.46L11.85 11.85Z"
                  fill="#43a724"
                />
              </svg>
            </div>
            <div className="option-txt">
              <p>
                <b>Hands on Projects</b> we believe in learning by doing. Dive
                into hands-on projects that simulate real-world scenarios. From
                coding challenges to creative projects, every task is crafted to
                impart practical skills that resonate in professional
                environments.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portal;