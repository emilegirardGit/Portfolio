import React from 'react';
import Nav from '../components/Nav';
import { FaReact } from "react-icons/fa";
import ProjectCard from '../components/ProjectCard';
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io5";
import { SiMongodb, SiCsharp } from "react-icons/si";
import { FaApple, FaUnity } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import '../css/Projects.css';

const Projects = () => {

    const { t } = useTranslation('home');

    return (
        <div>
            <Nav />
            <h1 className='project-title'>{t('project')}</h1>
            <p className='project-text'>{t('projectDesc')}</p>
            <div className='projects-grid'>
                <ProjectCard project={{name: 'FitWSarah', description: t('fws'), 
                                technologies: [{Name: "javascript", Icon: <FaReact />}, 
                                                {Name: "restapi", Icon: <BiLogoSpringBoot />}, 
                                                {Name: "database", Icon: <SiMysql />}]}} />
                <ProjectCard project={{name: 'Pet Clinic', description: t('pet'), 
                technologies: [{Name: "javascript", Icon: <IoLogoAngular />}, 
                                {Name: "restapi", Icon: <BiLogoSpringBoot />}, 
                                {Name: "database", Icon: <SiMongodb />}]}} />
                <ProjectCard project={{name: 'Travel Journal', description: t('journal'),
                technologies: [{Name: "ios", Icon: <FaApple />}, 
                                {Name: "databases", Icon: <IoLogoFirebase />}]}} />
                <ProjectCard project={{name: 'Golf Game', description: t('golf'),
                technologies: [{Name: "csharp", Icon: <FaUnity />}, 
                                {Name: "csharp", Icon: <SiCsharp />}]}} />
            </div>
        </div>
    )
}

export default Projects;