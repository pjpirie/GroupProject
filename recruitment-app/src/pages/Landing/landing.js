import { Link } from 'react-router-dom';
import './landing.scss';
import './landing.responsive.scss';
import LadningImage from '../../assets/v2/LandingImage.svg';
import orange_hash from '../../assets/v2/orange_hash.svg';
import blue_hash from '../../assets/v2/blue_hash.svg';
import ExpertImage from '../../assets/v2/expert.png';
import EveryoneImage from '../../assets/v2/everyone.png';



function Landing() {
    return (
        <div className="landing">
            {/* Hero Start */}
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
            {/* Hero End */}
            {/* Text Section Start */}
            <div className="textSection">
                <div className="textSection__large">
                    <p>Don't Worry</p>
                    <h1>Getting a job is hard,but<br />not too hard!</h1>
                </div>
                <div className="textSection__small">
                    <p>Our programme is designed to enhance<br />your chances of success at recruitment<br />events by applying learning relevant to<br />your specific needs.<br />
                    <span>••••••••••••••••••••••</span><br />
                    This programme applies many years’<br />experience in all aspects of recruitment<br />assessment and people development.
                    </p>
                </div>
            </div>
            {/* Text Section End */}
            {/* Card Section Start */}
            <div className="cardSection">
                <div className="cardSection__card">
                    <img src={ExpertImage} alt="Image of our experts" />
                    <div className="cardSection__card__text">
                        <h1>Made By Experts</h1>
                        <p>
                            Recruitment Skills Development Scotland™ has been developed by<br />
                            experts in the field of recruitment and recruitment training. <br />
                            By using proven methods to accelerate skills development to secure <br />
                            a successful interviewv
                        </p>
                        <div className="cardSection__card__text__cta">
                            <Link to='/register'>
                                <li className="cardSection__card__text__cta__button">Sign up</li>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cardSection__card cardSection__card--reverse">
                    <img src={EveryoneImage} alt="Image of our experts" />
                    <div className="cardSection__card__text">
                        <h1>Designed For Everyone</h1>
                        <p>
                            Recruitment Skills Development Scotland™ is designed to be simple<br />
                            and easily followed by all. With engaging videos giving information on the<br />
                            various programme module along with activities to reinforce your new knowledge.
                        </p>
                        <div className="cardSection__card__text__cta">
                            <Link to='/register'>
                                <li className="cardSection__card__text__cta__button">Sign up</li>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Section End */}
        </div>

    );
}

export default Landing;
