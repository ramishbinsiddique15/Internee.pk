import React, { useEffect, useRef } from "react";
import "./Portal.css";
import task from ".././assets/img/task.png";

const Portal = () => {
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
      <div className="portal-img">
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
            <div className="icon" ref={addIconRef}>
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
            <div className="icon" ref={addIconRef}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7V7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86V10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17H9ZM24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H5V15H3V12H0V10H3V7H5V10H8V12Z"
                  fill="#43a724"
                />
              </svg>
            </div>
            <div className="option-txt">
              <p>
                <b>Collaborative Learning</b> teamwork is at the heart of our
                philosophy. Our platform fosters collaborative learning, enabling
                interns to work together on group projects. You'll gain not only
                technical skills but also the ability to thrive in a team
                environment.
              </p>
            </div>
          </div>
          <div className="option">
            <div className="icon" ref={addIconRef}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17H18V10H22V17ZM23 8H17C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9V19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20H23C23.2652 20 23.5196 19.8946 23.7071 19.7071C23.8946 19.5196 24 19.2652 24 19V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8ZM4 6H22V4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V17H0V20H14V17H4V6Z" fill="#43a724"/>
</svg>

            </div>
            <div className="option-txt">
              <p>
                <b>SDLC Techniques</b> Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.
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
                <b>Easy to understand</b> Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
