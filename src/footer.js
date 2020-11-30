import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter , faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="logos">
        <ul className="footerLogoLists">
            <li><a className="footerSocialMedia" href="https://github.com/njoshi07"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a className="footerSocialMedia" href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a className="footerSocialMedia" href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
         </ul>
        </div>
        <div className="copyRights">
          Powered by ReactJS Nishit Joshi &copy; 2020
        </div>
      </section>
    </div>
  );
};

export default Footer;
