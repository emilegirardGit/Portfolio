import Nav from '../components/Nav';
import '../css/Education.css';
import { useTranslation } from "react-i18next";

const Education = () => {

    const { t } = useTranslation('home');

    return (
    <div>
      <Nav />
      <div className="education">
        <h1>{t('education')}</h1>
      <div className="timeline">
        <div className="timeline-item">
          <span className="tag">{t('collegeDate')}</span>
          <h2>Champlain College</h2>
          <p>{t('collegeProgram')}</p>
        </div>
        <div className="timeline-item">
          <span className="tag">{t('highSchoolDate')}</span>
          <h2>College Notre-Dame-de-Lourdes</h2>
          <p>{t('highSchoolProgram')}</p>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Education;
