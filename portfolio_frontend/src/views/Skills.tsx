import React, { Component, ElementType } from 'react';
import '../css/Skills.css';
import Nav from '../components/Nav';
import SkillCard from '../components/SkillCard';
import { TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { FaJava, FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const Skills = () => {

    return (
        <div>
            <Nav />
            <h1 className='skill-title'>Skills</h1>
            <p className='skill-text'>Here are some of the skills I have acquired over the years:</p>
            <ul className="skills-grid">
                <SkillCard skill={{name: 'Javascript', Icon: <TbBrandJavascript />}} />
                <SkillCard skill={{name: 'Java', Icon: <FaJava />}} />
                <SkillCard skill={{name: 'C Sharp', Icon: <SiCsharp />}} />
                <SkillCard skill={{name: 'REST API', Icon: <BiLogoSpringBoot />}} />
                <SkillCard skill={{name: 'Android', Icon: <DiAndroid />}} />
                <SkillCard skill={{name: 'IOS', Icon: <FaApple />}} />
            </ul>
        </div>
    );
}

export default Skills;