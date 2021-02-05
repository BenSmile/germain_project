import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1';

const Question = (props) => {

    const { q, i, disabled, reponses, setReponses, addResponse } = props;

   



    const [reponse, setReponse] = useState('')
    
    const [question, setQuestion] = useState(q)

    const [position, setPosition] = useState(0)

    const [index, setIndex] = useState(i)

    // useEffect(() => {
    //     console.log('question', question)
    // }, [])

    const onChange = (e) => {
        addResponse(e.target)
    }

    console.log(reponses)

    const DisplayOptions = (options, type) => {
        let forCheckbox = type === 'checkbox' ? '_'.concat(i) : '';
        let localtype = ''
        if (type == 'radio') {
            localtype = 'radio'
        } else if (type == 'checkbox') {
            localtype = 'checkbox'
        }

        console.log('i question :>> ', i);

        return options.map((option, index) =>
            <div className={`custom-control custom-${type}`}>
                <input disabled={disabled} className="custom-control-input" value={option} onChange={onChange} type={type} id={`${type}_${i}_${index}`} name={`${type}_${i}${type === 'checkbox' ? '/'.concat(index):''}`} />
                <label htmlFor={`${type}_${i}_${index}`} className="custom-control-label" value={option}>{option}</label>
            </div>
        )
    }

    const DisplayComp = question => {
        var answer_array = []

        if (question.suggestions) {
            answer_array = question.suggestions.split('\n');
            // console.log("###### options = ", answer_array.length)
        }


        if (question.type == "text") {
            return (
                <div className="form-group" onChange={onChange}>
                    <label htmlFor={`${question.type}_${i}`} htmlFor="exampleInputEmail1">{`${question.id}. ${question.titre}`}</label>
                    <input name={`${question.type}_${i}`} disabled={disabled} type={question.type} className="form-control" id="exampleInputEmail1" placeholder={question.titre} />
                </div>
            )
        }

        if (question.type == "radio") {
            let type = "radio"
            // console.log("options =========== ", answer_array)
            return (
                <div className="form-group">
                    <label>{`${question.id}. ${question.titre}`}</label>
                    <div className="form-group">
                        {DisplayOptions(answer_array, type)}
                    </div>
                </div>
            )
        } if (question.type == "checkbox") {
            let type = "checkbox"
            return (
                <div className="form-group">
                    <label>{`${question.id}. ${question.titre}`}</label>
                    {DisplayOptions(answer_array, type)}
                </div>

            )
        }
    }
    return (
        <>
            {DisplayComp(question)}
            <hr></hr>
        </>
    )
}
export default Question;