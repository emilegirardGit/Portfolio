import Backbtn from '../../components/BackBtn';
import Nav from '../../components/Nav';
import { useTranslation } from "react-i18next";

const Databases = () => {

    const { t } = useTranslation('skills');

    return (
        <div className='skill'>
            <Nav />
            <Backbtn />
            <h1>Databases</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>MySQL</h2>
                    <p>{t('mysqlDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>MongoDB</h2>
                    <p>{t('mongodbDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>PostgreSQL</h2>
                    <p>{t('postgreDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>SQLite</h2>
                    <p>{t('sqliteDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Oracle</h2>
                    <p>{t('oracleDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Azure</h2>
                    <p>{t('azureDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Firebase</h2>
                    <p>{t('firebaseDesc')}</p>
                </div>
            </div>
        </div>
    );
}

export default Databases;