import axios from "axios";


import { GET_ERRORS, LOGOUT_USER, GET_USER } from "./types";

const LOGIN_BASE_URI = "http://127.0.0.1:8080/api/users/login";


export const loginUser = (credentials, history) => async dispatch => {
    try {
        const res = await axios.post(LOGIN_BASE_URI, credentials);
        console.log('res', res.data)
        localStorage.setItem("user", JSON.stringify(res.data))

        dispatch({
            type: GET_USER,
            payload: res.data
        })
        history.push("/home");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const logoutUser = () => ({
    type: LOGOUT_USER,
    payload: undefined
})