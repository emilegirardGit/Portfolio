import Nav from '../../components/Nav';
import TravelJournalHomePage from '../../Images/TravelJournalHomePage.png';
import TravelJournalEntry from '../../Images/JournalPictures.png';
import TravelJournalMap from '../../Images/TravelJournalMap.png';
import '../../css/TravelJournal.css';
import { FaApple } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const TravelJournal = () => {

    const { t } = useTranslation('projects');

    return (
        <div>
            <Nav />
            <div className='travel'>
                <h1>Travel Journal</h1>
                <div className='travel-info'>
                    <p>{t('journalDesc')}</p>
                    <h2>{t('tech')}</h2>
                    <div className='technologies-container-2'>
                        <a className='icons-2' href={`/skills/ios`}>
                            <div className='technology-2'><FaApple /></div>
                        </a>
                        <a className='icons-2' href={`/skills/ios`}>
                            <div className='technology-2'><IoLogoFirebase /></div>
                        </a>
                        <a className='icons-2' href={`/skills/ios`}>
                            <div className='technology-2'><FaGithub /></div>
                        </a>
                    </div>
                </div>
                <div className='images'>
                    <img src={TravelJournalHomePage} alt="Travel Journal Home page" width="265px" height="576px"/>
                    <img src={TravelJournalEntry} alt="Travel Journal Entry" width="265px" height="576px"/>
                    <img src={TravelJournalMap} alt="Travel Journal Home page" width="265px" height="576px"/>
                </div>
            </div>
        </div>
    );
}

export default TravelJournal;