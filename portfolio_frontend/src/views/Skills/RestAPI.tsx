import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skill.css';

const RestAPI = () => {
    return (
        <div className='skill'>
            <Nav />
            <h1>REST API</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>REST API</h2>
                    <p>Gained proficiency in designing and integrating RESTful APIs, understanding the principles of REST and the methods of communication between client and server. Learned to structure URLs, use the correct HTTP verbs, and status codes to create intuitive and efficient API endpoints. Became skilled in implementing CRUD operations through API calls and handling data in formats such as JSON.</p>
                </div>
                <div className="skill-card">
                    <h2>Spring Boot</h2>
                    <p>Mastered the development of microservices and web applications using Spring Boot, taking advantage of its auto-configuration and standalone approach to streamline project setup and configuration. Learned about creating fully operational, production-grade applications using Spring Boot's embedded Tomcat. Deepened understanding of Spring ecosystem components like Spring Security, Spring Data JPA, and the actuator for monitoring and management.</p>
                </div>
                <div className="skill-card">
                    <h2>Postman</h2>
                    <p>Acquired extensive experience in using Postman for API testing and development workflows. Learned to create and manage collections of API requests, write pre-request scripts and tests, and use environment variables to easily switch between different stages of development. Became adept at interpreting API responses, debugging, and documenting APIs effectively within Postman.</p>
                </div>
            </div>
        </div>
    );
}

export default RestAPI;
