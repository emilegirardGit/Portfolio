import Nav from "../components/Nav";
import CV_english_png from "../Images/Emile_Girard_CV_English.png";
import CV_english_pdf from "../Images/Emile_Girard_CV_English.pdf";
import CV_french_png from "../Images/Emile_Girard_CV_Francais.png";
import CV_french_pdf from "../Images/Emile_Girard_CV_Francais.pdf";
import '../css/Resume.css';
import { useLanguage } from '../LanguageConfig/LanguageContext';
import { useTranslation } from "react-i18next";

const Resume = () => {

  const { language } = useLanguage();
  const { t } = useTranslation('home');

  return (
    <div>
      <Nav />
      <div className="resume-container">
        <div className="resume-header">
          <h1>{t('resumeLong')}</h1>
          <div className="resume-button-container">
            {language === 'fr' ? <a href={CV_french_pdf} download="Emile_Girard_CV_Francais.pdf" className="resume-button">{t('download')}</a> : <a href={CV_english_pdf} download="Emile_Girard_CV_English.pdf" className="resume-button">{t('download')}</a>}
          </div>
        </div>
        <div className="resume-image-container">
          {language === 'fr' ? <img src={CV_french_png} alt="Resume" className="resume-image" /> : <img src={CV_english_png} alt="Resume" className="resume-image" />}
        </div>
      </div>
    </div>
  );
};

export default Resume;