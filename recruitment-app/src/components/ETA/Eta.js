import TimerIcon from '@material-ui/icons/Timer';
import React from 'react';

export default function Eta(props) {
    return (
        <div>
            <img src={TimerIcon} alt="Clock Icon" className="ETA__Icon"/>
            <div className="ETA__Text">
                <p>Est. Time</p>
                <h4>{props.time ?? 15} Minutes</h4>
            </div>
        </div>
    )
}
