import axiosInstance from "../../helpers/axios";


export const addQuestionnaire = (form)=> (dispatch) =>{
    console.log("payload = ", form)
    axiosInstance.post("/questionnaire/", form)
    .then(res => console.log("res", res))
    .catch(err => console.log("error = ", err))
};