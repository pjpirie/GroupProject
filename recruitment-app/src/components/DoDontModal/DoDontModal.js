import React, { Fragment, useState, useEffect } from 'react';
import './DoDontModal.scss';
import CloseButtonImage from '../../assets/1x/cross.png';
import GreenTickImage from '../../assets/1x/GreenTick.png';
import GreenCrossImage from '../../assets/1x/GreenCross.png';
import WhiteTickImage from '../../assets/1x/WhiteTick.png';
import WhiteCrossImage from '../../assets/1x/WhiteCross.png';

const DoDontModal = (props) => {

    const [Modal1Open, setModal1Open] = useState(false);
    const [Modal2Open, setModal2Open] = useState(false);

    
    return (
        <div className="DoDontModal">
            <div className="DoDontModal__buttons">
                <button className={Modal1Open ? "active" : ""} btnID="1" onClick={ () => {setModal2Open(false); setModal1Open(!Modal1Open)} }><img src={Modal1Open ? (WhiteTickImage) : (GreenTickImage)}/>DO'S</button>

                <button className={Modal2Open ? "active" : ""} btnID="2" onClick={ () => { setModal1Open(false); setModal2Open(!Modal2Open)} }><img src={Modal2Open ? (WhiteCrossImage) : (GreenCrossImage)}/>DON'TS</button>
            </div>
            {
                (Modal1Open || Modal2Open) ? (

            <div className={(Modal1Open || Modal2Open) ? "DoDontModal__modal active" : "DoDontModal__modal"} >
                {
                    Modal1Open ? (
                        <Fragment>
                            <div className={Modal1Open ? "active" : ""} onClick={() => {setModal1Open(false)}}>
                                {/* <CloseIcon /> */}
                                <img src={CloseButtonImage} alt="Close Button"/>
                            </div>
                            <p textID="1">
                                - Be clear and concise when you speak. Ensure that you make eye contact with all of your colleagues in the team. <br /><br />

                                - Ensure that your contributions are consistently constructive. <br /><br />

                                - Try to ensure that everybody in the group has opportunities to contribute. If necessary ask quieter members for their thoughts or opinions<br /><br />

                                - Check how others are reacting to your contributions and adjust accordingly. For example, if people look disinterested or bored, change your style or stop talking.<br /><br />

                                - If necessary be prepared to stand up for yourself and argue why your opinions are valid using conciliatory language.<br /><br />

                                - Keep the group focused on reaching a conclusion. If necessary take on the role of timekeeper reminding your colleagues of the time at regular intervals.<br /><br />


                            </p>
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
                            <p textID="2">
                                - Do not interrupt or speak over others<br /><br />

                                - Don’t criticise or moan.<br /><br />

                                - Do not dominate the meeting. <br /><br />

                                - Do not remain quiet for long periods. Even when you are not speaking, demonstrate your involvement through active body language (eye contact, nodding, etc.)<br /><br />
                            </p>
                        </Fragment>

                    ): (null)
                }   

                
            </div>
                ): ("")
            }
        </div>
    );
}

export default DoDontModal;
