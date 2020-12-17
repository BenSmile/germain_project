import React, {useEffect} from 'react'

import {addQuestionnaire} from "../../context/actions/questionnaire"
import Header from '../../components/Header'
import CreateQuestionnaireUI from '../../layout/CreateQuestionnaire';
import useForm from './useForm';


function CreateQuestionniareComponent() {

    useEffect(() => {
        addQuestionnaire();
    }, [])
    return (
        <div>
      
            <CreateQuestionnaireUI form={useForm()}/>
        </div>
    )
}

export default CreateQuestionniareComponent
