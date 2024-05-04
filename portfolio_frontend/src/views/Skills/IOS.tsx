import Nav from '../../components/Nav';
import '../../css/Skills.css';
import { useTranslation } from "react-i18next";

const IOS = () => {

    const { t } = useTranslation('skills');

    return (
        <div className='skill'>
            <Nav />
            <h1>IOS</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Swift</h2>
                    <p>{t('swiftDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>UIKit</h2>
                    <p>{t('uikitDesc')}</p>
                </div>
                <div className="skill-card">
                    <h2>XCode</h2>
                    <p>{t('xcodeDesc')}</p>
                </div>
            </div>
        </div>
    );
}

export default IOS;