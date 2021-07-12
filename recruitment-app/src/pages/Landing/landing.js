import { Link } from 'react-router-dom';
import './landing.scss';
import './landing.responsive.scss';
import LadningImage from '../../assets/v2/LandingImage.svg';




function Landing() {
    return (
        <div className="landing">
            <div className="landing__hero">
                <div className="landing__hero__text">
                    <h1>Everything you need<br />to ace the interview<br />and get that job</h1>
                    <p>Recruitment Skills Development Programme™ is<br />a modern skill development programme that gives<br />you the skills you need for interview success.</p>
                    <div className="landing__hero__text__cta">
                    <Link to='/register'>
                        <li className="landing__hero__text__cta__button">Sign up</li>
                    </Link>
                    </div>
                </div>
                <div className="landing__hero__image">
                    <img src={LadningImage}></img>
                </div>
                
            </div>
        </div>

    );
}

export default Landing;
