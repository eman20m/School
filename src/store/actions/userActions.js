
import { generateToken } from "../../utils";
import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT

} from "../types/userConstants";


export const signin = (user) => async (dispatch) => {
    const token=generateToken(user.name, user.email, user.password);
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { name: user.name, email: user.email, token: token } });
    console.log('token: ',token);
    try {
        const data = { name: user.name, email: user.email, token: token};
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', data);
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const singout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_SIGNOUT});
}

