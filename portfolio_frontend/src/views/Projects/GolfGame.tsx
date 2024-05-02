import { t } from 'i18next';
import Nav from '../../components/Nav';
import '../../css/TravelJournal.css';
import { FaUnity } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { useTranslation } from "react-i18next";

const GolfGame = () => {

    const { t } = useTranslation('projects');

    return (
        <div>
            <Nav />
            <div className='travel'>
                <h1>Golf Game</h1>
                <div className='travel-info'>
                    <p>{t('golfDesc')}</p>
                    <h2>{t('tech')}</h2>
                    <div className='technologies-container-2'>
                        <a className='icons-2' href={`/skills/csharp`}>
                            <div className='technology-2'><FaUnity /></div>
                        </a>
                        <a className='icons-2' href={`/skills/csharp`}>
                            <div className='technology-2'><SiCsharp /></div>
                        </a>
                        <a className='icons-2' href='https://github.com/RichardDanon/Final_Game_Project' target='_blank' rel="noreferrer noopener">
                            <div className='technology-2'><FaGithub /></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GolfGame;