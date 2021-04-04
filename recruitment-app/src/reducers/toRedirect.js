const toRedirect = (state = false, action) => {
    switch(action.type){
        case "REDIRECT":
            return { redirect: true, location: action.location};
        case "STAY":
            return false;
        case "CHECK":
            return state;
        default:
            return state;
    }
}

export default toRedirect;