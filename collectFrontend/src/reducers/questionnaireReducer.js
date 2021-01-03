import { GET_ALL_QUESTIONNAIRES, GET_QUESTIONNAIRE_BY_ID, OPEN_EDIT_QUESTIONAIRE_MODAL } from "../actions/types";

const initialState = {
    allQuestionnaires: [],
    questionnaire: {},
    open:false
};


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_ALL_QUESTIONNAIRES:
            return {
                ...state,
                allQuestionnaires: action.payload
            };

        case GET_QUESTIONNAIRE_BY_ID:
            return {
                ...state,
                questionnaire: action.payload
            };
            case OPEN_EDIT_QUESTIONAIRE_MODAL:
                return {
                    ...state,
                    open: action.payload
                };
        default:
            return state
    }
}

