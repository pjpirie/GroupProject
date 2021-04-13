import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.css';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download6', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(data => data.json())
    }

    const handleDownload = () => {
        DownloadMedia();
    };
    return (
        <div className="Module__Page__Wrapper">
            <div className="Module__Page__Header__Modules">
                <div className="Module__Page__Header__Text">
                    <h3>Module 6</h3>
                    <h1>Written Exercise</h1>
                </div>
                <Eta time={15}/>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/6" type="video/mp4"></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p>
                    Written exercises are designed to check that a candidate can communicate logically and clearly in a written format as information is analysed, conclusions reached and recommendations made.<br />
                    <br />
                    Invariably in these exercises candidates are given a large amount of information and are asked to produce a report and make specific recommendations.<br />

                    </p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Key Learning Points</h2>
                    <p>How to deliver an excellent written exercise:</p>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Read</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Read through all of the information provided and identify the key points which you are asked to address. Highlight these and keep them visible as you prepare your answer, regularly checking that you are still on track and providing only relevant information
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>Manage Time</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Construct an outline plan. Allocate time limits for each part of your answer and regularly monitor your progress against these. Allow sufficient time at the end to check that you have done everything requested as you review your work checking spelling and grammar.
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>03</h4>
                            <h3>Language</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Use language which is straightforward, jargon free and provides the specific information which is being asked for..</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>04</h4>
                            <h3>Clear and Concise</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Ensure that your conclusions and recommendations are specific and unambiguous.</p>
                        </div>
                    </div>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Example - In Tray Exercise</h2>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Body">
                            <p>
                            Candidates are given a pile of documents outlining issues to be dealt with and actions to be taken requiring them to prioritise items and suggest what should be done.<br />
                            <br />
                            The items are usually varied in number (10 to 30?), requiring a range of actions to be highlighted within a strict timescale.<br /> 
                            <br />
                            Candidates may be required to make numerical calculations, draft written responses to documents, prioritise tasks and decide upon courses of action. <br />
                            <br />
                            Key Suggestions:<br />
                            <br />
                            -   Although it may sound obvious, study the instructions carefully and follow them exactly as they contain critical information for the successful completion of the exercise.<br />
                            <br />
                            -  Time management is critical as you will have a number of items to action within a tight deadline.<br />
                            <br />
                            -  As prioritisation within the exercise is crucial ensure that you cover all items as those at the end may have a high priority. Running out of time and not dealing with later items can seriously impact your performance. Also, prioritise your time during the exercise. Items which are clearly of lower importance should receive as little time as possible, enabling you to concentrate on making the more important decisions and judgements. <br />

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
