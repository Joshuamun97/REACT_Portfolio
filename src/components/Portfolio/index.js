import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import closeFriends from '../../assets/images/CloseFriendsHomePage.jpg'
import futureProject from '../../assets/images/JMDevs.png'

let portfolioData = [
            {
                "image": closeFriends,
                "title": "Close Friends",
                "description": "A social media app for you and your close friends.",
                "using": "React, Bootstrap, Grapgql",
                "url": "https://stormy-basin-52509.herokuapp.com/"
            },
            {
                "image": futureProject,
                "title": "Future Project",
                "description": "Coming Soon!",
                "using": "Built using modern technology",
                "url": "https://joshuamun97.github.io/REACT_Portfolio"
            },
            {
                "image": futureProject,
                "title": "Future Project",
                "description": "Coming Soon!",
                "using": "Built using modern technology",
                "url": "https://joshuamun97.github.io/REACT_Portfolio"
            },
            {
                "image": futureProject,
                "title": "Future Project",
                "description": "Coming Soon!",
                "using": "Built using modern technology",
                "url": "https://joshuamun97.github.io/REACT_Portfolio"
            },
            {
                "image": futureProject,
                "title": "Future Project",
                "description": "Coming Soon!",
                "using": "Built using modern technology",
                "url": "https://joshuamun97.github.io/REACT_Portfolio"
            },
            {
                "image": futureProject,
                "title": "Future Project",
                "description": "Coming Soon!",
                "using": "Built using modern technology",
                "url": "https://joshuamun97.github.io/REACT_Portfolio"
            }
]


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate-portfolio')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-portfolio-hover')
        }, 4500)
    }, [])

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolioData.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                 <img className='portfolio-image'src={port.image} alt='portfolio'/>
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <h4 className='using'>{port.using}</h4>
                                    <div className='btnDiv'>
                                    <button className='viewBtn' onClick={() => window.open(port.url)}>View</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
        </>);
}

export default Portfolio;