import React from 'react';
import Video from '../../../assets/testVideo.mp4';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.css';


function Module() {
    return (
        <div className="Module__Page__Wrapper">
            <div className="Module__Page__Header">
                <h1>Course Guide</h1>
                <Eta time={15}/>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video">
                        <source src={Video}></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Learnging Point 1</h3>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>Learning Point 2</h3>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>03</h4>
                            <h3>Learning Point 3</h3>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Module
