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
        return fetch('https://group-54-rct.herokuapp.com/download6', {
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
                    Written exercises are designed to check that a candidate can communicate logically and clearly in a written format as information is analysed, conclusions reached and recommendations made.
                    </p>
                    {/* Modal Button Section Start */}
                    <div className="module__body__buttons">
                        <p>These exercises can be structured in one of two ways</p>
                        <ModuleButtonModal type="2x2"/>
                    </div>
                    {/* Modal Button Section Start */}
                    {/* Text Section Start */}
                    <div className="textSection">
                        <div className="textSection__large">
                            <p>Important!</p>
                            <h1>Pay attention to the{window.innerWidth >900 ? <br />: " "}
                                tips provided to{window.innerWidth >900 ? <br />: " "}
                                deliver an excellent{window.innerWidth >900 ? <br />: " "}
                                written exercise{window.innerWidth >900 ? <br />: " "}</h1>
                        </div>
                        <div className="textSection__small">
                            <p>
                            In written exercises you will be given a large amount of information and are asked to produce a report and make specific recommendations.<br />
                            <span>••••••••••••••••••••••</span><br />
                            </p>
                        </div>
                    </div>
                    {/* Text Section End */}
                    {/* Competencies Section Start */}
                    <div className="intray">
                        <p>Written Exercise Example - In Tray Exercise</p>
                        <div className="intray__container">
                            <p>
                                Candidates are given a pile of documents outlining issues to be dealt with and actions to be taken requiring them to prioritise items and suggest what should be done.<br /><br />

                                The items are usually varied in number (10 to 30?), requiring a range of actions to be highlighted within a strict timescale. <br /><br />

                                Candidates may be required to make numerical calculations, draft written responses to documents, prioritise tasks and decide upon courses of action. <br /><br />


                                </p>
                        </div>
                    </div>
                    {/* Competencies Section End */}

                    {/* Do's and Don'ts Section Start */}
                    <div className="module__body__key">
                        <h1>Key Suggestions</h1>

                        <div>
                            <h2>Follow the Instrucitons</h2>
                            <p>Although it may sound obvious, study the instructions carefully and follow them exactly as they contain critical information for the successful completion of the exercise.
                            </p>
                        </div>
                        <div>
                            <h2>Monitor Time</h2>
                            <p>Time management is critical as you will have a number of items to action within a tight deadline.
                            </p>
                        </div>
                        <div>
                            <h2>Prioritise</h2>
                            <p>As prioritisation within the exercise is crucial ensure that you cover all items as those at the end may have a high priority. Running out of time and not dealing with later items can seriously impact your performance. Also, prioritise your time during the exercise. Items which are clearly of lower importance should receive as little time as possible, enabling you to concentrate on making the more important decisions and judgements. 
                            </p>
                        </div>
                        
                    </div>
                    {/* Do's and Don'ts Section End */}

                    {/* Activity Section Start */}
                    <div className="module__body__activity">
                        <h1>Now its time to work on your action plan</h1>
                        <p>Download the Module 6 activity sheet and work througb the exercised to be fully prepared for written exercises.</p>
                        <button onClick={() => { handleDownload(); }}>Download</button>
                    </div>
                    {/* Activity Section End */}
                </div>
            </div>
        </div>
    )
}

export default Module
