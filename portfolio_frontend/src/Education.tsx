import Nav from './components/Nav';
import './css/Education.css';

const Education = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="box">
                    <div className="icon"></div>
                        <div className="content">
                            <h2>Open Source Developer</h2>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="box">
                        <div className="icon"></div>
                        <div className="content">
                            <h2>Freelancer</h2>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
