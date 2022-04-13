import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './ModulesCompleted.css';
import './ModulesCompleted.responsive.css';




function ModulesCompleted(props) {

    
    const [percentage, setPercentage] = useState(0.0);
    const UserData = useSelector(state => state.getAccount).user;
    // console.log(UserData.modulesCompleted);
    
    

    const getPercentage = () =>{
        let completedCount = 0;
        for(let i = 0; i < UserData.modulesCompleted.length; i++){
            if(UserData.modulesCompleted[i]){
                completedCount++;
            }
        }
        
        return Math.floor((completedCount / 7) * 100);
        }
        
    
    useEffect(() => {
        setPercentage(getPercentage());
    },[UserData])
    const getStyle = (theme) => {
        return theme === "dark" ? {color: 'rgba(0,0,0,1)'} : {color: 'rgba(255,255,255,1)'};
    }

    if(props.form === "bar"){
        return (
            <div className="ModulesCompleted__bar">
                <div className="ModulesCompleted__container__bar">
                        <h6 className="ModulesCompleted__text" style={getStyle(props.theme)}>{getPercentage()}% Completed</h6>
                        <span className="ModulesCompleted__progress__bar">
                            <span className="ModulesCompleted__progress__bar__level" style={{ width: `${getPercentage()}%`}}></span>
                        </span>
                </div>
            </div>
        );
    }else if(props.form === "pie"){
        return (
            <div className="ModulesCompleted">
                <div className="ModulesCompleted__container">
                    <div class="item html">
                        <h2 style={getStyle(props.theme)}>{getPercentage()}%</h2>
                        <svg height="20" width="20" viewBox="0 0 20 20">
                            <circle r="9" 
                                    cx="10" 
                                    cy="10" 
                                    fill="none" 
                                    stroke="#e0e0e0"
                                    strokeWidth="2"
                                    stroke-dasharray="285% 300%"
                                    />
                            <circle className="circle_animation"
                                    r="9" 
                                    cx="10" 
                                    cy="10" 
                                    fill="none" 
                                    stroke="#6fdb6f"
                                    strokeWidth="2"
                                    stroke-dasharray={`${percentage * 2.85}% 300%`}
                                    />
                        </svg>
                        {/* <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <title>Layer 1</title>
                            <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
                            </g>
                        </svg> */}
                    </div>
                </div>
            </div>
        );
    }
    
}

// 100% = 285%
// 
// 
// 
// 
// 
// 10% = 28.5%
// 1% = 2.85%
export default ModulesCompleted;