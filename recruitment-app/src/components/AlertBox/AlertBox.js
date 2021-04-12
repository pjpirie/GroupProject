import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions';
import './AlertBox.css';
import './AlertBox.responsive.css';

const AlertBox = (props) => {
    
    let data = props.AlertData;
    console.log(data)
    const dispatch = useDispatch();
    const audio = new Audio('../../assets/audio/alert.mp3');
    useEffect(() => {
        audio.play();
    },[])

    return (
        <div className="AlertBox" onClick={() => {dispatch(setAlert(false))}}>
            <div className="AlertBox__Container" onClick={(e) => {e.stopPropagation()}}>
                <div className='AlertBox__Header' >
                    <h3>{data.AlertTitle}</h3>
                    <CloseIcon className="AlertBox__Close" onClick={() => {dispatch(setAlert(false))}}/>
                </div>
                <div className='AlertBox__Body' >
                    <p>{data.AlertMessage}</p>
                </div>
            </div>
        </div>
    );
}

export default AlertBox;
