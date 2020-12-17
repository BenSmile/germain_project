import { createContext, useReducer } from 'react';
import authinitialState from './intialstates/authinitialState';
import questionnaireinitialState from './intialstates/questionnaireinitialState';

import auth  from "./reducers/auth";
import questionnaire  from "./reducers/questionnaire";


export const GlobalContext = createContext({})
export const GlobalProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(auth, authinitialState);
    const [quesionnaireState, questionniareDispatch] = useReducer(questionnaire, questionnaireinitialState);

    return (
        <GlobalContext.Provider value={
            authState, authDispatch, quesionnaireState, questionniareDispatch
        }>
            {children}
        </GlobalContext.Provider>
    )
}