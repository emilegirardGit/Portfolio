import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skill.css';

const Javascript = () => {

    return (
        <div className='skill'>
            <Nav />
            <h1>Javascript</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Javascript</h2>
                    <p>I learned the fundamentals of programming using JavaScript, including variables, control structures, functions, and object-oriented concepts. Gained experience with asynchronous programming using callbacks, promises, and async/await. Developed proficiency in manipulating the Document Object Model (DOM) to create dynamic and interactive web pages.</p>
                </div>
                <div className="skill-card">
                    <h2>React</h2>
                    <p>Acquired the ability to build scalable front-end applications using React. Became adept at creating reusable components and managing application state with hooks and context. Learned to optimize performance with techniques like memoization and virtualization. Familiarized with React's ecosystem, including tool like React Router for navigation.</p>
                </div>
                <div className="skill-card">
                    <h2>Express.js</h2>
                    <p>Developed server-side applications using Express.js. Learned to handle HTTP requests, route URLs, and serve static files. Gained experience with middleware. Acquired the ability to interact with databases using postges hosted database and create RESTful APIs.</p>
                </div>
                <div className="skill-card">
                    <h2>Typescript</h2>
                    <p>Learned to write type-safe JavaScript using TypeScript. Acquired the ability to define custom types, interfaces, and enums.</p>
                </div>
            </div>
        </div>
    );

}

export default Javascript;