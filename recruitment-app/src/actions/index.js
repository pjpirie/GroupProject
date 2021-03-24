export const setLogged = (data) => {
    if(data){
        return {
            type: 'SIGN_IN'
        }
    }else{
        return {
            type: 'SIGN_OUT'
        }
    }
}
export const isLogged = () => {
    return {
        type: 'CHECK'
    }
}

export const setLightNav = (data) => {
    if(data){
        return {
            type: 'LIGHT'
        }
    }else{
        return {
            type: 'DARK'
        }
    }
}

export const isLightNav = () => {
    return {
        type: 'CHECK'
    }
}



export const setMainNav = (data) => {
    if(data){
        return {
            type: 'MAIN'
        }
    }else{
        return {
            type: 'ALT'
        }
    }
}

export const isMainNav = () => {
    return {
        type: 'CHECK'
    }
}

export const setSideNavOpen = (data) => {
    if(data){
        return {
            type: 'OPEN'
        }
    }else{
        return {
            type: 'CLOSED'
        }
    }
}
export const isSideNavOpen = () => {
    return {
        type: 'CHECK'
    }
}