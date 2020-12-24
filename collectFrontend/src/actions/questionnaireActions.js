import axios from "axios";


import { GET_ERRORS, GET_PROJECT_TASKS , DELETE_PROJECT_TASK, GET_PROJECT_TASK_BY_ID} from "./types";

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

