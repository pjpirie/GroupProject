import { Link } from 'react-router-dom';
import './landing.scss';
import './landing.responsive.scss';
import LadningImage from '../../assets/v2/LandingImage.svg';
import orange_tri from '../../assets/v2/bg_orange_tri.svg';
import blue_circle from '../../assets/v2/bg_circle.svg';
import orange_hash from '../../assets/v2/orange_hash.svg';
import blue_hash from '../../assets/v2/blue_hash.svg';
import ExpertImage from '../../assets/LangingImg1.png';
import EveryoneImage from '../../assets/v2/everyone.png';
import Card01 from '../../assets/v2/Group 261.svg';
import Card02 from '../../assets/v2/Group 262.svg';
import Card03 from '../../assets/v2/Group 265.svg';
import Card04 from '../../assets/v2/Group 260.svg';
import Card05 from '../../assets/v2/Group 263.svg';
import Card06 from '../../assets/v2/Group 264.svg';
import ModuleBG from '../../assets/v2/ModuleBG.svg';
import { useState, useEffect, useRef } from 'react'





function Landing() {

    function useOnScreen(ref, rootMargin) {

    const [isIntersecting, setIntersecting] = useState(false)
    
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),{rootMargin: `${rootMargin}px`}
    )
    
    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])
    
    return isIntersecting
    }

      const ref = useRef()
      const ref2 = useRef()
      const isVisible = useOnScreen(ref, -200);

      useEffect(() =>{
        // console.log(isVisible);
        if(!ref.current.classList.contains('active') && isVisible && window.innerWidth > 900){
            ref.current.classList.add('active');
            ref2.current.classList.add('active');
        }else{
            return;
        }
      }, [isVisible])
    
    return (
        <div className="landing">
            {/* Hero Start */}
            <div className="landing__hero">
                <div className="landing__hero__text">
                    <h1>
                        Everything you need to know to{window.innerWidth >900 ? <br />: " "}improve your performance at{window.innerWidth >900 ? <br />: " "}recruitment events
                    </h1>
                    <p>Recruitment Skills Development Programme™ is a modern skill development programme that gives you the skills you need for interview success.</p>
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
                    {/* <p>Don't Worry</p> */}
                    <h1>Landing a job{window.innerWidth > 9000 ? <br />: " "}can be hard{window.innerWidth >9000 ? <br />: " "}but it’s not{window.innerWidth >900 ? <br />: " "}impossible.</h1>
                </div>
                <div className="textSection__small">
                    <p>The programme is designed to enhance<br />your chances of success at recruitment<br />events by applying learning relevant to<br />your specific requirements.<br />
                    <span>••••••••••••••••••••••</span><br />
                    The content draws on many years’<br />experience in all aspects of recruitment<br />assessment and people development.
                    </p>
                </div>
            </div>
            {/* Text Section End */}
            {/* Card Section Start */}
            <div className="cardSection">
                <div className="cardSection__card">
                    <div className="cardSection__card__image">
                        <img className="cardSection__card__image__bg--orange" src={orange_tri} alt="Background Imagery" />
                        <img className="cardSection__card__image__img"src={ExpertImage} alt="Image of our experts" />
                    </div>
                    <div className="cardSection__card__text">
                        <h1><img src={blue_hash} />Utilising expertise targeted on individual needs</h1>
                        <p>
                        RSDP condenses this expertise in recruitment and provides accelerated skills development to enhance success.
                        </p>
                        <div className="cardSection__card__text__cta">
                            <Link to='/register'>
                                <li className="cardSection__card__text__cta__button">Sign up</li>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cardSection__card cardSection__card--reverse">
                    <div className="cardSection__card__image">
                        <img className="cardSection__card__image__bg--blue" src={blue_circle} alt="Background Imagery" />
                        <img className="cardSection__card__image__img"src={EveryoneImage} alt="Image of our experts" />
                    </div>
                    <div className="cardSection__card__text">
                        <h1>Easy to access</h1>
                        <p>
                        RSVP is straightforward, easy to follow and combines engaging video with individual learning.
                        </p>
                        <div className="cardSection__card__text__cta">
                            <img src={orange_hash} />
                            <Link to='/register'>
                                <li className="cardSection__card__text__cta__button">Sign up</li>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Section End */}
            {/* Feature Section Start */}
            <div className="featureSection">
                <p className="featureSection__pill">FEATURE</p>
                <h1>Features of the programme</h1>
                <p>
                    {/* The programme is divided into <span>six modules</span> covering various skills and techniques <br />
                    that enable you to showcase your personality and wining attributes. <span>Get the job you’ve always wanted</span><br />
                    by following the key learning points and completing the action items that accompany the modules.<br />
                    The Preparation Module is the foundation for a successful interview and it is here where<br />
                    you will start your skills development journey. */}
                    Six modules covering a range of skills and techniques that enable you to showcase your personality and attributes. Follow the key learning points and complete action items accompanying each module.
                </p>
            </div>
            {/* Feature Section End */}
            
            {/* Modules Section Start */}
            <div className="modulesSection">
                {/* <div className="modulesSection__BG">
                    <img src={ModuleBG} />   
                </div> */}
                <div className="modulesSection__grid">
                    <div className="modulesSection__card">
                        <img src={Card01} />
                        <h1>
                            All the <br />
                            <span>preparation</span> <br />
                            you need for your<br />
                            recruitment event <br /> 
                        </h1>
                        <p className="modulesSection__pill">MODULE ONE</p>
                    </div>

                    <div className="modulesSection__card" ref={ref}>
                        <img src={Card02} />
                        <h1>
                            How to deal with <br />
                            a <span>Face to<br />
                            Face interview</span> <br />
                        </h1>
                        <p className="modulesSection__pill">MODULE TWO</p>
                    </div> 

                    <div className="modulesSection__card">
                        <img src={Card03} />
                        <h1>
                            Specific aspects <br />
                            of a<span> virtual/remote <br />
                            interview <br /> </span>
                        </h1>
                        <p className="modulesSection__pill">MODULE THREE</p>
                    </div> 

                    <div className="modulesSection__card">
                        <img src={Card04} />
                        <h1>
                            The key do's and <br />
                            don'ts in <span>group<br />
                            exercise</span> <br />
                            scenarios  <br />
                        </h1>
                        <p className="modulesSection__pill">MODULE FOUR</p>
                    </div> 

                    <div className="modulesSection__card" ref={ref2}>
                        <img src={Card05} />
                        <h1>
                            How to succeed <br />
                            in any recruitment<br />
                            event <span>role play</span> <br />
                            scenario  <br />
                        </h1>
                        <p className="modulesSection__pill">MODULE FIVE</p>
                    </div> 

                    <div className="modulesSection__card">
                        <img src="" alt="" />
                        <img src={Card06} />
                        <h1>
                            How to give your<br />
                            best in a <span>written <br />
                            exercise  </span><br />
                        </h1>
                        <p className="modulesSection__pill">MODULE SIX</p>
                    </div> 
                </div>
            </div>
            {/* Modules Section End */}
            
            {/* CTA Section Start */}
            <div className="ctaSection">
                <h1>Ready to begin your journey to success?</h1>
                <Link to='/register'>
                    <li className="ctaSection__button">Begin Now</li>
                </Link> 
            </div>
            {/* CTA Section End */}
        </div>

    );
}

export default Landing;
