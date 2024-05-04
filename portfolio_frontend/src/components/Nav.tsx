import React from 'react';
import '../css/Nav.css';
import { useLanguage } from '../LanguageConfig/LanguageContext';
import { useTranslation } from "react-i18next";

const Nav: React.FC = () => {

  const { changeLanguage } = useLanguage();
  const { t } = useTranslation('home');

  return (
    <nav className="navbar">
      <div className="brand-title">
        <span><a className='navbar-name' href='/'>{`</>`} Emile Girard</a></span>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="/skills">{t('skill')}</a></li>
          <li><a href="/projects">{t('project')}</a></li>
          <li><a href="/experiences">{t('experience')}</a></li>
          <li><a href="/education">{t('education')}</a></li>
          <li><a href="/resume">{t('resume')}</a></li>
          <li><button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
