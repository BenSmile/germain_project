import axios from "axios";


import { GET_ERRORS, GET_ALL_QUESTIONNAIRES, GET_QUESTIONNAIRE_BY_ID, OPEN_EDIT_QUESTIONAIRE_MODAL } from "./types";

const QUESTIONNAIRE_BASE_URI = "http://127.0.0.1:8080/api/questionnaire/";


export const addQuestionnaire = (questionnaire, history) => async dispatch => {
    try {
        await axios.post(QUESTIONNAIRE_BASE_URI, questionnaire);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
        history.push("/");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getAllQuestionnaires = () => async dispatch => {

    const res = await axios.get(QUESTIONNAIRE_BASE_URI);
    console.log('res', res.data)
    dispatch({
        type: GET_ALL_QUESTIONNAIRES,
        payload: res.data
    })
}

export const getQuestionnaireById = (questionnaireId, history) => async dispatch => {
    console.log("DDDDDDDDDDDDD " + questionnaireId)
    try {
        const res = await axios.get(`${QUESTIONNAIRE_BASE_URI}\\${questionnaireId}`);

        console.log('res', res)
        dispatch({
            type: GET_QUESTIONNAIRE_BY_ID,
            payload: res.data
        })
    } catch (error) {
        console.log('error', error)
        // history.push("/")
    }
}



export const handleUpdateQuestionaireModal = (data) => async dispatch => {
    console.log("DDDDDDDDDDDDD " + data)
    try {
        // const res = await axios.get(`${QUESTIONNAIRE_BASE_URI}\\${questionnaireId}`);

        // console.log('res', res)
        dispatch({
            type: OPEN_EDIT_QUESTIONAIRE_MODAL,
            payload: data
        })
    } catch (error) {
        console.log('error', error)
        // history.push("/")
    }
}

// export const getQuestionnaireByCode = (questionnaireCode, history) => async dispatch => {
//     console.log("DDDDDDDDDDDDD " + pt_id)
//     try {
//         const res = await axios.get(`http://localhost:8080/api/board/${pt_id}`);
//         dispatch({
//             type: GET_PROJECT_TASK_BY_ID,
//             payload: res.data
//         })
//     } catch (error) {
//         history.push("/")
//     }
// }



