import Nav from '../components/Nav';
import '../css/Education.css';

const Education = () => {
    return (
    <div>
      <Nav />
      <div className="education">
        <h1>Education</h1>
      <div className="timeline">
        <div className="timeline-item">
          <span className="tag">August 2021 - June 2024</span>
          <h2>Champlain College</h2>
          <p>Computer Science and Technology</p>
        </div>
        <div className="timeline-item">
          <span className="tag">September 2016 - June 2021</span>
          <h2>College Notre-Dame-de-Lourdes</h2>
          <p>International Program</p>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Education;
