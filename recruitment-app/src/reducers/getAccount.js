const getAccount = (state = false, action) => {
    switch(action.type){
        case "SET_ACCOUNT":
            return { account: true, user: action.user};
        case "UNSET_ACCOUNT":
            return false;
        case "CHECK":
            return state;
        default:
            return state;
    }
}

export default getAccount;