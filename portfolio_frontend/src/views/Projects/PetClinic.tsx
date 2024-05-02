import Nav from '../../components/Nav';
import '../../css/FitWSarah.css';
import { IoLogoAngular } from "react-icons/io5";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const PetClinic = () => {

    const { t } = useTranslation('projects');

    return (
        <div>
            <Nav />
            <div className='fit'>
                <h1>Pet Clinic</h1>
                <div className='fit-info'>
                    <p>{t('petDesc')}</p>
                    <h2>{t('tech')}</h2>
                    <div className='technologies-container-2'>
                        <a className='icons' href={`/skills/javascript`}>
                            <div className='technology-2'><IoLogoAngular /></div>
                        </a>
                        <a className='icons' href={`/skills/restapi`}>
                            <div className='technology-2'><BiLogoSpringBoot /></div>
                        </a>
                        <a className='icons' href={`/skills/databases`}>
                            <div className='technology-2'><SiMongodb /></div>
                        </a>
                        <a className='icons-2' href='https://github.com/cgerard321/champlain_petclinic' target='_blank' rel="noreferrer noopener">
                            <div className='technology-2'><FaGithub /></div>
                        </a>
                    </div>
                </div>
                <div className='image'>
                    
                </div>
            </div>
        </div>
    );
}

export default PetClinic;