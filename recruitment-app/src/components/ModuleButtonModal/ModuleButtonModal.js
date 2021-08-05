import React, { Fragment, useState, useEffect } from 'react';
import './ModuleButtonModal.scss';
import CloseButtonImage from '../../assets/1x/closeicon.png';

const ModuleButtonModal = (props) => {

    const [Modal1Open, setModal1Open] = useState(false);
    const [Modal2Open, setModal2Open] = useState(false);
    const [Modal3Open, setModal3Open] = useState(false);
    const [Modal4Open, setModal4Open] = useState(false);

    const handleClick = () => {
        if(Modal1Open) setModal1Open(false);
        if(Modal2Open) setModal2Open(false);
    }

    switch(props.type){
        default:
            return(
                <div className="ModuleButton">
                    <div className="ModuleButton__buttons">
                        <Fragment>
                            <button btnID="1" onClick={ () => {setModal1Open(!Modal1Open); setModal2Open(false)} }>Assigned Roles</button>

                            <button btnID="2" onClick={ () => { setModal1Open(false); setModal2Open(!Modal2Open)} }>Unassigned Roles</button>
                        </Fragment>
                    </div>
                    <Fragment>
                {
                    (Modal1Open || Modal2Open) ? (

                        <div className="ModuleButton__modal">

                            {
                                Modal1Open ? (
                                    <Fragment>
                                        <div >
                                            {/* <CloseIcon /> */}
                                            <h3>Assigned Roles</h3>
                                            <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal1Open(false)}}/>
                                        </div>
                                        <p textID="1">Each person is given relevant details of the scenario to be addressed together with an outline of his/her remit in the organisation with a few indicators of their position in relation to the topic being addressed.</p>
                                    </Fragment>

                                ): (null)
                            }
                            
                            {
                                Modal2Open ? (
                                    <Fragment>
                                        <div>
                                            {/* <CloseIcon /> */}
                                            <h3>Unassigned Roles</h3>
                                            <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal2Open(false)}}/>
                                        </div>
                                        <p textID="2">Each person is given relevant details of the scenario to be addressed and everyone in the group is free to deal with matters arising in whatever way they wish. In either structure candidates may be given a specified period for individual preparation or they may be directed to start the discussion immediately.</p>
                                    </Fragment>

                                ): (null)
                            }

                            
                        </div>

                    ): ("")
                }
                </Fragment>
                </div>
            );
            break;

            case "1x3":
                return(
                    <div className="ModuleButton">
                        <div className={"ModuleButton__buttons__" + props.type}>
                            <Fragment>
                                <button btnID="1" onClick={ () => { 
                                    setModal1Open(!Modal1Open); 
                                    setModal2Open(false);
                                    setModal3Open(false);
                                    } }>Research</button>
    
                                <button btnID="2" onClick={ () => { 
                                    setModal1Open(false); 
                                    setModal2Open(!Modal2Open);
                                    setModal3Open(false);
                                    } }>Personal Prep</button>
    
                                <button btnID="3" onClick={ () => { 
                                    setModal1Open(false); 
                                    setModal2Open(false);
                                    setModal3Open(!Modal3Open);
                                    } }>Self Confidence </button>
                            </Fragment>
                        </div>
                        <Fragment>
                    {
                        (Modal1Open || Modal2Open || Modal3Open) ? (
                            <div className="ModuleButton__modal">
                                {
                                    Modal1Open ? (
                                        <Fragment>
                                        <div>
                                            {/* <CloseIcon /> */}
                                            <h3>Research</h3>
                                            <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal1Open(false)}}/>
                                        </div>
                                            <p textID="1">
                                                Use the internet, communications from the hiring organisation and any other sources to gather relevant information. Make sure you have a good understanding of the following:<br /><br />
                                                <strong>The organisation:</strong> The history and nature of the business<br />
                                                <strong>The job:</strong> What are my responsibities (What is expected of me)<br />
                                                <strong>The process:</strong>  What is the format? (Interview/Other exercises)<br />
                                                <strong>The attendees:</strong> Who will be present? (number of interviewers)<br />
                                                <strong>The necessities:</strong>  Am I expected to bring anything with me?<br />
                                            </p>
                                        </Fragment>
    
                                    ): (null)
                                }
                                {
                                    Modal2Open ? (
                                        <Fragment>
                                        <div>
                                            {/* <CloseIcon /> */}
                                            <h3>Personal Prep</h3>
                                            <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal2Open(false)}}/>
                                        </div>
                                            <p textID="2">
                                                Given the importance of the interview ensure that you give yourself plenty of time to arrive at the location, or indeed at the computer if the assessment has to be carried out remotely.<br /><br />

                                                Whether remote or face to face think about appropriate dress and overall appearance.
                                            </p>
                                        </Fragment>
    
                                ): (null)
                                }
                                {
                                    Modal3Open ? (
                                        <Fragment>
                                        <div>
                                            {/* <CloseIcon /> */}
                                            <h3>Self Confidence</h3>
                                            <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal3Open(false)}}/>
                                        </div>
                                            <p textID="2">
                                                Definition: “A feeling of trust in one’s abilities, qualities and judgement.” <br /><br />

                                                There are literally thousands of books, online resources and programmes on this subject. It is worth exploring this area.  
                                            </p>
                                        </Fragment>
    
                                ): (null)
                                }
                            </div>
                        ): ("")
                    }
                    </Fragment>
                    </div>
                );
                break;

        case "2x2":
            return(
                <div className="ModuleButton">
                    <div className="ModuleButton__buttons">
                        <Fragment>
                            <button btnID="1" onClick={ () => { 
                                setModal1Open(!Modal1Open); 
                                setModal2Open(false);
                                setModal3Open(false);
                                setModal4Open(false);
                                } }>The Brief test</button>

                            <button btnID="2" onClick={ () => { 
                                setModal1Open(false); 
                                setModal2Open(!Modal2Open);
                                setModal3Open(false);
                                setModal4Open(false);
                                } }>Role Play</button>

                            <button btnID="3" onClick={ () => { 
                                setModal1Open(false); 
                                setModal2Open(false);
                                setModal3Open(!Modal3Open);
                                setModal4Open(false);
                                } }>Preperation</button>

                            <button btnID="4" onClick={ () => { 
                                setModal1Open(false); 
                                setModal2Open(false);
                                setModal3Open(false);
                                setModal4Open(!Modal4Open);
                                } }>Observation</button>
                        </Fragment>
                    </div>
                    <Fragment>
                {
                    (Modal1Open || Modal2Open || Modal3Open || Modal4Open) ? (
                        <div className="ModuleButton__modal">
                            {
                                Modal1Open ? (
                                    <Fragment>
                                    <div>
                                        {/* <CloseIcon /> */}
                                        <h3>The Brief</h3>
                                        <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal1Open(false)}}/>
                                    </div>
                                        <p textID="1">The candidate is given a brief with instructions to try to achieve a particular outcome. The role player has an outline to follow which is different from the one given to the candidate. The candidate has to negotiate an amicable resolution which achieves the goal(s) whilst placating the role player.</p>
                                    </Fragment>

                                ): (null)
                            }
                            {
                                Modal2Open ? (
                                    <Fragment>
                                    <div>
                                        {/* <CloseIcon /> */}
                                        <h3>Role Play</h3>
                                        <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal2Open(false)}}/>
                                    </div>
                                        <p textID="2">The role player brief will test the candidate by raising challenging issues and they will respond according to how the candidate addresses these. Consequently, it is very important to respond to what the role player says and does whilst staying focused on the initial brief. A balanced approach together with demonstrating effective interpersonal skills is essential.
                                        </p>
                                    </Fragment>

                            ): (null)
                            }
                            {
                                Modal3Open ? (
                                    <Fragment>
                                    <div>
                                        {/* <CloseIcon /> */}
                                        <h3>Preperation</h3>
                                        <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal3Open(false)}}/>
                                    </div>
                                        <p textID="2">During the preparation time it is important to consider the required outcome and how to deal with possible arguments the role player might use and their potential reactions to any proposals put forward.  Study the brief in detail and think about ways to achieve the outcome your character wants. 
                                        </p>
                                    </Fragment>

                            ): (null)
                            }
                            {
                                Modal4Open ? (
                                    <Fragment>
                                    <div>
                                        {/* <CloseIcon /> */}
                                        <h3>Observation</h3>
                                        <img src={CloseButtonImage} alt="Close Button" onClick={() => {setModal4Open(false)}}/>
                                    </div>
                                        <p textID="2">During the exercise the candidate will be assessed by the role player, an observer or the interaction will be recorded on camera.
                                        </p>
                                    </Fragment>

                            ): (null)
                            }
                        </div>
                    ): ("")
                }
                </Fragment>
                </div>
            );
            break;
    }
}

export default ModuleButtonModal;
