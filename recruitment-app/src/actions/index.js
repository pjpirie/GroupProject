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