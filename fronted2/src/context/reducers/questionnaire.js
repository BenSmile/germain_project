import { QUESTIONNAIRE_CREATION_LOADING } from "../../constants/actionTypes";

const questionnaire = (state, action) => {

    switch(action.type){

        case QUESTIONNAIRE_CREATION_LOADING:
            return{
                ...state, addQuestionnaire:{
                    ...state.addQuestionnaire,
                    loading:true
                }
            }

        default:
            return state;
    }
}

export default questionnaire;