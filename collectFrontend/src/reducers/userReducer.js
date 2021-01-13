import { GET_ALL_USERS, GET_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
    allUsers: [],
    user: {}
};


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_USER:
            return {
                ...state,
                user: action.payload
            };

        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: undefined
            };
        default:
            return state
    }
}
