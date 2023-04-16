import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate-about')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-about-hover')
        }, 4500)
    }, [])
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am looking to break into the industry with a company that has ambitious goals, positive working enviroment, and room for growth and learning opportunities. I am also open to freelancing opportunities. You can contact me by either filling out the form below or via Linkedin (link at the botton of the left sidebar). 
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="Name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeHolder='Email'required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message'  required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Contact;