import React, { Component, Fragment } from 'react'

export default class Question extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: this.props.question
            // question: "",
            // type: "",
            // suggestion: ""
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            question: nextProps.question
        })
    }

    componentDidMount() {
        console.log("object =", this.props.question.title)
    }

    render() {

        const DisplayComp = question => {
            var answer_array = []

            if (this.state.question.suggestion) {
                answer_array = this.state.question.suggestion.split('\n');
                console.log("###### options = ", answer_array.length)
            }
            console.log("###### options 2 = ", answer_array.length)

            if (this.state.question.type == "text") {
                return (
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{this.state.question.question}</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder={this.state.question.question} />
                    </div>
                )
            }


            if (this.state.question.type == "radio") {

                console.log("options = ", this.state.question.suggestion)
                return (
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{this.state.question.question}</label>

                        <div className="custom-control custom-radio">
                            <input className="custom-control-input" type="radio" id="customRadio1" name="customRadio" />
                            <label htmlFor="customRadio1" className="custom-control-label">Custom Radio</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input className="custom-control-input" type="radio" id="customRadio2" name="customRadio" defaultChecked />
                            <label htmlFor="customRadio2" className="custom-control-label">Custom Radio checked</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input className="custom-control-input" type="radio" id="customRadio3" disabled />
                            <label htmlFor="customRadio3" className="custom-control-label">Custom Radio disabled</label>
                        </div>
                    </div>
                )
            } if (this.state.question.type == "checkbox") {
                return (
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{this.state.question.question}</label>

                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="customCheckbox1" defaultValue="option1" />
                            <label htmlFor="customCheckbox1" className="custom-control-label">Custom Checkbox</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="customCheckbox2" defaultChecked />
                            <label htmlFor="customCheckbox2" className="custom-control-label">Custom Checkbox checked</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled />
                            <label htmlFor="customCheckbox3" className="custom-control-label">Custom Checkbox disabled</label>
                        </div>
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
