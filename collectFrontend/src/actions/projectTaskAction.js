import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS , DELETE_PROJECT_TASK, GET_PROJECT_TASK_BY_ID} from "./types";

const QUESTIONNAIRE_BASE_URI = "http://127.0.0.1:8080/api/questionnaire";

export const addProjectTask = (project_task, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/board", project_task);
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

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data
    })
}

export const deleteProjectTask = pt_id => async dispatch => {

    if (window.confirm(`You are deleting project task ${pt_id}, this action cannot be undone`)) {
        await axios.delete(`http://localhost:8080/api/board/${pt_id}`);
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: pt_id
        })
    }
}

export const getProjectTaskByID = (pt_id, history) => async dispatch => {
console.log("DDDDDDDDDDDDD "+pt_id)
     try {
        const res= await axios.get(`http://localhost:8080/api/board/${pt_id}`);
        dispatch({
            type: GET_PROJECT_TASK_BY_ID,
            payload: res.data
        })
     } catch (error) {
         history.push("/")
     }


}

