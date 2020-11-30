import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter , faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
       <h5>&lt;Nishitjoshi /&gt;</h5>
      </div>
      <div className="icons">
         <ul>
            <li><a className="socialMedia" href="https://github.com/njoshi07"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a className="socialMedia" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a className="socialMedia" href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
         </ul>  
      </div>
    </div>
  );
};

export default Nav;
