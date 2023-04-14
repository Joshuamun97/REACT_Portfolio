import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hello World! I am an ambitious full-stack developer with a focus on front end who is looking to break into the industry as a recent graduate from University of Arizona's coding bootcamp
                </p>
                <p>
                    I have always been interested in web development and in the past year have recently decided to follow my dreams and take a chance. Up to this point, I have excelled in my current industry of telecommunications. Within 3 years I was promoted to General foreman and have continued to help the company grow by running profitable jobs.
                </p>
                <p>
                    With that being said, I am a very goal oriented individual who strives for growth and excellence on a daily basis!
                </p>
            </div>

        </div>
    );
}

export default About;