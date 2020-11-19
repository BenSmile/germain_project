import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AjouterQuestion from './AjouterQuestion';
import Question from './Question';


export default class Questionnaire extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            date: "",
            questions: [
                {
                    question: "Question 1",
                    type: "text",
                    suggestion: ""
                },
                {
                    question: "Question 2",
                    type: "radio",
                    suggestion: ""
                }, {
                    question: "Question 3",
                    type: "checkbox",
                    suggestion: ""
                }, {
                    question: "Question 4",
                    type: "selectmany",
                    suggestion: ""
                }
            ]
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    addQuestion(question) {
        // console.log("new Question = ", question)
        this.setState({ questions: [...this.state.questions, question] })

        // console.log("questions == ", this.state.questions.length)
        // this.state.questions.push(question)
        // this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                {/* Input addon */}
                <div className="card card-info">
                    {/* <div className="card-header">
    <h3 className="card-title">Input Addon</h3>
  </div> */}

                    <div className="card-body">
                        <h3>Titre du questionnaire : <code>{this.state.title}</code> {this.state.questions.length} questions</h3>
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" onChange={this.onChange} name="title" value={this.state.title} />
                            <span className="input-group-append">
                                <button type="button" className="btn btn-info btn-flat">Validez!</button>
                            </span>
                        </div>

                        <ul className="navbar-nav">
                            <li type="button" className="nav-item d-none d-sm-inline-block" data-toggle="modal" data-target="#modal-default">
                                Ajouter une question
                            </li>
                        </ul>
                        <hr></hr>
                    </div>
                </div>
                <AjouterQuestion questionnaire={this.state.questions} addQuestion={this.addQuestion} />

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Questions</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">


                            {
                                this.state.questions.map(question =>
                                    <Question question = {question}/>
                            
                                )
                            }

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
