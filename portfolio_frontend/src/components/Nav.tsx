import React from 'react';
import '../css/Nav.css';
import { useLanguage } from '../LanguageConfig/LanguageContext';
import { useTranslation } from "react-i18next";

const Nav: React.FC = () => {

  const { changeLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="brand-title">
        <span><a className='navbar-name' href='/'>{`</>`} Emile Girard</a></span>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/experiences">Experiences</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
