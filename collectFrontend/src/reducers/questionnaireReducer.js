import { GET_ALL_QUESTIONNAIRES, GET_QUESTIONNAIRE_BY_ID } from "../actions/types";

const initialState = {
    allQuestionnaires: [],
    questionnaire: {}
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
        default:
            return state
    }
}

