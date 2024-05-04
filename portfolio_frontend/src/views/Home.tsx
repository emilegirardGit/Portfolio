import '../css/Home.css'
import Nav from '../components/Nav'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import myPhoto from '../Images/EmileGirard.jpg'
import { useTranslation } from "react-i18next";


const Home = () => {
    
    const { t } = useTranslation('home');

    return (
        <div>
            <Nav/>
            <div className='container'>
            <div className='align-home-left'>
                <h1 className='name'>Emile Girard</h1>
                <p className='text'>{t('intro')}</p>
                <div className='social'>
                    <a className='social-icon' href='https://github.com/emilegirardGit' target='_blank' rel="noreferrer noopener">
                        <div className='technology-2'><FaGithub /></div>
                    </a>
                    <a className='social-icon' href='https://www.linkedin.com/in/emile-girard-743b131a3/' target='_blank' rel="noreferrer noopener">
                        <div className='technology-2'><FaLinkedin /></div>
                    </a>
                    <a className='social-icon' href='mailto:emilegirard42@gmail.com'>
                        <div className='technology-2'><SiGmail /></div>
                    </a>
                </div>
            </div>
            <div className='align-home-right'>
                <img src={myPhoto} alt='Emile Girard' width='664px' height='885px'/>
            </div>
            </div>
        </div>
    );
}

export default Home;