import React, { Fragment } from 'react'
import './ModuleStartCard.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function ModuleStartCard() {
    return (
        <Fragment>
            <span className="tab1"></span>
            <span className="tab2"></span>
            <span className="tab3"></span>
            <div className="module__start__section">
                <h2>Module Start</h2>
                <p>Sign up using your email address and be presented with your very own learning journey. Begin by watching the module video scenario and listening to the audio commentary.</p>
                <button>Next Step <ArrowForwardIcon /></button>
            </div>
        </Fragment>
    )
}

export default ModuleStartCard;
