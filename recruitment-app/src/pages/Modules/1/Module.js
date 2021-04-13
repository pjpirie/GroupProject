import React from 'react';
import Video from '../../../assets/testVideo.mp4';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import '../ModuleGlobal.responsive.css';
import './Module.css';


function Module() {

    const handleDownload = () => {
        // alert();

    };
    return (
        <div className="Module__Page__Wrapper">
            <div className="Module__Page__Header__Modules">
                <div className="Module__Page__Header__Text">
                    <h3>Module 0</h3>
                    <h1>Course Guide</h1>
                </div>
                <Eta time={15}/>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video" autoplay>
                        <source src={Video}></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p> */}
                </div>
                <div className="Module__Page__LearningPoints mod1">
                    <h2>Key Learning Points</h2>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Steps to maximise the benefits of RSDP</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                                1. Complete Module 1 Preparation.<br />
                                2. Select those modules which relate to the recruitment process you will be experiencing, e.g. Face to Face Interview + Role Play.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>How to complete a module</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                                1. Activate a video and listen to audio.<br />
                                2. Access “Key Learning Points”<br />
                                3. Complete Action Items</p>
                        </div>
                    </div>
                </div>
                <div className="Module__Page__Activity__Container">
                    <div className="Module__Page__Activity__Header">
                        {/* <h2>Activity</h2> */}
                    </div>
                    <div className="Module__Page__Activity__Body">
                        <p>
                            Access those areas of the programme which you wish to revise and reinforce.<br /> Focus on “Action Items” as these provide your Personal Action Plan.<br />
                            Remember RSDP can be used any number of times depending on your requirements.</p>
                    </div>
                </div>
                <div className="Module__Page__Btn__Container">
                    <button onClick={handleDownload()}>Download</button>
                </div>
            </div>      
        </div>
    )
}

export default Module
