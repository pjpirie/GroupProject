import React from 'react';
// import Eta from '../../../components/ETA/Eta';
import Feature1 from '../../../assets/v2/guidebean1.svg';
import Feature2 from '../../../assets/v2/guidebean2.svg';
import Feature3 from '../../../assets/v2/guidebean3.svg';
// import ModuleLogo from '../ModuleLogo.js';
import '../ModuleGlobal.css';
import '../ModuleGlobal.responsive.css';
import './Module.scss';
import RSDPModuleLogo from '../../../components/RSDPModuleLogo/RSDPModuleLogo';

function Module() {
    return (
        <div className="module1">
            <RSDPModuleLogo />
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
                        <h3>1. Be sure to complete Module 1 Preparation. It will give you all the tips and techniques you need to be ready for your recruitment event.</h3>
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