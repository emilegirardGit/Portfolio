import React from 'react';
import Nav from '../../components/Nav';
import TravelJournalHomePage from '../../Images/TravelJournalHomePage.png';
import TravelJournalEntry from '../../Images/JournalPictures.png';
import TravelJournalMap from '../../Images/TravelJournalMap.png';
import '../../css/TravelJournal.css';
import { FaUnity } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { fetchProjectsInfo } from '../../api/fetchProjectsInfo';

interface Project {
    title: string;
    description: string;
    other_information: string[];
}


const GolfGame = () => {

    const [project, setProject] = React.useState<Project | null>(null);

    React.useEffect(() => {
        const getProject = async () => {
            try {
                const data = await fetchProjectsInfo('TravelJournal');
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
            <div className='travel'>
                <h1>Golf Game</h1>
                <div className='travel-info'>
                    <p>{project.description}</p>
                    <h2>Technologies Used</h2>
                    <div className='technologies-container-2'>
                        <a className='icons-2' href={`/skills/csharp`}>
                            <div className='technology-2'><FaUnity /></div>
                        </a>
                        <a className='icons-2' href={`/skills/csharp`}>
                            <div className='technology-2'><SiCsharp /></div>
                        </a>
                        <a className='icons-2' href='https://github.com/RichardDanon/Final_Game_Project'>
                            <div className='technology-2'><FaGithub /></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GolfGame;