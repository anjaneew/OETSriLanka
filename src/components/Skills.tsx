import { NavLink, Outlet } from "react-router-dom";

const navLinkStyles = ({ isActive } : {isActive: boolean}) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive? 'bold' : 'normal',
  padding: "5px 10px"
});

const Skills = () => {
  return (
    <div>
      <div>
        <nav>
          <NavLink to="listening" style={navLinkStyles}>Listening</NavLink>{"  "}|{"  "}
          <NavLink to="reading" style={navLinkStyles}>Reading</NavLink>{"  "}|{"  "}
          <NavLink to="speaking" style={navLinkStyles}>Speaking</NavLink>{"  "}|{"  "}
          <NavLink to="writing"style={navLinkStyles}>Writing</NavLink>
        </nav>  
        <Outlet/>
      </div>
    </div>
  );
};

export default Skills;