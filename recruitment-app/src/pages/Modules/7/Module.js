import React, { useState } from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import ModuleLogo from '../ModuleLogo.js';

function Module() {

    async function DownloadMedia() {
        return fetch('https://rsdp-backend.herokuapp.com/download3', {
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
                a.download = 'Module 6 RemoteVirtule Interview Activity Sheet';
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
        let active = document.querySelector('.module6__body__main__buttons__wrapper__active')
        if(active){
            active.classList.remove('module6__body__main__buttons__wrapper__active')
        }
        document.querySelector(`#btn${num}`).classList.add('module6__body__main__buttons__wrapper__active')
    }
    const modalClose=()=>{
        btnClick(0)
        document.querySelector('.module6__body__main__buttons__wrapper__active').classList.remove('module6__body__main__buttons__wrapper__active')
    }

    return (
        <div className="module6">
            <ModuleLogo />
            <div className="module6__header">
                <div>
                    <h4>MODULE SIX</h4>
                    <h1>Written Exercise</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module6__body">
                <div className="module6__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://rsdp-backend.herokuapp.com/video/6" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module6__body__main">
                    <p>
                    Written exercises are designed to check that a candidate can communicate logically and clearly in a written format as information is analysed, conclusions reached and recommendations made.
                    </p>
                    <div className="module6__body__main__text">
                        <div className="module6__body__main__text__left">
                            <h4>Important!</h4>
                            <h3>Pay attention to the tips provided to deliver an excellent written exercise</h3>
                        </div>
                        <div className="module6__body__main__text__right">
                            <h3>In written exercises you will be given a large amount of information and are asked to produce a report and make specific recommendations.</h3>
                        </div>
                    </div>
                    <div className="module6__body__main__buttons">
                        <p>How to deliver an excellent written exercise:</p>
                        <div className="module6__body__main__buttons__wrapper">
                            <button value="Documentation" onClick={()=>modalOpen(1)} id="btn1" className="module6__body__main__buttons__wrapper__1">Read</button>
                            <button value="Connectivity" onClick={()=>modalOpen(2)} id="btn2" className="module6__body__main__buttons__wrapper__2">Manage Time</button> <br />
                            <button value="Appearance" onClick={()=>modalOpen(3)} id="btn3" className="module6__body__main__buttons__wrapper__3">Language</button>
                            <button value="Location" onClick={()=>modalOpen(4)} id="btn4" className="module6__body__main__buttons__wrapper__4">Be Clear</button>
                        </div>
                        <div className="module6__body__main__buttons__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 1?
                                    <div className="module6__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Read</h1>
                                        <h4>Read through all of the information provided and identify the key points which you are asked to address. Highlight these and keep them visible as you prepare your answer, regularly checking that you are still on track and providing only relevant information.</h4>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 2?
                                    <div className="module6__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Manage Time</h1>
                                        <h4>Construct an outline plan. Allocate time limits for each part of your answer and regularly monitor your progress against these. Allow sufficient time at the end to check that you have done everything requested as you review your work checking spelling and grammar.</h4>
                                    </div>
                                :null
                            }
                            {
                                btnVal === 3?
                                    <div className="module6__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Language</h1>
                                        <h4>Use language which is straightforward, jargon free and provides the specific information which is being asked for.</h4>
                                    </div>
                                :null
                            }
                            {
                                btnVal === 4?
                                    <div className="module6__body__main__buttons__modal__show">
                                        <button onClick={modalClose}>X</button>
                                        <h1>Be Clear</h1>
                                        <h4>Ensure that your conclusions and recommendations are specific and unambiguous.</h4>
                                    </div>
                                :null
                            }
                        </div>
                    </div>                        
                    <div className="module6__body__main__example">
                        <h1>Written Exercise Example - In Tray Exercise</h1>
                        <p>Candidates are given a pile of documents outlining issues to be dealt with and actions to be taken requiring them to prioritise items and suggest what should be done.</p>
                        <p>The items are usually varied in number (10 to 30?), requiring a range of actions to be highlighted within a strict timescale. </p>
                        <p>Candidates may be required to make numerical calculations, draft written responses to documents, prioritise tasks and decide upon courses of action. </p>
                    </div>
                    <div className="module6__body__main__consider">
                        <h1>Key Suggestions</h1>
                        <h4>Although it may sound obvious, study the instructions carefully and follow them exactly as they contain critical information for the successful completion of the exercise.</h4>
                        <h4>Time management is critical as you will have a number of items to action within a tight deadline.</h4>
                        <h4>As prioritisation within the exercise is crucial ensure that you cover all items as those at the end may have a high priority. Running out of time and not dealing with later items can seriously impact your performance. Also, prioritise your time during the exercise. Items which are clearly of lower importance should receive as little time as possible, enabling you to concentrate on making the more important decisions and judgements. </h4>
                    </div>
                    <div className="module6__body__main__download">
                        <h2>Now it's time to work on you action plan</h2>
                        <h3>Download the Module 6 activity sheet and work through the exercises to be fully prepared for group exercises.</h3>
                        <button onClick={handleDownload}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
