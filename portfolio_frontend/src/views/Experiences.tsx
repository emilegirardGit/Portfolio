import React from 'react';
import Nav from '../components/Nav';
import '../css/Experiences.css';

const Experiences = () => {
    return (
        <div>
      <Nav />
      <div className="experiences">
        <h1>Experiences</h1>
      <div className="timeline">
        <div className="timeline-item">
          <span className="tag">March 2024 - May 2024</span>
          <h2>Backend Developper Intership at Opal RT Technologies</h2>
          <p>...</p>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Experiences;