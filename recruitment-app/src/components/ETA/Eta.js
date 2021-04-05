import TimerIcon from '@material-ui/icons/Timer';
import React from 'react';
import './Eta.css';

export default function Eta(props) {

    return (
        <div className="ETA__Container">
            <TimerIcon fontSize="large" />
            <div className="ETA__Text">
                <h6>Est. Time</h6>
                <h3>{props.time ?? 15} Minutes</h3>
            </div>
        </div>
    )
}
