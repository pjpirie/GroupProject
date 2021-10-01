import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import ModuleButtonModal from '../../../components/ModuleButtonModal/ModuleButtonModal.js';
import DoDontModal from '../../../components/DoDontModal/DoDontModal.js';
import EffectiveImage from '../../../assets/1x/EffectiveCommunication.png';
import FocusImage from '../../../assets/1x/FocusGoals.png';
import AwarenessImage from '../../../assets/1x/AwarenessTime.png';
import TeamImage from '../../../assets/1x/Constructive.png';
import ConfidentImage from '../../../assets/1x/ConfidentDelivery.png';
import RSDPModuleLogo from '../../../components/RSDPModuleLogo/RSDPModuleLogo';
import DownloadIcon from '../../../assets/SVG/Download.svg';


function Module() {

    async function DownloadMedia() {
        return fetch('https://rsdp-backend.herokuapp.com/download4 ', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = 'Module 4 Group Exercises Activity Sheet';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            // alert('your file has downloaded!'); // or you know, something with better UX...
        })
        .catch(() => alert('Issue Downloading File. Please Try Again Later'));
    }
    
    const handleDownload = () => {
        DownloadMedia();
    };
    return (
        <div className="module5">
            <RSDPModuleLogo />
            <div className="module5__header module__header">
                <div className="module__header__text">
                    <h3>MODULE FOUR</h3>
                    <h1>Group Exercise</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module5__body">
                <div className="module5__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://rsdp-backend.herokuapp.com/video/4" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module5__body__main">
                    <div className="module5__body__main__text">
                        <p>
                        This is a <span className="highlightGreen">discussion exercise</span> in which a small group of candidates are given a topic to discuss and reach a team conclusion within a given timescale. 
                        </p>
                    </div>
                    {/* Modal Button Section Start */}
                    <div className="module5__body__buttons">
                        <p>These exercises can be structured in one of two ways</p>
                        <ModuleButtonModal />
                    </div>
                    {/* Modal Button Section Start */}
                    {/* Text Section Start */}
                    <div className="module5__textSection textSection">
                        <div className="module5__textSection__large textSection__large">
                            <p>Important!</p>
                            <h1>
                                You will be observed by 
                                assessors but they 
                                will not take any part 
                                in the team discussion</h1>
                        </div>
                        <div className="module5__textSection__small textSection__small">
                            <p>
                             The team discussion will be observed by assessors positioned around the room, scoring one or two candidates each against a number of performance criteria such as communications, persuasiveness, teamwork and leadership.<br />
                            {/* <span>••••••••••••••••••••••</span><br /> */}
                            </p>
                        </div>
                    </div>
                    {/* Text Section End */}
                    {/* Competencies Section Start */}
                    <div className="compSection">
                        <p>Assessors will be looking for candidates to demonstrate competencies such as:</p>
                        <div className="compSection__container">
                            <img src={EffectiveImage} alt="Effective communication"/>
                            <img src={FocusImage} alt="Focus on team goals"/>
                            <img src={AwarenessImage} alt="Awareness of time"/>
                            <img src={TeamImage} alt="Constructive team behavious"/>
                            <img src={ConfidentImage} alt="Confident delivery of key messages"/>
                        </div>
                    </div>
                    {/* Competencies Section End */}

                    {/* Do's and Don'ts Section Start */}
                    <div className="module5__body__dodont">
                        <h1>The do's and don'ts</h1>
                        <DoDontModal />
                    </div>
                    {/* Do's and Don'ts Section End */}

                    {/* Activity Section Start */}
                    <div className="module5__body__main__download">
                        <h2>Now it's time to work on you action plan</h2>
                        <h3>Press the Download Button to make detailed personal preparations.</h3>
                        <button onClick={handleDownload}>Download</button>
                    </div>
                    {/* Activity Section End */}
                </div>
            </div>
        </div>
    )
}

export default Module
