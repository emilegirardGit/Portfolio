import Nav from '../../components/Nav';
import '../../css/Skill.css';
import { useTranslation } from "react-i18next";

const Javascript = () => {
    
    const { t } = useTranslation('skills');

    return (
        <div className='skill'>
            <Nav />
            <h1>Javascript</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Javascript</h2>
                    <p>{t('javascriptDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>React</h2>
                    <p>{t('reactDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Express.js</h2>
                    <p>{t('expressDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Typescript</h2>
                    <p>{t('typescriptDesc')}</p>
                </div>
            </div>
        </div>
    );

}

export default Javascript;