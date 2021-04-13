import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.css';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download3', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then( res => res.blob() )
        .then( blob => {
            const file = window.URL.createObjectURL(blob);
            window.location.assign(file);
        });
    }

    const handleDownload = () => {
        DownloadMedia();
    };
    return (
        <div className="Module__Page__Wrapper">
            <div className="Module__Page__Header__Modules">
                <div className="Module__Page__Header__Text">
                    <h3>Module 3</h3>
                    <h1>Virtual Interview</h1>
                </div>
                <Eta time={15}/>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/3" type="video/mp4"></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p>Increasingly organisations are conducting recruitment remotely. Some basic elements are the same as in face to face events, however, some additional factors have to be considered.</p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Key Learning Points</h2>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Preparation</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>When you are invited to attend a virtual assessment a briefing email will normally arrive containing instructions on how to join on the day. There may also be some administration and ID tasks  to be completed.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>To Do List</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                            •	Passport or other documents confirming your right to work.<br />
                            •	Provide a contact number in case of any connectivity issues.<br />
                            •	Download the required software for the assessment such as Zoom, Google Hangouts and Microsoft Teams.<br />
                            •	Ensure you have a strong WiFi connection.<br />
                            •	Test microphone and webcam.<br />
                            •	If required plug your device into a charging socket. <br />
                            •	Activate the invitation link 15 minutes early, so that you can resolve any technical  issues.<br />
                            •	Dress appropriately, as if you were attending in person.<br />
                            •	Use a headset if it helps with your audio.<br />
                            •	Position yourself in a comfortable, bright space.<br />
                            •	Ensure that you will not be interrupted.<br />
                            •	Consider your body language<br />
                                        - Sit straight<br />
                                        - Minimise your movement without appearing stiff<br />
                                        - Make eye contact. This will require you to look directly at your webcam or camera, so avoid looking at the interviewer(s) on your screen.<br />
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>03</h4>
                            <h3>Pre-recorded Interviews</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                            Preparation - Many organisations require candidates to complete pre-recorded interviews as part of their recruitment process. Normally you receive lots of information including technical details on how to participate. Ensure that you study all of this in detail and if you are unclear contact the organisation. Although you will not be face to face you should consider how to dress as you will be visible to the interviewer.   <br />
                            <br />
                            Conducting the interview – You will be given the question a very short time in advance. Focus intensely on understanding what is being asked and formulate a quick outline plan.    <br />
                            <br />
                            One of the main differences from a face to face interview is that you are given a clear time limit for each answer. Ensure that you do not exceed this as you will be cut off. Equally importantly you should use as most, or all, the time available. This will require you to monitor time taken in an unobtrusive way.  <br />
                            <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Module__Page__Activity__Container">
                    <div className="Module__Page__Activity__Header">
                        <h2>Activity</h2>
                    </div>
                    <div className="Module__Page__Activity__Body">
                        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="Module__Page__Btn__Container">
                    <button onClick={() => { handleDownload(); }}>Download</button>
                </div>
            </div>      
        </div>
    )
}

export default Module
