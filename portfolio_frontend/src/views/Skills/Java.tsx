import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skill.css';

const Java = () => {

    return (
        <div className='skill'>
            <Nav />
            <h1>Java</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Java</h2>
                    <p>Gained a solid understanding of Java fundamentals, including syntax, operators, data types, and flow control. Mastered core concepts like object-oriented programming, encapsulation, inheritance, and polymorphism. Learned to develop robust console and GUI applications, and became proficient in handling exceptions and debugging to ensure reliable software.</p>
                </div>
                <div className="skill-card">
                    <h2>JavaFX</h2>
                    <p>Developed a deep understanding of JavaFX as a platform for creating rich internet applications with a modern user interface. Learned to use FXML to define user interfaces and controllers to handle application logic. Became skilled at employing JavaFX's animation and media APIs to enhance the user experience. Built several desktop applications with sophisticated UI components and layouts.</p>
                </div>
            </div>
        </div>
    );
}

export default Java;