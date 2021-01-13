import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectTaskReducer from "./projectTaskReducer";
import questionnaireReducer from "./questionnaireReducer";
import userReducer from "./userReducer";


export default combineReducers({
   errors: errorReducer,
   questionnaire: questionnaireReducer,
   user : userReducer
});


// export default combineReducers({
//    errors: errorReducer,
//    project_task: projectTaskReducer,
//    questionnaire: questionnaireReducer
// });