import React from 'react';
import '../css/Nav.css';

const Nav: React.FC = () => {
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
          <li><a href="/settings"><i className="settings-icon">&#9881;</i></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
