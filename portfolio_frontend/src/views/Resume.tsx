import Nav from "../components/Nav";
import CV_png from "../Images/Emile_Girard_CV_English.png";
import CV_pdf from "../Images/Emile_Girard_CV_English.pdf";
import '../css/Resume.css';

const Resume = () => {
  return (
    <div>
      <Nav />
      <div className="resume-container">
        <div className="resume-header">
          <h1>Resume</h1>
          <div className="resume-button-container">
            <a href={CV_pdf} download="Emile_Girard_CV_English.pdf" className="resume-button">Download Resume</a>
          </div>
        </div>
        <div className="resume-image-container">
          <img src={CV_png} alt="Resume" className="resume-image" />
        </div>
      </div>
    </div>
  );
};

export default Resume;