import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRedirect } from '../../actions';
import Image from '../../assets/CourseGuideImage.png';
import Image2 from '../../assets/Image-1.png';
import Image3 from '../../assets/Image-2.png';
import Image4 from '../../assets/Image-3.png';
import Image5 from '../../assets/Image-4.png';
import Image6 from '../../assets/Image-5.png';
import Image1 from '../../assets/Image.png';
import './ModuleModal.css';
import './ModuleModal.responsive.css';




function ModuleModal(props) {
    

const UserData = useSelector(state => state.getAccount).user;
const dispatch = useDispatch();
const [ModuleInfo, setModuleInfo] = useState({
    title: 'Loading...',
    number: props.number,
    description: 'Loading...',
    learningPoints: ['Loading...','Loading...','Loading...']
});

    const getModuleInfo = async (number) => {
        return await fetch(`https://group-54-rct.herokuapp.com/module/${number}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => setModuleInfo(data));
    }

    

    async function completeModule(inData, moduleNumber) {
        return await fetch(`https://group-54-rct.herokuapp.com/user/moduleComplete/${moduleNumber}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inData)
        })
        .then(data => console.log(data));
    }
    
    useEffect(() => {
        console.log(props.number)
        getModuleInfo(props.number);
    },[])
    
    const getImg = (number) => {
        console.log(`[MODULE MODAL] NUMBER: ${number}`)
        switch(number) {
            case 1:
                return Image;
                break;
            case 2:
                return Image1;
                break;
            case 3:
                return Image2;
            break;
            case 4:
                return Image3;
            break;
            case 5:
                return Image4;
            break;
            case 6:
                return Image5;
            break;
            case 7:
                return Image6;
            break;
            default:
                return Image;
        } 
    }

    
    return (
        <div className="ModuleTree__Modal ModuleTree__Modal--Mod7">
            <div className="ModuleTree__Modal__Header">
                <img src={getImg(props.number)} alt="placeholder" />
                <div className="ModuleTree__Modal__Header__Text">
                    <div className="ModuleTree__Modal__Header__Text__Main">
                    <h3>{ModuleInfo.title ?? "Loading..."}</h3>   
                    <CloseIcon className="MouleModal__Close__btn" onClick={() => {props.modalOpen(false)}}/>
                    </div>
                    <p>{ModuleInfo.description ?? "Loading..."}</p>
                </div>
            </div>
            <div className="ModuleTree__Modal__Body">
                {/* <div className="ModuleTree__Modal__LearningPoints">
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
                </div> */}
                <div className="ModuleTree__Modal__ButtonContainer">
                    { UserData.modulesCompleted[props.number - 1]  ? (
                        <h6><DoneIcon fontSize="large" className="completed" /> Completed</h6>
                    ) : ( 
                        <h6><CloseIcon fontSize="large" className="not_completed"/> Not Completed</h6>
                    )}
                    <button className="ModuleModal__btn" onClick={() => { 
                        dispatch(setRedirect(true, `/module/${props.number}`));
                        if(UserData.paidAccess){
                            completeModule({email: UserData.email}, props.number);
                        }
                        } }>Start</button>
                </div>
            </div>
        </div>

    )
    
}

export default ModuleModal;
