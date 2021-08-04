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
import RSDPModuleLogo from '../../../components/RSDPModuleLogo/RSDPModuleLogo';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download5', {
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
            a.download = 'Module 6 Written Exercise Activity Sheet';
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
            <RSDPModuleLogo />
            <div className="module__header">
                <div className="module__header__text">
                    <h3>Module Five</h3>
                    <h1>Role Play</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module__body">
                <div className="module__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/4" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module__body__main">
                    {/* <p>
                    Written exercises are designed to check that a candidate can communicate logically and clearly in a written format as information is analysed, conclusions reached and recommendations made.
                    </p> */}
                    {/* Text Section Start */}
                    <div className="textSection">
                        <div className="textSection__large">
                            <p>Important!</p>
                            <h1>Role plays simulate a range of scenarios depending on the job being filled.</h1>
                        </div>
                        <div className="textSection__small">
                            <p>
                            For example, these may cover: 
                            • Meeting a problematic supplier
                            • Dealing with an angry customer
                            • Engaging with a poor performing team   
                            • member

                            <br />
                            <span>••••••••••••••••••••••</span><br />
                            </p>
                        </div>
                    </div>
                    {/* Text Section End */}
                    {/* Modal Button Section Start */}
                    <div className="module__body__buttons">
                        <p>What is involved?</p>
                        <ModuleButtonModal type="2x2"/>
                    </div>
                    {/* Modal Button Section Start */}
                    {/* Competencies Section Start */}
                    {/* <div className="intray">
                        <p>Written Exercise Example - In Tray Exercise</p>
                        <div className="intray__container">
                            <p>
                                Candidates are given a pile of documents outlining issues to be dealt with and actions to be taken requiring them to prioritise items and suggest what should be done.<br /><br />

                                The items are usually varied in number (10 to 30?), requiring a range of actions to be highlighted within a strict timescale. <br /><br />

                                Candidates may be required to make numerical calculations, draft written responses to documents, prioritise tasks and decide upon courses of action. <br /><br />


                                </p>
                        </div>
                    </div> */}
                    <div className="module__body__key">
                        <h1>Things to Remember</h1>

                        <div>
                            <h2>Be Positive and Cheerful</h2>
                            <p>Adopt a positive and cheerful attitude at the outset and focus on establishing rapport with the role player. An amicable approach will come across well particularly if you still deal with difficult issues without coming over as angry or negative whilst attempting to resolve problems. 
                            </p>
                        </div>
                        <div>
                            <h2>Monitor Time</h2>
                            <p>Keep monitoring time in an unobtrusive way
                            </p>
                        </div>
                        <div>
                            <h2>Summarise the Meeting</h2>
                            <p>Make sure that you summarise the meeting whilst agreeing relevant next steps by the end of your allotted time.
                            </p>
                        </div>
                        <div>
                            <h2>Be True to You</h2>
                            <p>Throughout the role play exercise don’t attempt to take on a different personality. The assessor wants to see how you will deal with the scenario utilising your skills and attitudes not by pretending to be someone else.
                            </p>
                        </div>
                        
                    </div>
                    {/* Competencies Section End */}

                    {/* Do's and Don'ts Section Start */}
                    <div className="module__body__dodont">
                        <h1>The do's and don'ts</h1>
                        <DoDontModal module={5}/>
                    </div>
                    {/* Do's and Don'ts Section End */}

                    {/* Activity Section Start */}
                    <div className="module__body__activity">
                        <h1>Now its time to work on your action plan</h1>
                        <p>Download the Module 4 activity sheet and work through the exercised to be fully prepared for role play exercises</p>
                        <button onClick={() => { handleDownload(); }}>Download</button>
                    </div>
                    {/* Activity Section End */}
                </div>
            </div>
        </div>
    )
}

export default Module
