import axiosInstance from "../../helpers/axios";


export const addQuestionnaire = ()=>{
    axiosInstance.post("/questionnaire/")
    .then(res => console.log("res", res))
    .catch(err => console.log("error = ", err))
};