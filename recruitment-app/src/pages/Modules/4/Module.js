import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';


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

    const btnClick=()=>{
        // alert();
    }

    return (
        <div className="module">
            <div className="module__header">
                <div>
                    <h4>MODULE THREE</h4>
                    <h1>Virtual Interview</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module__body">
                <div className="module__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/3" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module__body__main">
                    <p>
                        Increasingly organisations are conducting recruitment remotely. <br/>
                        Some basic elements are the same as in face to face events, however, some additional <br/> factors have to be considered.
                    </p>
                    <div className="module__body__main__text">
                        <div className="module__body__main__text__left">
                            <h4>Preparation is Key</h4>
                            <h3>You may be asked to bring along some personal documents.</h3>
                        </div>
                        <div className="module__body__main__text__right">
                            <h3>When you are invited to attend a virtual assessment a briefing email will normally arrive containing instructions on how to join on the day. There may also be some administration and ID tasks to be completed.</h3>
                        </div>
                    </div>
                    <div className="module__body__main__buttons">
                        <p>Keep in mind some things you can do to ensure a smooth virtual interview</p>
                        <div className="module__body__main__buttons__wrapper">
                            <button value="Documentation" onClick={btnClick()} className="module__body__main__buttons__wrapper__1">Documentation</button>
                            <button value="Connectivity" onClick={btnClick()} className="module__body__main__buttons__wrapper__2">Connectivity</button> <br />
                            <button value="Appearance" onClick={btnClick()} className="module__body__main__buttons__wrapper__3">Appearance</button>
                            <button value="Location" onClick={btnClick()} className="module__body__main__buttons__wrapper__4">Location</button>
                        </div>
                    </div>
                    <div className="module__body__main__interview">
                        <p>Pre-recorded Interviews</p>
                        <div className="module__body__main__interview__left">
                            <h4>Be prepared</h4>
                            <h3>Many organisations require candidates to complete pre-recorded interviews.</h3>
                        </div>
                        <div className="module__body__main__interview__right">
                            <h3>Normally you receive lots of information including technical details on how to participate. Ensure that you study all of this in detail and if you are unclear contact the organisation.</h3>
                        </div>
                    </div>
                    <div className="module__body__main__consider">
                        <h1>Things to Consider</h1>
                        <h3>Dree to Impress</h3>
                        <h4>Although you will not be face to face you should consider how to dress as you will be visible to the interviewer. </h4>
                        <h3>Prepare your Answers</h3>
                        <h4>You will be given the question a very short time in advance. Focus intensely on understanding what is being asked and formulate a quick outline plan.</h4>
                        <h3>Monitor Time</h3>
                        <h4>One of the main differences from a face to face interview is that you are given a clear time limit for each answer. Ensure that you do not exceed this as you will be cut off. Equally importantly you should use as most, or all, the time available. This will require you to monitor time taken in an unobtrusive way. </h4>
                    </div>
                    <div className="module__body__main__download">
                        <h2>Now it's time to work on you action plan</h2>
                        <h3>Download the Module 4 activity sheet and work through the <br /> exercises to be fully prepared for group exercises.</h3>
                        <button onClick={handleDownload}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
