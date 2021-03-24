const isSideNavOpen = (state = true, action) => {
    switch(action.type){
        case "OPEN":
            return true;
        case "CLOSED":
            return false;
        case "CHECK":
            return state;
        default:
            return state;
    }
}

export default isSideNavOpen;