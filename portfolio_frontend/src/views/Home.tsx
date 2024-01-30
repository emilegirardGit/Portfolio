import '../css/Home.css'
import Nav from '../components/Nav'

const Home = () => {
    

    return (
        <div>
            <Nav/>
            <div className='align-home-left'>
                <h1 className='name'>Emile Girard</h1>
                <p className='text'>I am a third year computer science student at Champlain College</p>
            </div>
        </div>
    );
}

export default Home;