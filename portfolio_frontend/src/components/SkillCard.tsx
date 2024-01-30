import React from 'react';
import '../css/SkillCard.css';

interface SkillCardProps {
    skill: {
        name: string;
        Icon: React.ReactNode;
    };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const { name, Icon } = skill;
    return (
        <a className="skills-card" href={`/skills/${name.toLocaleLowerCase().replace(/\s+/g, '')}`}>
        <div>
            <div className="skills-card_icon">
                {Icon}
            </div>
            <div className="skills-card_title">{name}</div>
        </div>
        </a>
    );
};

export default SkillCard;