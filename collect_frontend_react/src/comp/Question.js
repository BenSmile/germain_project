import React, { Component, Fragment } from 'react'

export default class Question extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: this.props.question,
            index: this.props.index,
            reponse : "",
            position:0
            // question: "",
            // type: "",
            // suggestion: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ reponse: e.target.value })

        console.log("reponse = ", this.state.reponse)
    }




    componentWillReceiveProps(nextProps) {
        this.setState({
            question: nextProps.question,
            index: nextProps.index
        })
    }

    componentDidMount() {
        console.log("object =", this.props.question.title)
    }

    render() {


        const DisplayOptions = (options, type) => {

            let localtype = ''
            if (type == 'radio') {
                localtype = 'radio'
            } else if (type == 'checkbox') {
                localtype = 'checkbox'
            }

            return options.map((option, index) =>
                <div className={`custom-control custom-${type}`}>
                    <input className="custom-control-input" onChange={this.onChange} type={type} id={`${localtype}_${index}`} name={`question_${this.state.index}`} />
                    <label htmlFor={`${localtype}_${index}`} className="custom-control-label" value={option}>{option}</label>
                </div>
            )
        }

        const DisplayComp = question => {
            var answer_array = []

            if (this.state.question.suggestion) {
                answer_array = this.state.question.suggestion.split('\n');
                console.log("###### options = ", answer_array.length)
            }


            console.log("###### options 2 = ", answer_array.length)

            if (this.state.question.type == "text") {
                return (
                    <div className="form-group" onChange={this.onChange}>
                        <label htmlFor="exampleInputEmail1">{this.state.question.question}</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1" placeholder={this.state.question.question} />
                    </div>
                )
            }

            if (this.state.question.type == "radio") {
                let type = "radio"
                console.log("options =========== ", answer_array)
                return (
                    <div className="form-group">
                        <label>{this.state.question.question}</label>
                        <div className="form-group">
                            {DisplayOptions(answer_array, type)}
                        </div>
                    </div>
                )
            } if (this.state.question.type == "checkbox") {
                let type = "checkbox"
                return (
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{this.state.question.question}</label>
                        {DisplayOptions(answer_array, type)}
                    </div>

                )
            }
        }

        return (

            <form>
                {DisplayComp(this.state.question)}
            </form>

        )
    }
}
