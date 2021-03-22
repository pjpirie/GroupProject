const IsLightNav = (state = false, action) => {
    switch(action.type){
        case "LIGHT":
            return true;
        case "DARK":
            return false;
        case "CHECK":
            return state;
        default:
            return state;
    }
}

export default IsLightNav;