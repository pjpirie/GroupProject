<<<<<<< HEAD
import React from 'react';
import Eta from '../../../components/ETA/Eta';
import Feature1 from '../../../assets/v2/guidebean1.svg';
import Feature2 from '../../../assets/v2/guidebean2.svg';
import Feature3 from '../../../assets/v2/guidebean3.svg';
import ModuleLogo from '../ModuleLogo.js';
import '../ModuleGlobal.css';
import '../ModuleGlobal.responsive.css';
import './Module.scss';

function Module() {
    return (
        <div className="module1">
            <div className="module1__body">
                <div className="module1__body__top">
                    <h1>Course Guide</h1>
                    <p>Learn how to give yourself the best possible chance of taking the final step and justifying all your investment in order to reach your goal – <span>THE JOB.</span></p>
                    <p>The modules in this programme will give you practical guidance and tools to use in whatever form your assessment or selection process takes.</p>
                </div>
                <div className="module1__body__text">
                    <div className="module1__body__text__left">
                        <h4>Important!</h4>
                        <h3>Follow these steps in order to maximise the benefits of RSDP</h3>
                    </div>
                    <div className="module1__body__text__right">
                        <h3>1. Be sure to complete Module 1 Preparation. It will give you all the tips and tricks you need to be ready for your recruitment event.</h3>
                        <h3>2. Select the modules relevant to whatever recruitment process you are about to experience. Are you going to be doing a face to face interview? Or how about a Role Play exercise?</h3>
                    </div>
                </div>
                <div className="module1__body__beans">
                    <h1>How to complete a module</h1>
                        <div className="module1__body__beans__icons">
                            <div className="module1__body__beans__icons__img1"> 
                                <img src={Feature1} alt="Watch the video and take notes" />
                                <h4>Watch the video and take notes</h4>
                            </div>
                            <div className="module1__body__beans__icons__img2"> 
                                <img src={Feature2} alt="Review the Key Learning Points" className="module1__body__beans__icons__img2" />
                                <h4>Review the Key Learning Points</h4>
                            </div>
                            <div className="module1__body__beans__icons__img3"> 
                                <img src={Feature3} alt="Complete your Action Items" className="module1__body__beans__icons__img3" />
                                <h4>Complete your Action Items</h4>
                            </div>
                        </div>
                    </div>
                <div className="module1__body__tips">
                    <h1>Top Tips</h1>
                    <p>Access those areas of the programme which you wish to revise and reinforce. Focus on “Action Items” as these provide your Personal Action Plan. Remember RSDP can be used any number of times depending on your requirements.</p>
                </div>
            </div>
        </div>
    )
}

export default Module
=======
import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import '../ModuleGlobal.responsive.css';
import './Module.scss';
import RSDPModuleLogo from '../../../components/RSDPModuleLogo/RSDPModuleLogo';


function Module() {

    return (
        <div className="Module__Page__Wrapper">
            <RSDPModuleLogo/>
            <div className="Module__Page__Header__Modules">
                <div className="Module__Page__Header__Text">
                    <h3>Module 0</h3>
                    <h1>Course Guide</h1>
                </div>
                <Eta time={15} />
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/0" type="video/mp4"></source>
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
                </div>
            </div>
        </div>
    )
}

export default Module
>>>>>>> v2
