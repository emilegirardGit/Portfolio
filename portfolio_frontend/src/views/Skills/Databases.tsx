import React from 'react';
import Nav from '../../components/Nav';
import { fetchSkills } from '../../api/fetchSkills';

const Databases = () => {

    const [skills, setSkills] = React.useState([]);

    React.useEffect(() => {
        const getSkill = async () => {
            try {
                const data = await fetchSkills('Databases');
                setSkills(data);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
            }
        };

        getSkill();
    }, []);

    return (
        <div className='skill'>
            <Nav />
            <h1>Databases</h1>
            <div className="skill-grid">
                {skills.map((skill : {'title': string, 'technology_title': string, 'technology_description': string}) => {
                    return (
                        <div className="skill-card">
                            <h2>{skill.technology_title}</h2>
                            <p>{skill.technology_description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Databases;