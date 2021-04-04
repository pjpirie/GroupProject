import './ModuleModal.css'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import CourseGuideImage from '../../assets/CourseGuideImage.png';
import { useSelector,useDispatch } from 'react-redux';
import {setRedirect} from '../../actions';



function ModuleModal(props) {
    
const dispatch = useDispatch();
const [ModuleInfo, setModuleInfo] = useState({
    title: 'Loading...',
    number: props.number,
    description: 'Loading...',
    learningPoints: ['Loading...','Loading...','Loading...']
});

    const getModuleInfo = async (number) => {
        return await fetch(`/module/${number}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => setModuleInfo(data));
    }
    
    useEffect(() => {
        console.log(props.number)
        getModuleInfo(props.number);
    },[])

    
    return (
        <div className="ModuleTree__Modal ModuleTree__Modal--Mod7">
            <div className="ModuleTree__Modal__Header">
                <img src={CourseGuideImage} alt="placeholder" />
                <div className="ModuleTree__Modal__Header__Text">
                    <div className="ModuleTree__Modal__Header__Text__Main">
                    <h3>{ModuleInfo.title ?? "Loading..."}</h3>   
                    <CloseIcon className="MouleModal__Close__btn" onClick={() => {props.modalOpen(false)}}/>
                    </div>
                    <p>{ModuleInfo.description ?? "Loading..."}</p>
                </div>
            </div>
            <div className="ModuleTree__Modal__Body">
                <div className="ModuleTree__Modal__LearningPoints">
                <div className="ModuleTree__Modal__Point">
                    <h4>01</h4>
                    <p>{ModuleInfo.learningPoints[0] ?? "Loading..."}</p>
                </div>
                <div className="ModuleTree__Modal__Point">
                    <h4>02</h4>
                    <p>{ModuleInfo.learningPoints[1] ?? "Loading..."}</p>
                </div>
                <div className="ModuleTree__Modal__Point">
                    <h4>03</h4>
                    <p>{ModuleInfo.learningPoints[2] ?? "Loading..."}</p>
                </div>
            </div>
                <div className="ModuleTree__Modal__ButtonContainer">
                    <button className="ModuleModal__btn" onClick={() => { dispatch(setRedirect(true, `/module/${props.number}`))} }>Start</button>
                </div>
            </div>
        </div>

    )
    
}

export default ModuleModal;
