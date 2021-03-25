import './ModulesCompleted.css'



function ModulesCompleted(props) {
    const getStyle = (theme) => {
        return theme === "dark" ? {color: 'rgba(0,0,0,1)'} : {color: 'rgba(255,255,255,1)'};
    }

    if(props.form === "bar"){
        return (
            <div className="ModulesCompleted">
                <div className="ModulesCompleted__container">
                        <h6 className="ModulesCompleted__text" style={getStyle(props.theme)}>20% Completed</h6>
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
                        <h6 className="ModulesCompleted__text" style={getStyle(props.theme)}>Pie Not Made Yet</h6>
                </div>
            </div>
        );
    }
    
}

export default ModulesCompleted;