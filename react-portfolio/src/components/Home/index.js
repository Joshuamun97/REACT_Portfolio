import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const portfolioArray = ['A', 'n', ' ' ,'I', 'n', 't', 'e', 'r', 'a', 'c', 't', 'i', 'v', 'e', ' ','P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>JM Developments <br /> <AnimatedLetters letterClass ={letterClass} strArray={portfolioArray} idx={15}/> <br /> By Joshua Muniz  </h1>
                <h2>Full Stack Developer / JavaScript / Freelancer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;