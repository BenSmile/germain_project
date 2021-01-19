import axios from "axios";


import { GET_ERRORS, LOGOUT_USER, GET_USER, GET_ALL_USERS, GET_ALL_INVESTIGATORS } from "./types";

const LOGIN_BASE_URI = "http://127.0.0.1:8080/api/users/login";
const USER_BASE_URI = "http://127.0.0.1:8080/api/users/";


export const loginUser = (credentials, history) => async dispatch => {
    try {
        // const res = await axios.post(LOGIN_BASE_URI, credentials);
        const res = await axios.post(`${USER_BASE_URI}/login`, credentials);

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

export const allUser = () => async dispatch => {
    try {
        const res = await axios.get(`${USER_BASE_URI}`);

        console.log('res', res.data)
      
        dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        })
        // history.push("/home");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}


export const allInvestigators = () => async dispatch => {
    try {
        const res = await axios.get(`${USER_BASE_URI}/invetigators`);

        console.log('res', res.data)
      
        dispatch({
            type: GET_ALL_INVESTIGATORS,
            payload: res.data
        })
        // history.push("/home");
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