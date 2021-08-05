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

    
    return (
        <div className="ModuleButton">
            <div className="ModuleButton__buttons">

                { props.type === "2x2" ? (
                    <Fragment>
                        <button btnID="1" onClick={ () => { 
                            setModal1Open(!Modal1Open); 
                            setModal2Open(false);
                            setModal3Open(false);
                            setModal4Open(false);
                            } }>The Brief</button>

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
                ):(
                    <Fragment>
                        <button btnID="1" onClick={ () => {setModal1Open(!Modal1Open); setModal2Open(false)} }>Assigned Roles</button>

                        <button btnID="2" onClick={ () => { setModal1Open(false); setModal2Open(!Modal2Open)} }>Unassigned Roles</button>
                    </Fragment>
                )}
            </div>
            { props.type === "2x2" ? (
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
            ):(
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
            )}
            
        </div>
    );
}

export default ModuleButtonModal;
