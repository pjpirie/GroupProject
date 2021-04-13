import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.css';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download5', {
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
                    <h3>Module 5</h3>
                    <h1>Role Play</h1>
                </div>
                <Eta time={15}/>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/5" type="video/mp4"></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p>
                    Role plays simulate a range of scenarios depending on the job being filled. <br />
                    <br />
                    Examples:  <br />
                    •	Meeting a problematic supplier <br />
                    •	An angry customer <br />
                    •	A poor performing team member <br />
                    <br />
                    The candidate is given a brief with instructions to try to achieve a particular outcome. The role player has an outline to follow which is different from the one given to the candidate. The candidate has to negotiate an amicable resolution which achieves the goal(s) whilst placating the role player. <br />
                    <br />
                    The role player brief will test the candidate by raising challenging issues and they will respond according to how the candidate addresses these. Consequently, it is very important to respond to what the role player says and does whilst staying focused on the initial brief. A balanced approach together with demonstrating effective interpersonal skills is essential. <br />
                    <br />
                    During the preparation time it is important to consider the required outcome and how to deal with possible arguments the role player might use and their potential reactions to any proposals put forward.  Study the brief in detail and think about ways to achieve the outcome your character wants.  <br />
                    <br />
                    During the exercise the candidate will be assessed by the role player, an observer or the interaction will be recorded on camera. <br />
                    <br />
                    Adopt a positive and cheerful attitude at the outset and focus on establishing rapport with the role player. An amicable approach will come across well particularly if you still deal with difficult issues without coming over as angry or negative whilst attempting to resolve problems. Keep monitoring time in an unobtrusive way and make sure that you summarise the meeting whilst agreeing relevant next steps by the end of your allotted time.  <br />
                    <br />
                    Throughout the role play exercise don’t attempt to take on a different personality. The assessor wants to see how you will deal with the scenario utilising your skills and attitudes not by pretending to be someone else. <br />
                    </p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Key Learning Points</h2>
                    <p>During role play exercises there are a number of ‘do’s’ and ‘don’ts’ that you should keep in mind.</p>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Do: </h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                            -	Use the preparation time effectively by identifying key issues, anticipating possible   positions which the role player may take and preparing general reactions to these. <br />
                            -	Take time at the outset to build rapport with the role player by introducing yourself, asking about him/her before raising the issues in your brief <br />
                            -	Monitor time carefully but unobtrusively <br />
                            -	Listen “actively”. Show that you are listening. <br />
                            -	Summarise and outline next steps at the end of the meeting <br />
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>Don’t:</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>
                            -	Prepare a script <br />
                            -	Fake it by “acting out” characteristics which are not natural to you. <br />
                            -	Be drawn into negative arguments <br />
                            -	Avoid dealing with difficult issues <br />
                            -	End the meeting without agreeing a detailed action plan to be followed up by both individuals <br />
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>03</h4>
                            <h3>Learning Point 3</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
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
