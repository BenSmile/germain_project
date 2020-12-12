import React, {useEffect} from 'react'

import {addQuestionnaire} from "../../context/actions/questionnaire"

function CreateQuestionniareComponent() {

    useEffect(() => {
        addQuestionnaire();
    }, [])
    return (
        <div>
            <h1>Crate questionnaire</h1>
        </div>
    )
}

export default CreateQuestionniareComponent
