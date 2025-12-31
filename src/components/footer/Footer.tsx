import styles from "./Footer.module.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
          <p className="copyright">© 2025 ~ Anjanee S. Wijewardana ~ All rights reserved.</p>
        <div className="footerbox">

        <span className="footerboxitems">
            <a href="mailto:anjaneew@gmail.com">
                < FaEnvelope />
            </a>
        </span>
        <span className="footerboxitems">
            <a href="https://github.com/anjaneew">
                < FaGithub />
            </a>
        </span>
        <span className="footerboxitems">
            <a href="https://www.linkedin.com/in/anjaneew/">
                < FaLinkedin />
            </a>
        </span>
    </div>
    </div>
    
  );
};

export default Footer;