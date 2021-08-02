import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import ModuleButtonModal from '../../../components/ModuleButtonModal/ModuleButtonModal.js';
import DoDontModal from '../../../components/DoDontModal/DoDontModal.js';
import EffectiveImage from '../../../assets/1x/effective.png';
import FocusImage from '../../../assets/1x/focus.png';
import AwarenessImage from '../../../assets/1x/awareness.png';
import TeamImage from '../../../assets/1x/team.png';
import ConfidentImage from '../../../assets/1x/confident.png';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download3', {
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
                a.download = 'Module 3 RemoteVirtule Interview Activity Sheet';
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
        <div className="module">
            <div className="module__header">
                <div className="module__header__text">
                    <h3>Module Four</h3>
                    <h1>Group Exercise</h1>
                </div>
                <Eta time={15} />
            </div>
            <div className="module__body">
                <div className="module__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/4" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module__body__main">
                    <p>
                    This is a discussion exercise in which a small group of candidates are given a topic to discuss and reach a team conclusion within a given timescale. 
                    </p>
                    {/* Modal Button Section Start */}
                    <div className="module__body__buttons">
                        <p>These exercises can be structured in one of two ways</p>
                        <ModuleButtonModal />
                    </div>
                    {/* Modal Button Section Start */}
                    {/* Text Section Start */}
                    <div className="textSection">
                        <div className="textSection__large">
                            <p>Important!</p>
                            <h1>Sample Content{window.innerWidth >900 ? <br />: " "} but not too hard!</h1>
                        </div>
                        <div className="textSection__small">
                            <p>
                             The team discussion will be observed by assessors positioned around the room, scoring one or two candidates each against a number of performance criteria such as communications, persuasiveness, teamwork an leadership.<br />
                            <span>••••••••••••••••••••••</span><br />
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
                    <div className="module__body__dodont">
                        <h1>The do's and don'ts</h1>
                        <DoDontModal />
                    </div>
                    {/* Do's and Don'ts Section End */}

                    {/* Activity Section Start */}
                    <div className="module__body__activity">
                        <h1>Now its time to work on your action plan</h1>
                        <p>Download the Module 4 activity sheet and work througb the exercised to be fully prepared for group exercises.</p>
                        <button onClick={() => { handleDownload(); }}>Download</button>
                    </div>
                    {/* Activity Section End */}
                </div>
            </div>
        </div>
    )
}

export default Module
