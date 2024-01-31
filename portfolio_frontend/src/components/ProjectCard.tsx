import React from 'react';
import '../css/ProjectCard.css';

interface ProjectCardProps {
    project: {
        name: string;
        description: string;
        technologies: {
            Name: string;
            Icon: React.ReactNode;
        }[]
        };
    };

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { name, description, technologies } = project;
    return (
        <a className="projects-card" href={`/projects/${name.toLocaleLowerCase().replace(/\s+/g, '')}`}>
        <div>
            <div className="projects-card_title">{name}</div>
            <p>{description}</p>
            <div className='technologies-container'>
                {
                    technologies.map((tech, index) => (
                        <a className='icons' href={`/skills/${tech.Name}`}>
                            <div key={index} className='technology'>{tech.Icon}</div>
                        </a>
                    ))
                }
            </div>
        </div>
        </a>
    );
}

export default ProjectCard;
