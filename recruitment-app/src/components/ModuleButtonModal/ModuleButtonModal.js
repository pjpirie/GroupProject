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
                            } }>Read</button>

                        <button btnID="2" onClick={ () => { 
                            setModal1Open(false); 
                            setModal2Open(!Modal2Open);
                            setModal3Open(false);
                            setModal4Open(false);
                            } }>Manage Time</button>

                        <button btnID="3" onClick={ () => { 
                            setModal1Open(false); 
                            setModal2Open(false);
                            setModal3Open(!Modal3Open);
                            setModal4Open(false);
                            } }>Language</button>

                        <button btnID="4" onClick={ () => { 
                            setModal1Open(false); 
                            setModal2Open(false);
                            setModal3Open(false);
                            setModal4Open(!Modal4Open);
                            } }>Be Clear</button>
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
                                        <div onClick={() => {setModal1Open(false)}}>
                                            {/* <CloseIcon /> */}
                                            <img src={CloseButtonImage} alt="Close Button"/>
                                        </div>
                                        <p textID="1">Read through all of the information provided and identify the key points which you are asked to address. Highlight these and keep them visible as you prepare your answer, regularly checking that you are still on track and providing only relevant information.</p>
                                    </Fragment>

                                ): (null)
                            }
                            {
                                Modal2Open ? (
                                    <Fragment>
                                        <div onClick={() => {setModal2Open(false)}}>
                                            {/* <CloseIcon /> */}
                                            <img src={CloseButtonImage} alt="Close Button"/>
                                        </div>
                                        <p textID="2">Construct an outline plan. Allocate time limits for each part of your answer and regularly monitor your progress against these. Allow sufficient time at the end to check that you have done everything requested as you review your work checking spelling and grammar.
                                        </p>
                                    </Fragment>

                            ): (null)
                            }
                            {
                                Modal3Open ? (
                                    <Fragment>
                                        <div onClick={() => {setModal3Open(false)}}>
                                            {/* <CloseIcon /> */}
                                            <img src={CloseButtonImage} alt="Close Button"/>
                                        </div>
                                        <p textID="2">Use language which is straightforward, jargon free and provides the specific information which is being asked for.</p>
                                    </Fragment>

                            ): (null)
                            }
                            {
                                Modal4Open ? (
                                    <Fragment>
                                        <div onClick={() => {setModal4Open(false)}}>
                                            {/* <CloseIcon /> */}
                                            <img src={CloseButtonImage} alt="Close Button"/>
                                        </div>
                                        <p textID="2">Ensure that your conclusions and recommendations are specific and unambiguous.</p>
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
                                        <div onClick={() => {setModal1Open(false)}}>
                                            {/* <CloseIcon /> */}
                                            <img src={CloseButtonImage} alt="Close Button"/>
                                        </div>
                                        <p textID="1">Each person is given relevant details of the scenario to be addressed together with an outline of his/her remit in the organisation with a few indicators of their position in relation to the topic being addressed.</p>
                                    </Fragment>

                                ): (null)
                            }
                            
                            {
                                Modal2Open ? (
                                    <Fragment>
                                        <div onClick={() => {setModal2Open(false)}}>
                                            {/* <CloseIcon /> */}
                                            <img src={CloseButtonImage} alt="Close Button"/>
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
