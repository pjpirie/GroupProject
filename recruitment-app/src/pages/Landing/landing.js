import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoImage from '../../assets/Icon material-slow-motion-video.png';
import DownloadImage from '../../assets/Icon awesome-download.png';
import AudioImage from '../../assets/Icon metro-multitrack-audio.png';
import InfoImage from '../../assets/Group 59.png';
import ComputerImage from '../../assets/computer.png';
import GirlWithComputerImage from '../../assets/Group 41.png';
import './landing.css';
import ModuleStartCard from '../../components/ModuleStartCard/ModuleStartCard';
import BGImage1 from '../../assets/Group 58.png';



function Landing() {
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
                    <button>Learn More</button>
                </div>
            </div>
            <div className="module__section">
                <div className="module__section__content">    
                    <h2>Key Module Elements</h2>
                    <div className="module__grid">
                        <div className="module__grid__item">
                            <img src={VideoImage} alt="Imagery representing a video"></img>
                            <div className="module__grid__item__text">
                            <h3>Video</h3>
                            <p>Illustrations of recruitment situations</p>
                            </div>
                        </div>
                        <div className="module__grid__item">
                            <img src={InfoImage} alt="Imagery representing information"></img>
                            <div className="module__grid__item__text">
                            <h3>Learning Points</h3>
                            <p>Detailed key learning points for each module</p>
                            </div>
                        </div>
                        <div className="module__grid__item">
                            <img src={AudioImage} alt="Imagery representing a audio"></img>
                            <div className="module__grid__item__text">
                            <h3>Audio</h3>
                            <p>Commentary of information relevant to each module</p>
                            </div>
                        </div>
                        <div className="module__grid__item">
                            <img src={DownloadImage} alt="Imagery representing a downloading"></img>
                            <div className="module__grid__item__text">
                            <h3>Activities</h3>
                            <p>Downloadable personal recruitment project plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <img className="bgimg" src={BGImage1} alt="Background Imagery"></img>
            <div className="howto__section">
                <div className="howto__text">
                    <h2>How to use this <br />Programme</h2>
                    <p>
                        Everyone will access Module 1, Preparation, as this is relevant irrespective of the structure of the recruitment event in which you will be participating. From there you will utilise other modules depending on the nature of the process in which you will be participating.
                </p>
                </div>
                    <img className="computerImage" src={ComputerImage} alt="Imagery of a computer with the first module on the screen"></img>
            </div>
            <ModuleStartCard />
        </div>


    );
}

export default Landing;
