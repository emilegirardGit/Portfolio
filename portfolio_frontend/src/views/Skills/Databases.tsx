import React from 'react';
import Nav from '../../components/Nav';

const Databases = () => {

    return (
        <div className='skill'>
            <Nav />
            <h1>Databases</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>MySQL</h2>
                    <p></p>
                </div>
                <div className="skill-card">
                    <h2>MongoDB</h2>
                    <p></p>
                </div>
                <div className="skill-card">
                    <h2>PostgreSQL</h2>
                    <p></p>
                </div>
                <div className="skill-card">
                    <h2>SQLite</h2>
                    <p></p>
                </div>
                <div className="skill-card">
                    <h2>Oracle</h2>
                    <p></p>
                </div>
                <div className="skill-card">
                    <h2>Azure</h2>
                    <p></p>
                </div>
                <div className="skill-card">
                    <h2>Firebase</h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Databases;