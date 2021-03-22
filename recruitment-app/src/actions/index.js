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