import React, { Component, Fragment, useState, useEffect } from 'react'

export default function Question(props) {


    const { q, i } = props
    console.log('props', props)

    console.log('q', q)

    const [reponse, setReponse] = useState('')
    const [question, setQuestion] = useState(q)


    const [position, setPosition] = useState(0)

    const [index, setIndex] = useState(i)

    useEffect(() => {
        // setQuestion(q);

        console.log('question', question)
    }, [])

    const onChange = (e) => {
        // this.setState({ reponse: e.target.value })

        console.log("reponse = ", reponse)
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         question: nextProps.question,
    //         index: nextProps.index
    //     })
    // }

    // componentDidMount() {
    //     console.log("object =", this.props.question.titre)
    // }




    const DisplayOptions = (options, type) => {

        let localtype = ''
        if (type == 'radio') {
            localtype = 'radio'
        } else if (type == 'checkbox') {
            localtype = 'checkbox'
        }

        return options.map((option, index) =>
            <div className={`custom-control custom-${type}`}>
                <input className="custom-control-input" onChange={onChange} type={type} id={`${localtype}_${index}`} name={`question_$index}`} />
                <label htmlFor={`${localtype}_${index}`} className="custom-control-label" value={option}>{option}</label>
            </div>
        )
    }

    const DisplayComp = question => {
        var answer_array = []

        if (question.suggestions) {
            answer_array = question.suggestions.split('\n');
            console.log("###### options = ", answer_array.length)
        }


        console.log("###### options 2 = ", answer_array.length)

        if (question.type == "text") {
            return (
                <div className="form-group" onChange={onChange}>
                    <label htmlFor="exampleInputEmail1">{question.titre}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder={question.titre} />
                </div>
            )
        }

        if (question.type == "radio") {
            let type = "radio"
            console.log("options =========== ", answer_array)
            return (
                <div className="form-group">
                    <label>{question.titre}</label>
                    <div className="form-group">
                        {DisplayOptions(answer_array, type)}
                    </div>
                </div>
            )
        } if (question.type == "checkbox") {
            let type = "checkbox"
            return (
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">{question.titre}</label>
                    {DisplayOptions(answer_array, type)}
                </div>

            )
        }
    }

    return (

        <form>
            {DisplayComp(question)}
            <hr></hr>
        </form>

    )
}

