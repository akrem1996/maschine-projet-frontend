import {AuthActionsTypes} from "../Actions/authAction"

const initialState = {
    isRegistered: false,
    isLogged: false,
    error: false,
    token:"",
    user:{}   
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AuthActionsTypes.FETCH_SIGNUP:
            return {...state,isRegistered: true, user: action.data, error: false}
        case AuthActionsTypes.FETCH_LOGIN:
            return {isRegistered: true, isLogged:true, token: action.data, error: false, user: action.userState}
        case AuthActionsTypes.FETCH_ERROR:
            return { isRegistered: false, isLogged: false,error: true,  token:"",user:{}}
        default:
            return state;
    }

}

export default authReducer ;