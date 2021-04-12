const getAlert = (state = false, action) => {
    switch(action.type){
        case "SET_ALERT":
            return { alert: true, AlertData: action.alert};
        case "UNSET_ALERT":
            return false;
        case "CHECK":
            return state;
        default:
            return state;
    }
}

export default getAlert;