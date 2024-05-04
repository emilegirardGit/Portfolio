import Nav from '../../components/Nav';
import '../../css/Skills.css';
import { useTranslation } from "react-i18next";

const Android = () => {

    const { t } = useTranslation('skills');

    return (
        <div className='skill'>
            <Nav />
            <h1>Android</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Android Studio</h2>
                    <p>{t('androidDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>Kotlin</h2>
                    <p>{t('kotlinDesc')}</p>
                </div>
            </div>
        </div>
    );
}

export default Android;