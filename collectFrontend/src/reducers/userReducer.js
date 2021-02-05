import { GET_ALL_USERS, GET_USER, LOGOUT_USER, GET_ALL_INVESTIGATORS } from "../actions/types";


const user = localStorage.getItem("user");

const initialState = {
    allUsers: [],
    user: user || {},
    investigators: []
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

        case GET_ALL_INVESTIGATORS:
            return {
                ...state,
                investigators: action.payload
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
