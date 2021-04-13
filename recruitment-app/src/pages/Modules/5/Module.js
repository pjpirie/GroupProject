import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.css';


function Module() {

    const handleDownload = () => {
        alert("//TODO Download");
    };
    return (
        <div className="Module__Page__Wrapper">
            <div className="Module__Page__Header__Modules">
                <div className="Module__Page__Header__Text">
                    <h3>Module 4</h3>
                    <h1>Group Exercise</h1>
                </div>
                <Eta time={15}/>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/4" type="video/mp4"></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p>
                    This is a discussion exercise in which a small group of candidates are given a topic to discuss and reach a team conclusion within a given timescale.  <br />
                    <br />
                    These exercises can be structured in one of two ways: <br />
                    1)	Assigned Roles: Each person is given relevant details of the scenario to be addressed together with an outline of his/her remit in the organisation with a few indicators of their position in relation to the topic being addressed. <br />
                    <br />
                    2)	Unassigned Roles:  <br />Each person is given relevant details of the scenario to be addressed and everyone in the group is free to deal with matters arising in whatever way they wish.
                    In either structure candidates may be given a specified period for individual preparation or they may be directed to start the discussion immediately. <br />
                    <br />
                    The team discussion will be observed by assessors positioned around the room, scoring one or two candidates each against a number of performance criteria such as communications, persuasiveness, teamwork, leadership. <br />
                    <br />
                    Assessors will be looking for candidates to demonstrate competencies such as: <br />
                    <br />
                    •	Effective communication <br />
                    •	Constructive team behaviours <br />
                    •	Confident and assertive delivery of key messages <br />
                    •	Focus on team goals <br />
                    •	Awareness of time <br />


                    </p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Key Learning Points</h2>
                    <p>Consequently, participants should focus on doing/not doing the following:</p>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Do:</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                            - Be clear and concise when you speak. Ensure that you make eye contact with all of your colleagues in the team. <br />
                            <br />
                            - Ensure that your contributions are consistently constructive.  <br />
                            <br />
                            - Try to ensure that everybody in the group has opportunities to contribute. If necessary ask quieter members for their thoughts or opinions <br />
                            <br />
                            - Check how others are reacting to your contributions and adjust accordingly. For example, if people look disinterested or bored, change your style or stop talking. <br />
                            <br />
                            - If necessary be prepared to stand up for yourself and argue why your opinions are valid using conciliatory language. <br />
                            <br />
                            - Keep the group focused on reaching a conclusion. If necessary take on the role of timekeeper reminding your colleagues of the time at regular intervals. <br />


                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>Don't:</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                            - Do not interrupt or speak over others <br />
                            <br />
                            - Don’t criticise or moan. <br />
                            <br />
                            - Do not dominate the meeting. <br />
                            <br />
                            - Do not remain quiet for long periods. Even when you are not speaking, demonstrate your involvement through active body language (eye contact, nodding, etc.) <br />
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
