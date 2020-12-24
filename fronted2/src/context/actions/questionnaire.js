import { QUESTIONNAIRE_CREATION_LOADING } from "../../constants/actionTypes";
import axiosInstance from "../../helpers/axios";

import axios from "axios";


const QUESTIONNAIRE_API_BASE_URL = "http://127.0.0.1:8080/api/questionnaire/";




export const addQuestionnaire = (form)=> (dispatch) =>{

    // dispatch({
    //     type:QUESTIONNAIRE_CREATION_LOADING,
    // });
    console.log("payload = ", form)
    axiosInstance.post("/questionnaire/", form)
    .then(res => console.log("res", res))
    .catch(err => console.log("error = ", err))
};



// export const getQuestionnaires = () => (dispatch) =>{

//     // dispatch({
//     //     type:QUESTIONNAIRE_CREATION_LOADING,
//     // });
    
//     axiosInstance.get("/questionnaire/")
//     .then(res => console.log("res", res.data))
//     .catch(err => console.log("error = ", err))
// };


export const getQuestionnaires = ()  =>{

    // dispatch({
    //     type:QUESTIONNAIRE_CREATION_LOADING,
    // });

    return axios.get(QUESTIONNAIRE_API_BASE_URL)
    
//    return axiosInstance.get("/questionnaire/");
    // .then(res => {return res.data})
    // .catch(err => console.log("error = ", err))
};

