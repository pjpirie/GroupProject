import Laptop from '../../assets/laptop-module.png';
import Room from '../../assets/modules-bottom.png';
import ModuleImg1 from '../../assets/Image-3.png';
import ModuleImg2 from '../../assets/Image-4.png';
import ModuleImg3 from '../../assets/Image-2.png';
import ModuleImg4 from '../../assets/Image-1.png';
import ModuleImg5 from '../../assets/Image-5.png';
import ModuleImg6 from '../../assets/Image-6.png';
import Feature3 from '../../assets/v2/feature1.svg';
import Feature1 from '../../assets/v2/feature2.svg';
import Feature2 from '../../assets/v2/feature3.svg';

import './Module.scss'

function Module() {
    return (
        <div className="modulefront">
            <div className="modulefront__head">
                <div className="modulefront__head__left">
                    <h4 className="modulefront__head__left__h4">About Our Program</h4>
                    <h3 className="modulefront__head__left__h3">The first step is achieving your goals.</h3>
                </div>
                <div className="modulefront__head__right">
                    <img src={Laptop} alt="alt tag" className="modulefront__head__right__img" />
                </div>
            </div>
            <div className="modulefront__body">
                <div className="modulefront__body__banner">
                    <img src={Room} alt="Room" className="modulefront__body__banner__img" />
                    <div className="modulefront__body__banner__shape">
                        <p className="modulefront__body__banner__shape__text">Our Recruitment Skills Development Programme is the product of repeated exposure to candidates who have under- performed due to the absence of recruitment skills, techniques and targeted preparation. This Programme is designed to provide a straightforward means to enhance your chances of success by applying relevant learning in a structure focused on your specific situation.</p>
                    </div>
                </div>
                <div className="modulefront__body__modules">
                    <h1>Prepare to Succeed <span> <br />with these Modules</span></h1>
                    <div className="modulefront__body__modules__list">
                        <div className="modulefront__body__modules__list__first">
                            <div className="modulefront__body__modules__list__first__left">
                                <h3>MODULE ONE</h3>
                                <h2>Preparation</h2>
                                <p>This module provides the starting point as you prepare for a recruitment event. It covers topics such as what areas to research, personal preparations you should make such as logistics, travel arrangements etc. and suggestions on how to enhance your confidence before such an important event.</p>
                            </div>
                            <div className="modulefront__body__modules__list__first__right">
                                <img src={ModuleImg1} alt="Room" className="" />
                                <div className="modulefront__body__modules__list__first__right__shape"></div>
                            </div>
                        </div> 
                        <div className="modulefront__body__modules__list__second">
                            <div className="modulefront__body__modules__list__second__left">
                                <img src={ModuleImg2} alt="Room" className="" />
                                <div className="modulefront__body__modules__list__second__left__shape"></div>
                            </div>
                            <div className="modulefront__body__modules__list__second__right">
                                <h3>MODULE TWO</h3>
                                <h2>Interview (Face to Face)</h2>
                                <p>In face to face interviews what behaviours and techniques should you display. You are also shown how to deal with the different kinds of questions used by interviewers.</p>
                            </div>
                        </div> 
                        <div className="modulefront__body__modules__list__first">
                            <div className="modulefront__body__modules__list__first__left">
                                <h3>MODULE THREE</h3>
                                <h2>Interview (Virtual/Remote)</h2>
                                <p>In this module you are taken through techniques and processes specific to virtual/remote interviews conducted online which have become increasingly common. Both live and pre-recorded versions are explored.</p>
                            </div>
                            <div className="modulefront__body__modules__list__first__right">
                                <img src={ModuleImg3} alt="Room" className="" />
                                <div className="modulefront__body__modules__list__first__right__shape"></div>
                            </div>
                        </div> 
                        <div className="modulefront__body__modules__list__second">
                            <div className="modulefront__body__modules__list__second__left">
                                <img src={ModuleImg4} alt="Room" className="" />
                                <div className="modulefront__body__modules__list__second__left__shape"></div>
                            </div>
                            <div className="modulefront__body__modules__list__second__right">
                                <h3>MODULE THREE</h3>
                                <h2>Group Exercise</h2>
                                <p>This module describes possible structures for group exercises, what is usually being assessed and key do’s and don’ts for participants.</p>
                            </div>
                        </div> 
                        <div className="modulefront__body__modules__list__first">
                            <div className="modulefront__body__modules__list__first__left">
                                <h3>MODULE FIVE</h3>
                                <h2>Role Play</h2>
                                <p>Possible scenarios utilised in role-plays are highlighted. The module also covers effective preparation and relevant techniques to use during the exercise.</p>
                            </div>
                            <div className="modulefront__body__modules__list__first__right">
                                <img src={ModuleImg5} alt="Room" className="" />
                                <div className="modulefront__body__modules__list__first__right__shape"></div>
                            </div>
                        </div> 
                        <div className="modulefront__body__modules__list__second"> 
                            <div className="modulefront__body__modules__list__second__left">
                                <img src={ModuleImg6} alt="Room" className="" />
                                <div className="modulefront__body__modules__list__second__left__shape"></div>
                            </div>
                            <div className="modulefront__body__modules__list__second__right">
                                <h3>MODULE SIX</h3>
                                <h2>Written Exercise</h2>
                                <p>This module covers both analysis reports and “in tray exercises” where the candidate is asked to prioritise a range of events and propose solutions.</p>
                            </div>
                        </div> 
                    </div>
                    <div className="modulefront__body__modules__features">
                        <h3>FEATURES</h3>
                        <h1>Featured in Each Module</h1>
                        <div className="modulefront__body__modules__features__icons">
                            <div> 
                                <img src={Feature1} alt="Video" className="modulefront__body__modules__features__icons__img1" />
                                <h4 className="modulefront__body__modules__features__icons__heading1">Video with Audio Commentary</h4>
                            </div>
                            <div>
                                <img src={Feature2} alt="Video" className="modulefront__body__modules__features__icons__img2" />
                                <h4 className="modulefront__body__modules__features__icons__heading2">Key Learning Points</h4>
                            </div>
                            <div>
                                <img src={Feature3} alt="Video" className="modulefront__body__modules__features__icons__img3" />
                                <h4 className="modulefront__body__modules__features__icons__heading3">Action Items</h4>
                            </div>
                        </div>
                    </div>
                    <div className="modulefront__body__modules__quote">
                        <div className="modulefront__body__modules__quote__mark" />
                        <h2>“ This programme is designed to provide a template for you to access skills and techniques and target these on achieving your goal of succeeding in recruitment situations. ”</h2>
                        <h3>Vince Coogans</h3>
                        <h4>Director XPC International Ltd.</h4>
                    </div>
                    <div className="modulefront__body__modules__bottom">
                        <h1>Ready to begin your journey to success?</h1>
                        <input type="button" value="Lets Go! 👍" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Module