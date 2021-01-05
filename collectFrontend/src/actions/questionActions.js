import axios from "axios";


import { GET_ERRORS, GET_ALL_QUESTIONNAIRES, GET_QUESTIONNAIRE_BY_ID } from "./types";

const QUESTION_BASE_URI = "http://127.0.0.1:8080/api/question/";




export const addQuestion = (payload) => async dispatch => {

    console.log('payload', payload)
    try {
        await axios.post(QUESTION_BASE_URI, payload);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
        // history.push("/");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

// export const addQuestionnaire = (payload, history) => async dispatch => {
//     try {
//         await axios.post(QUESTION_BASE_URI, payload);
//         dispatch({
//             type: GET_ERRORS,
//             payload: {}
//         })
//         history.push("/");
//     } catch (error) {
//         dispatch({
//             type: GET_ERRORS,
//             payload: error.response.data
//         })
//     }
// }