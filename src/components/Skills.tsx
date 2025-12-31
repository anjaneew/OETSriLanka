import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoHeadsetOutline } from "react-icons/io5";
import { AiFillRead } from "react-icons/ai";
import { BiConversation } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import React from "react";

const navLinkStyles = ({ isActive } : {isActive: boolean}): React.CSSProperties => ({
  color: isActive ? 'rgb(20, 32, 51)' :'#031d70ff',
  textDecoration: "none",
  padding: "5px 10px",
  fontSize: "30px",
  textAlign: "center" as const,
});



const navigationLinks =        
        <nav>
          <NavLink to="listening" style={navLinkStyles}>
            <IoHeadsetOutline /> Listening
          </NavLink>{"  "}|{"  "}
          <NavLink to="reading" style={navLinkStyles}>
            <AiFillRead /> Reading
          </NavLink>{"  "}|{"  "}
          <NavLink to="speaking" style={navLinkStyles}>
            <BiConversation /> Speaking
          </NavLink>{"  "}|{"  "}
          <NavLink to="writing"style={navLinkStyles}>
            <FaPen /> Writing
          </NavLink>
        </nav>

const skillsPage =       <div className="skills-intro">
        <h1>OET Language Skills Overview</h1>

        {navigationLinks}
        
        <p>
          The Occupational English Test assesses four essential language skills that healthcare professionals use daily in their work environments. Each sub-test is carefully designed to reflect authentic workplace communication, ensuring that your English proficiency is evaluated in contexts that matter most to your professional practice.
        </p>
        <p>
          Unlike general English tests, OET focuses exclusively on healthcare scenarios. You'll encounter patient consultations, medical histories, treatment plans, clinical handovers, and professional correspondence—all situations you're likely to face in hospitals, clinics, and healthcare settings worldwide. This profession-specific approach makes OET the most relevant English assessment for doctors, nurses, and allied health professionals.
        </p>
        <p>
          Understanding the demands of each skill area is crucial for effective preparation. Our specialized seminars break down the strategies, techniques, and common challenges associated with each sub-test. Whether you need to improve your clinical listening accuracy, enhance your medical reading comprehension, develop confident speaking skills for patient interactions, or master professional medical writing, we provide targeted support to help you succeed.
        </p>
        <p>
          Explore each skill section below to learn more about what the test involves, how it's assessed, and how our courses can help you achieve the scores you need for registration, employment, or visa purposes.
        </p>       </div>


const Skills = () => {

  {/*checking if on the main page to render content */}
  const location = useLocation();
  const isMainPage = location.pathname === '/skills';

  return (
    <div>
      <div className="skills-container">

 
        { isMainPage ?  skillsPage : <>
         {navigationLinks} <Outlet/>
        </>}

        
      </div>
    </div>
  );
};

export default Skills;