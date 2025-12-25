import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./components/Home.tsx";
import Contact from './components/Contact.tsx';
import Skills from './components/Skills.tsx';
import Packages from "./components/packages/OetPackage.tsx";
import Listening from "./components/skills/Listening.tsx"; 
import Reading from "./components/skills/Reading.tsx";
import Writing from "./components/skills/Writing.tsx";
import Speaking from './components/skills/Speaking.tsx';
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
      <div className="nav-bar">
        <h1>OET Sri Lanka</h1>
              <div >
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