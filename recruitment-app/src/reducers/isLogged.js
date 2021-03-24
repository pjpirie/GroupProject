const isLogged = (state = false, action) => {
    switch(action.type){
        case "SIGN_IN":
            return true;
        case "SIGN_OUT":
            return false;
        case "CHECK_LOGGED":
            return state;
        default:
            return state;
    }
}

export default isLogged;