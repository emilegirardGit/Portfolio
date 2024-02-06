import React from 'react';
import Nav from '../../components/Nav';
import { fetchProjectsInfo } from '../../api/fetchProjectsInfo';
import '../../css/FitWSarah.css';
import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import FitWSarahLogo from '../../Images/FitWSarah.png';
import { FaGithub } from "react-icons/fa6";


interface Project {
    title: string;
    description: string;
    other_information: string[];
}

const FitWSarah = () => {

    const [project, setProject] = React.useState<Project | null>(null);

    React.useEffect(() => {
        const getProject = async () => {
            try {
                const data = await fetchProjectsInfo('FitWSarah');
                setProject(data[0]);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
            }
        };

        getProject();
    }, []);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Nav />
            <div className='fit'>
                <h1>FitWSarah</h1>
                <div className='fit-info'>
                    <p>{project.description}</p>
                    <h2>Technologies Used</h2>
                    <div className='technologies-container-2'>
                        <a className='icons' href={`/skills/javascript`}>
                            <div className='technology-2'><FaReact /></div>
                        </a>
                        <a className='icons' href={`/skills/restapi`}>
                            <div className='technology-2'><BiLogoSpringBoot /></div>
                        </a>
                        <a className='icons' href={`/skills/databases`}>
                            <div className='technology-2'><SiMysql /></div>
                        </a>
                        <a className='icons-2' href='https://github.com/AlexeiTimbro/FitWSarah' target='_blank'>
                            <div className='technology-2'><FaGithub /></div>
                        </a>
                    </div>
                </div>
                <div className='image'>
                    <h2>Visit Our Website</h2>
                    <a href='https://fitwsarah-tm3c.onrender.com/' target='_blank'>
                        <img src={FitWSarahLogo} alt='FitWSarahLogo' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FitWSarah;