import { Button } from '@material-ui/core';
import Check from '@material-ui/icons/CheckCircleOutlineRounded';
import Bulb from '@material-ui/icons/EmojiObjects';
import Arrow from '@material-ui/icons/OpenWithRounded';
import Gear from '@material-ui/icons/Settings';
import Msg from '../../assets/FaceToFaceIcon.png';
import People from '../../assets/GroupIcon.png';
import ModuleImg4 from '../../assets/Image-1.png';
import ModuleImg3 from '../../assets/Image-2.png';
import ModuleImg1 from '../../assets/Image-3.png';
import ModuleImg2 from '../../assets/Image-4.png';
import ModuleImg5 from '../../assets/Image-5.png';
import ModuleImg6 from '../../assets/Image.png';
import ModuleBottom from '../../assets/modules-bottom.png';
import Clipboard from '../../assets/PrepIcon.png';
import Faces from '../../assets/RolePlayIcon.png';
import Laptop from '../../assets/VirtualIcon.png';
import Wheels from '../../assets/wheel.png';
import Pencil from '../../assets/WrittenIcon.png';
import './Module.css';






function Module() {
    return (
        <div className="Module__Page">
            <div className="Module__Page__Header">
                <div className='Module__Page__Header__Wheels' >
                    <img src={Wheels} alt="Recruitment Training User" />
                </div>
                <div className='Module__Page__Header__Text' >
                    <h1>Modules</h1>
                    <p>This Programme covers skills and techniques which will provide the framwork for you to showcase your personality and key attributes in most of the activities utilised in modern recruitment situations.
                    <br />
                    <br />
                    You can then personalise these by palnning for success by inputting "Action Items" specific to you.    
                    </p>
                    <Button className="Module__Page__Header__Text__btn" onClick={() => {alert("Todo Do something")}}>Start Now</Button>
                </div>
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Items">
                    {/* Item 1 Start */}
                    <div className="Module__Page__Item">
                        <div className="Module__Page__Item__Text">
                            <img src={Clipboard} alt="Preparation Module Icon"/>
                            <h2>Module 1 Preparation</h2>
                            <p>This module provides the starting point as you prepare for a recruitment event. It covers topics such as what areas to research, personal preparations you should make such as logistics, travel arrangements etc. and suggestions on how to enhance your confidence before such an important event.</p>
                        </div>
                        <div className="Module__Page__Item__Img">
                            <img src={ModuleImg1} alt="Preparation Module"/>
                        </div>
                    </div>
                    {/* Item 1 End */}
                    {/* Item 2 Start */}
                    <div className="Module__Page__Item">
                        <div className="Module__Page__Item__Text">
                            <img src={Msg} alt="Preparation Module Icon"/>
                            <h2>Module 2 Interview (Face to Face)</h2>
                            <p>In face to face interviews what behaviours and techniques should you display. You are also shown how to deal with the different kinds of questions used by interviewers.</p>
                        </div>
                        <div className="Module__Page__Item__Img">
                            <img src={ModuleImg2} alt="Preparation Module"/>
                        </div>
                    </div>
                    {/* Item 2 End */}
                    {/* Item 3 Start */}
                    <div className="Module__Page__Item">
                        <div className="Module__Page__Item__Text">
                            <img src={Laptop} alt="Preparation Module Icon"/>
                            <h2>Module 3 Interview (Virtual/Remote)</h2>
                            <p>In this module you are taken through techniques and processes specific to virtual/remote interviews conducted online which have become increasingly common. Both live and pre-recorded versions are explored.</p>
                        </div>
                        <div className="Module__Page__Item__Img">
                            <img src={ModuleImg3} alt="Preparation Module"/>
                        </div>
                    </div>
                    {/* Item 3 End */}
                    {/* Item 4 Start */}
                    <div className="Module__Page__Item">
                        <div className="Module__Page__Item__Text">
                            <img src={People} alt="Preparation Module Icon"/>
                            <h2>Module 4 Group Exercise</h2>
                            <p>This module describes possible structures for group exercises, what is usually being assessed and key do’s and don’ts for participants</p>
                        </div>
                        <div className="Module__Page__Item__Img">
                            <img src={ModuleImg4} alt="Preparation Module"/>
                        </div>
                    </div>
                    {/* Item 4 End */}
                    {/* Item 5 Start */}
                    <div className="Module__Page__Item">
                        <div className="Module__Page__Item__Text">
                            <img src={Faces} alt="Preparation Module Icon"/>
                            <h2>Module 5 Role Play </h2>
                            <p>Possible scenarios utilised in role-plays are highlighted. The module also covers effective preparation and relevant techniques to use during the exercise.</p>
                        </div>
                        <div className="Module__Page__Item__Img">
                            <img src={ModuleImg5} alt="Preparation Module"/>
                        </div>
                    </div>
                    {/* Item 5 End */}
                    {/* Item 6 Start */}
                    <div className="Module__Page__Item">
                        <div className="Module__Page__Item__Text">
                            <img src={Pencil} alt="Preparation Module Icon"/>
                            <h2>Module 6 Written Exercise</h2>
                            <p>This module covers both analysis reports and “in tray exercises” where the candidate is asked to prioritise a range of events and propose solutions.</p>
                        </div>
                        <div className="Module__Page__Item__Img">
                            <img src={ModuleImg6} alt="Preparation Module"/>
                        </div>
                    </div>
                    {/* Item 6 End */}
                </div>
                <div className="Module__Page__Quote">
                    <h3>
                    “ This programme is designed to provide a template 
                    for you to access skills and techniques and target 
                    these on achieving your goal of succeeding in 
                    recruitment situations. ”
                    </h3>
                    <div className="Module__Page__Quote__Image">
                        <img src={People} alt="Vince Coogans Avatar" />
                        <h3>Vince Coogans</h3>
                        <p>Director XPC International Ltd.</p>
                    </div>
                </div>
                <div className='Module__Page__About' >
                    <p>
                        Our Recruitment Skills Development Programme is the product of repeated exposure to candidates who have under- performed due to the absence of recruitment skills, techniques and targeted preparation. This Programme is designed to provide a straightforward means to enhance your chances of success by applying relevant learning in a structure focused on your specific situation.
                    </p>
                    <img src={ModuleBottom} alt="Meeting Room" />
                </div>
                <div className='Module__Page__CTA' >
                    <h1>Ready to begin your journey to success?</h1>
                    <Button />
                </div>
                <div className='Module__Page__Values' >
                    <h1>Our Core Values</h1>
                    <div className='Module__Page__Values__Items' >
                        <div className='Module__Page__Values__Item' >
                            <Check className="Module__Page__Values__Item--Check" />
                        </div>
                        <div className='Module__Page__Values__Item' >
                            <Arrow className="Module__Page__Values__Item--Arrow" />
                        </div>
                        <div className='Module__Page__Values__Item' >
                            <Gear className="Module__Page__Values__Item--Gear" />
                        </div>
                        <div className='Module__Page__Values__Item' >
                            <Bulb className="Module__Page__Values__Item--Bulb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Module;


