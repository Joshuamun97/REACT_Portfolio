import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import jmdev from '../../assets/images/jmdev.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/REACT_Portfolio'>
            <img src={jmdev} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/REACT_Portfolio">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/REACT_Portfolio/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/REACT_Portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/joshua-muniz-b8491025b/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Joshuamun97'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;