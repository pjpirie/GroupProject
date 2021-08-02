import React, { useState } from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import ModuleButtonModal from '../../../components/ModuleButtonModal/ModuleButtonModal';

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

    const [btnVal, btnClick] = useState(false)

    const modalOpen =(num)=>{
        btnClick(num)
        let active = document.querySelector('.module4__body__main__buttons__wrapper__active')
        if(active){
            active.classList.remove('module4__body__main__buttons__wrapper__active')
        }
        document.querySelector(`#btn${num}`).classList.add('module4__body__main__buttons__wrapper__active')
    }
    const modalClose=()=>{
        btnClick(0)
        document.querySelector('.module4__body__main__buttons__wrapper__active').classList.remove('module4__body__main__buttons__wrapper__active')
    }

    return (
        <div className="module4">
            <div className="module4__header">
                <div>
                    <h4>MODULE THREE</h4>
                    <h1>Virtual Interview</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module4__body">
                <div className="module4__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/3" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module4__body__main">
                    <p>
                        Increasingly organisations are conducting recruitment remotely. <br/>
                        Some basic elements are the same as in face to face events, however, some additional <br/> factors have to be considered.
                    </p>
                    <div className="module4__body__main__text">
                        <div className="module4__body__main__text__left">
                            <h4>Preparation is Key</h4>
                            <h3>You may be asked to bring along some personal documents.</h3>
                        </div>
                        <div className="module4__body__main__text__right">
                            <h3>When you are invited to attend a virtual assessment a briefing email will normally arrive containing instructions on how to join on the day. There may also be some administration and ID tasks to be completed.</h3>
                        </div>
                    </div>
                    <div className="module4__body__main__buttons">
                        <p>Keep in mind some things you can do to ensure a smooth virtual interview</p>
                        <div className="module4__body__main__buttons__wrapper">
                            <button value="Documentation" onClick={()=>modalOpen(1)} id="btn1" className="module4__body__main__buttons__wrapper__1">Documentation</button>
                            <button value="Connectivity" onClick={()=>modalOpen(2)} id="btn2" className="module4__body__main__buttons__wrapper__2">Connectivity</button> <br />
                            <button value="Appearance" onClick={()=>modalOpen(3)} id="btn3" className="module4__body__main__buttons__wrapper__3">Appearance</button>
                            <button value="Location" onClick={()=>modalOpen(4)} id="btn4" className="module4__body__main__buttons__wrapper__4">Location</button>
                        </div>
                        <div className="module4__body__main__buttons__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 1?
                                    <div className="module4__body__main__buttons__modal__show">
                                    <button onClick={modalClose}>X</button>
                                        <h1>Documentation</h1>
                                        <h4>You may be required to bring along your Passport or other documents confirming your right to work and address etc.</h4>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 2?
                                    <div className="module4__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Connectivity</h1>
                                        <h4>
                                            • Provide a contact number in case of any connectivity issues. <br />
                                            • Download the required software for the assessment such as Zoom, Google Hangouts and Microsoft Teams.<br />
                                            • Ensure you have a strong WiFi connection.<br />
                                            • Test microphone and webcam.<br />
                                            • If required plug your device into a charging socket. <br />
                                            • Activate the invitation link 15 minutes early, so that you can resolve any technical  issues.<br />
                                            • Use a headset if it helps with your audio.
                                        </h4>
                                    </div>
                                :null
                            }
                            {
                                btnVal === 3?
                                    <div className="module4__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Appearance</h1>
                                        <h4>
                                            • Dress appropriately, as if you were attending in person. <br />
                                            • Consider your body language <br />
                                            <span />- Sit straight  <br />
                                            <span />- Minimise your movement without appearing stiff  <br />
                                            <span />- Make eye contact.   <br />
                                        </h4>
                                    </div>
                                :null
                            }
                            {
                                btnVal === 4?
                                    <div className="module4__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Location</h1>
                                        <h4>
                                            • Position yourself in a comfortable, bright space. <br />
                                            • Ensure that you will not be interrupted.
                                        </h4>
                                    </div>
                                :null
                            }
                        </div>
                    </div>                        
                    <p>Pre-recorded Interviews</p>
                    <div className="module4__body__main__text">
                        <div className="module4__body__main__text__left">
                            <h4>Be prepared</h4>
                            <h3>Many organisations require candidates to complete pre-recorded interviews.</h3>
                        </div>
                        <div className="module4__body__main__text__right">
                            <h3>Normally you receive lots of information including technical details on how to participate. Ensure that you study all of this in detail and if you are unclear contact the organisation.</h3>
                        </div>
                    </div>
                    <div className="module4__body__main__consider">
                        <h1>Things to Consider</h1>
                        <h3>Dress to Impress</h3>
                        <h4>Although you will not be face to face you should consider how to dress as you will be visible to the interviewer. </h4>
                        <h3>Prepare your Answers</h3>
                        <h4>You will be given the question a very short time in advance. Focus intensely on understanding what is being asked and formulate a quick outline plan.</h4>
                        <h3>Monitor Time</h3>
                        <h4>One of the main differences from a face to face interview is that you are given a clear time limit for each answer. Ensure that you do not exceed this as you will be cut off. Equally importantly you should use most, or all of the time available. This will require you to monitor time in an unobtrusive way. </h4>
                    </div>
                    <div className="module4__body__main__download">
                        <h2>Now it's time to work on you action plan</h2>
                        <h3>Download the Module 3 activity sheet and work through the exercises to be fully prepared for group exercises.</h3>
                        <button onClick={handleDownload}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
