import { Link } from "react-router-dom";
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>JM Developments <br /> An Interactive Portfolio by Joshua Muniz  </h1>
                <h2>Full Stack Developer / JavaScript / Freelancer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home;