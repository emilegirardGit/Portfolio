import '../css/Home.css'
import Nav from '../components/Nav'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import myPhoto from '../Images/EmileGirard.jpg'


const Home = () => {
    

    return (
        <div>
            <Nav/>
            <div className='container'>
            <div className='align-home-left'>
                <h1 className='name'>Emile Girard</h1>
                <p className='text'>
                Welcome to my portfolio! I'm currently a third year student at Champlain College, deep in the world of Computer Science. 
                This portfolio is my personal playground and workshop—here's where you'll see the projects I've thrown my code and creativity into, the skills I've picked up along the way, and my experiences.
                Take a look around to get a glimpse of my coding adventures and the breakthroughs that keep me motivated. 
                If anything here catches your eye, I'd love to chat about it!
                </p>
                <div className='social'>
                    <a className='social-icon' href='https://github.com/emilegirardGit' target='_blank'>
                        <div className='technology-2'><FaGithub /></div>
                    </a>
                    <a className='social-icon' href='https://www.linkedin.com/in/emile-girard-743b131a3/' target='_blank'>
                        <div className='technology-2'><FaLinkedin /></div>
                    </a>
                    <a className='social-icon' href='mailto:emilegirard42@gmail.com'>
                        <div className='technology-2'><SiGmail /></div>
                    </a>
                </div>
            </div>
            <div className='align-home-right'>
                <img src={myPhoto} alt='Emile Girard' width='664px' height='885px'/>
            </div>
            </div>
        </div>
    );
}

export default Home;