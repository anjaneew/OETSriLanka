import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import Contact from './components/Contact';
import Skills from './components/Skills';
import Packages from "./components/packages/OetPackage";
import Listening from "./components/skills/Listening"; 
import Reading from "./components/skills/Reading";
import Writing from "./components/skills/Writing";
import Speaking from './components/skills/Speaking';
import './App.css';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#062a53ff' : '#083e6bff',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: 'bold',
  padding: "5px 10px"
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>      
        <div className="banner"></div>
              <div className="nav-bar">
                <nav>
                  <NavLink to="/" style={navLinkStyles}>Home</NavLink>{"  "}|{"  "}
                  <NavLink to="/skills" style={navLinkStyles}>Skills</NavLink>{"  "}|{"  "}
                  <NavLink to="/packages" style={navLinkStyles}>Packages</NavLink>{"  "}|{"  "}
                  <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
                </nav>  
              </div>
      </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}>
            <Route path="listening" element={<Listening/>}/>
            <Route path="reading" element={<Reading/>}/>
            <Route path="speaking" element={<Speaking/>}/>
            <Route path="writing" element={<Writing/>}/>
          </Route>
          <Route path="packages" element={<Packages/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;