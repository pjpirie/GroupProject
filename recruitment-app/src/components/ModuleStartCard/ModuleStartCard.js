import React, { Fragment } from 'react'
import './ModuleStartCard.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function ModuleStartCard(props) {
    if(props.state == 1){
        return (
            <Fragment>
            <span className="tab1" style={{ backgroundColor: '#565788'}}></span>
            <span className="tab2" style={{ backgroundColor: '#8588A1'}}></span>
            <span className="tab3" style={{ backgroundColor: '#BCBDC7'}}></span>
                <div className="module__start__section">
                    <h2>Module Start</h2>
                    <p>Sign up using your email address and be presented with your very own learning journey. Begin by watching the module video scenario and listening to the audio commentary.</p>
                    <button onClick={() => props.setState(2)}>Next Step <ArrowForwardIcon /></button>
                </div>
            <span className="progress__bar">
                <span className="progress__bar__level" style={{ width: '33%'}}></span>
            </span>
            </Fragment>
        );
    }else if(props.state == 2){
        return (
            <Fragment>
            <span className="tab1" style={{ backgroundColor: '#BCBDC7'}}></span>
            <span className="tab2" style={{ backgroundColor: '#565788'}}></span>
            <span className="tab3" style={{ backgroundColor: '#8588A1'}}></span>
                <div className="module__start__section">
                    <h2>Learning Points</h2>
                    <p>Expand on what you learned through watching the module video by reading through the module learning points and content.</p>
                    <button onClick={() => props.setState(3)}>Next Step <ArrowForwardIcon /></button>
                </div>
            <span className="progress__bar">
                <span className="progress__bar__level" style={{ width: '66%'}}></span>
            </span>
            </Fragment>
        );
    }else if(props.state == 3){
        return (
            <Fragment>
            <span className="tab1" style={{ backgroundColor: '#8588A1'}}></span>
            <span className="tab2" style={{ backgroundColor: '#BCBDC7'}}></span>
            <span className="tab3" style={{ backgroundColor: '#565788'}}></span>
                <div className="module__start__section">
                    <h2>Action Items</h2>
                    <p>Your specific actions to apply your learning to enhance your prospects of success. You can save, download and print this material as your Personal Project Plan.</p>
                    <button onClick={() => alert("TODO: redirect to correct page")}>Start <ArrowForwardIcon /></button>
                </div>
            <span className="progress__bar">
                <span className="progress__bar__level" style={{ width: '100%'}}></span>
            </span>
            </Fragment>
        );
    }else{
        return (
            <Fragment>
            <span className="tab1" style={{ backgroundColor: '#565788'}}></span>
            <span className="tab2" style={{ backgroundColor: '#8588A1'}}></span>
            <span className="tab3" style={{ backgroundColor: '#BCBDC7'}}></span>
                <div className="module__start__section">
                    <h2>Module Start</h2>
                    <p>Sign up using your email address and be presented with your very own learning journey. Begin by watching the module video scenario and listening to the audio commentary.</p>
                    <button onClick={() => props.setState(2)}>Next Step <ArrowForwardIcon /></button>
                </div>
            <span className="progress__bar">
                <span className="progress__bar__level" style={{ width: '33%'}}></span>
            </span>
            </Fragment>
        );
    }
}

export default ModuleStartCard;
