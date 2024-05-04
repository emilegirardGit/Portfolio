import Nav from '../components/Nav';
import '../css/Experiences.css';
import { useTranslation } from "react-i18next";

const Experiences = () => {

    const { t } = useTranslation('home');

    return (
        <div>
      <Nav />
      <div className="experiences">
        <h1>{t('experience')}</h1>
      <div className="timeline">
        <div className="timeline-item">
          <span className="tag">{t('intershipDate')}</span>
          <h2>{t('role')}</h2>
          <p>...</p>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Experiences;