import React from 'react';
import { InstagramLogo, TwitterLogo, FacebookLogo } from "phosphor-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>support@bytebars.com</p>
        <div className="social-icons">
          <a href='https://www.instagram.com/bytebars/?hl=en'><InstagramLogo size={32} color="#ffffff" weight="fill" /></a>
          <a href='https://twitter.com/bytebar'><TwitterLogo size={32} color="#ffffff" weight="fill" /></a>
          <a href='https://www.facebook.com/bytebars/'><FacebookLogo size={32} color="#ffffff" weight="fill" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;


