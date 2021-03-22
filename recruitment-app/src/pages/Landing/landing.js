import {useEffect, useState} from 'react';
import ClipboardImage from '../../assets/clipboard.png';
import MessageImage from '../../assets/msg.png';
import LaptopImage from '../../assets/laptop.png';
import PeopleImage from '../../assets/people.png';
import FacesImage from '../../assets/faces.png';
import PencilImage from '../../assets/pencil.png';
import ComputerImage from '../../assets/laptopandsmartphone.png';
import GirlWithComputerImage from '../../assets/Group 41.png';
import './landing.css';
import './landing.responsive.css';
import ModuleStartCard from '../../components/ModuleStartCard/ModuleStartCard';
import BGImage1 from '../../assets/Group 58.png';
import AddIcon from '@material-ui/icons/Add';
import {setLightNav} from '../../actions';
import {useDispatch} from 'react-redux';



function Landing() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLightNav(true));
    },[]);
    return (
        <div className="Landing">
            <div className="hero__section">
                <p className="hero__text">Prepare to Succeed</p>
            </div>
            <div className="about__section">
                <img src={GirlWithComputerImage} alt="Imagery of woman using a computer"></img>
                <div>
                    <p>
                    At XPC International Ltd. we have many years’ experience in all aspects of assessment, recruitment and people development. <br /><br />

                    Our Recruitment Skills Development Programme is designed to provide a straightforward means to enhance your chances of success by applying relevant learning in a structure focused on your specific needs.  
                    </p>
                    {/* <button>Learn More</button> */}
                </div>
            </div>
            <div className="howto__section">
                <div className="howto__text">
                    <h2>How to use this <br />Programme</h2>
                    <p>
                    The programme is divided into six modules covering skills and techniques to enable you to showcase your personality and key attributes in the main activities utilised in modern recruitment situations. You can apply your learning by inputting “Action Items” specific to you. These can be stored and printed to provide your Personal Action Plan. <br /><br />

Everyone will access Module 1, Preparation, as this is relevant irrespective of the structure of the recruitment event in which you will be participating. From there you will utilise other modules depending on the nature of the process in which you will be participating.




                </p>
                </div>
            </div>
            <div className="module__section">
                <div className="module__section__content">    
                    <h2>Key Module Elements</h2>
                    <div className="module__grid">
                        <div className="module__grid__item">
                            <img src={ClipboardImage} alt="representing the preparation module"></img>
                        </div>
                        <div className="module__grid__item">
                            <img src={MessageImage} alt="representing the face to face interview module"></img>
                        </div>
                        <div className="module__grid__item">
                            <img src={LaptopImage} alt="representing the virtual/remote interview module"></img>
                        </div>
                        <div className="module__grid__item">
                            <img src={PeopleImage} alt="representing the group exercises module"></img>
                        </div>
                        <div className="module__grid__item">
                            <img src={FacesImage} alt="representing the role play module"></img>
                        </div>
                        <div className="module__grid__item">
                            <img src={PencilImage} alt="representing the written exercise module"></img>
                        </div>
                    </div> 
                </div>
            </div>
            <img className="bgimg" src={BGImage1} alt="Background"></img>
            <div className="info__section">
                <div className="info__section__container">
                    <div className="info__section__points__container">
                        <h2>Within each module</h2>
                        <div className="info__section__point">
                            <AddIcon style={{color: '#71A068'}} />
                            <p>
                                Short video with audio commentary<br />
                                (Relevant recruitment scenarios)
                            </p>
                        </div>
                        <div className="info__section__point">
                            <AddIcon style={{color: '#71A068'}} />
                            <p>
                                Key Learning Points<br />
                                (Detailed content)
                            </p>
                        </div>
                        <div className="info__section__point">
                            <AddIcon style={{color: '#71A068'}} />
                            <p>
                                Action Items<br />
                                (Personal Action Plan – Download, Save, Print)
                            </p>
                        </div>
                    </div>
                    <img className="computerImage" src={ComputerImage} alt="of a computer with the first module on the screen"></img>
                </div>
                    <h5>Sign up using your email address and start your personalised learning journey.</h5>
            </div>

            <span className="footer__divider"></span>
        </div>


    );
}

export default Landing;
