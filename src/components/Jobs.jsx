import React, { useEffect, useRef } from "react";
import "./Portal.css";
import job from ".././assets/img/job.png";
import './LMS.css'
import Aos from "aos";
import "aos/dist/aos.css";
const Jobs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const options = [

    {
      iconPath: "M22 17H18V10H22V17ZM23 8H17C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9V19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20H23C23.2652 20 23.5196 19.8946 23.7071 19.7071C23.8946 19.5196 24 19.2652 24 19V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8ZM4 6H22V4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V17H0V20H14V17H4V6Z",
      title: "100% Mobile friendly",
      description: "online art approvals"
    },
    {
      iconPath: "M20 16V10H22V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H8C6.89 18 6 17.1 6 16V4C6 2.89 6.89 2 8 2H16V4H8V16H20ZM10.91 7.08L14 10.17L20.59 3.58L22 5L14 13L9.5 8.5L10.91 7.08ZM16 20V22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V7H4V20H16Z",
      title: "Speed up the design process",
      description: "Everything is done online, from mockup to final design."
    },
    {
      iconPath: "M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7V7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86V10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17H9ZM24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H5V15H3V12H0V10H3V7H5V10H8V12Z",
      title: "Communicate easier",
      description: "Add multiple recipients to an Art Approval to reduce traditional email clutter."
    },
    {
      iconPath: "M4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13H4ZM8.2 14.5L9.26 15.55L5.27 19.5L2.74 16.95L3.81 15.9L5.28 17.39L8.2 14.5ZM4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3H4ZM4 5H8V9H4V5ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z",
      title: "Add changes faster",
      description: "Students can add comments to approvals for changes, saving you both time on finalizing designs."
    }
  ];
  return (
    <div className="Portal">
      
      <div className="portal-text">
        <h5>Already have a good skill but looking for job?</h5>
        <h1>Job Portal, Ultimate Place To Find The Best Job</h1>
        <p>
        Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.</p>
        <div className="options">
          {options.map((option, index) => (
            <div className="option" key={index}>
              <div className="icon" data-aos="fade-up">
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
      <div className="lms-img " data-aos = "fade-right">
        <img src={job} alt="" />
      </div>
    </div>
  );
};

export default Jobs;
