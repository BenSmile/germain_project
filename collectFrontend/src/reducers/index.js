import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectTaskReducer from "./projectTaskReducer";
import questionnaireReducer from "./questionnaireReducer";


export default combineReducers({
   errors: errorReducer,
   project_task: projectTaskReducer,
   questionnaire: questionnaireReducer
});