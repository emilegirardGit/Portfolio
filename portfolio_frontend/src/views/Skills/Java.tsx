import Backbtn from '../../components/BackBtn';
import Nav from '../../components/Nav';
import '../../css/Skill.css';
import { useTranslation } from "react-i18next";

const Java = () => {

    const { t } = useTranslation('skills');

    return (
        <div className='skill'>
            <Nav />
            <Backbtn />
            <h1>Java</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Java</h2>
                    <p>{t('javaDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>JavaFX</h2>
                    <p>{t('javafxDesc')}</p>
                </div>
            </div>
        </div>
    );
}

export default Java;