import { useSelector } from 'react-redux';
import './ModulesCompleted.css';




function ModulesCompleted(props) {


    
    const UserData = useSelector(state => state.getAccount).user;
    console.log(UserData.modulesCompleted);

    const getPercentage = () =>{
        if(UserData.modulesCompleted.length == 1){
            if(UserData.modulesCompleted[0] == (""|| "{}")){
                return 0;
            }
            else{
                return (UserData.modulesCompleted.length / 7) * 100;
            }
        }else{
            return (UserData.modulesCompleted.length / 7) * 100;
        }

    }

    const getStyle = (theme) => {
        return theme === "dark" ? {color: 'rgba(0,0,0,1)'} : {color: 'rgba(255,255,255,1)'};
    }

    if(props.form === "bar"){
        return (
            <div className="ModulesCompleted">
                <div className="ModulesCompleted__container">
                        <h6 className="ModulesCompleted__text" style={getStyle(props.theme)}>{getPercentage()}% Completed</h6>
                        <span className="ModulesCompleted__progress__bar">
                            <span className="ModulesCompleted__progress__bar__level" style={{ width: '100%'}}></span>
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
                        <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <title>Layer 1</title>
                            <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ModulesCompleted;