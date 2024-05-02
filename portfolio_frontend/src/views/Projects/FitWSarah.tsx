import Nav from '../../components/Nav';
import '../../css/FitWSarah.css';
import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import FitWSarahLogo from '../../Images/FitWSarah.png';
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const FitWSarah = () => {

    const { t } = useTranslation('projects');

    return (
        <div>
            <Nav />
            <div className='fit'>
                <h1>FitWSarah</h1>
                <div className='fit-info'>
                    <p>{t('fitWSarah')}</p>
                    <h2>{t('tech')}</h2>
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
                        <a className='icons-2' href='https://github.com/AlexeiTimbro/FitWSarah' target='_blank' rel="noreferrer noopener">
                            <div className='technology-2'><FaGithub /></div>
                        </a>
                    </div>
                </div>
                <div className='image'>
                    <h2>Visit Our Website</h2>
                    <a href='https://fitwsarah-tm3c.onrender.com/' target='_blank' rel="noreferrer noopener">
                        <img src={FitWSarahLogo} alt='FitWSarahLogo' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FitWSarah;