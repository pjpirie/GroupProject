import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


function Landing() {
    return (
        <div className="Landing">
            <div className="hero__section">
                <p className="hero__text">Prepare to Succeed</p>
            </div>
            <div className="about__section">
                <img src={null} alt="Imagery of woman using a computer"></img>
                <p></p>
                <button>Learn More</button>
            </div>
            <div className="module__section">
                <h2>Key Module Elements</h2>
                <div className="module__grid">
                    <div className="module__grid__item">
                        <img src={null} alt="Imagery representing a video"></img>
                        <p>Illustrations of recruitment situations</p>
                    </div>
                    <div className="module__grid__item">
                        <img src={null} alt="Imagery representing information"></img>
                        <p>Detailed key learning points for each module</p>
                    </div>
                    <div className="module__grid__item">
                        <img src={null} alt="Imagery representing a audia"></img>
                        <p>Commentary of information relevant to each module</p>
                    </div>
                    <div className="module__grid__item">
                        <img src={null} alt="Imagery representing a downloading"></img>
                        <p>Downloadable personal recruitment project plan</p>
                    </div>
                </div>
            </div>
            <div className="howto__section">
                <div className="howto__text">
                    <h2>How to use this <br />Programme</h2>
                    <p>
                        Everyone will access Module 1, Preparation, as this is relevant irrespective of the structure of the recruitment event in which you will be participating. From there you will utilise other modules depending on the nature of the process in which you will be participating.
                </p>
                    <img src={null} alt="Imagery of a computer with the first module on the screen"></img>
                </div>
            </div>

        </div>
    );
}

export default Landing;
