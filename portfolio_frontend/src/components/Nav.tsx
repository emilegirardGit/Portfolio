import React from 'react';
import '../css/Nav.css';
import { useLanguage } from '../LanguageConfig/LanguageContext';
import { useTranslation } from "react-i18next";
import Flag from 'react-flagkit';

const Nav: React.FC = () => {

  const { changeLanguage, language } = useLanguage();
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
          <li>
              {language === 'fr' 
                ? <div title="Change to english"><Flag country="US" role="button" onClick={() => changeLanguage('en')}/></div> 
                : <div title="Changer en français"><Flag country="FR" role="button" onClick={() => changeLanguage('fr')}/></div>
              }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
