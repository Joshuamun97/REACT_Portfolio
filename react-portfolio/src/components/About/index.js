import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate-about')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-about-hover')
        }, 4500)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hello World! I am an ambitious full-stack developer with a focus on front end who is looking to break into the industry as a recent graduate from University of Arizona's coding bootcamp.
                </p>
                <p>
                    I have always been interested in web development and in the past year have recently decided to follow my dreams and take a chance. Up to this point, I have excelled in my current industry of telecommunications. Within 3 years I was promoted to General Foreman and have continued to help the company grow by running profitable jobs.
                </p>
                <p>
                    With that being said, I am a very goal oriented individual who strives for growth and excellence on a daily basis!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color="#68A063"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;