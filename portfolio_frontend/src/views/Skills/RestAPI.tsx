import Nav from '../../components/Nav';
import '../../css/Skill.css';
import { useTranslation } from "react-i18next";

const RestAPI = () => {

    const { t } = useTranslation('skills');

    return (
        <div className='skill'>
            <Nav />
            <h1>REST API</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>REST API</h2>
                    <p>{t('restapiDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Spring Boot</h2>
                    <p>{t('springbootDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Postman</h2>
                    <p>{t('postmanDesc')}</p>
                </div>
            </div>
        </div>
    );
}

export default RestAPI;
