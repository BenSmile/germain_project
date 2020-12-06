import React, { Component } from 'react'

export default class AjouterQuestion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // questions: this.props.questionnaire,
            question: "",
            type: "",
            suggestion: "",
            dismiss_modal: ""
        }


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.resetData = this.resetData.bind(this);
    }

    componentDidMount() {
        this.setState({
            question: "",
            type: "",
            suggestion: "",
            dismiss_modal: false
        })

    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    resetData() {
        this.setState({
            question: "",
            type: "",
            suggestion: "",

        })
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState(this.state = {
    //         questions: nextProps.questionnaire,
    //     })
    // }

    onSubmit(e) {
        e.preventDefault();
        let newQuestion = {
            question: this.state.question,
            type: this.state.type,
            suggestion: this.state.suggestion
        }

        console.log("data = ", newQuestion)
        this.props.addQuestion(newQuestion);
        this.resetData();
        this.setState({ dismiss_modal: false })
    }


    render() {
        return (


            <div className="modal show fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Default Modal</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label>Question</label>
                                    <textarea  rows="3" value={this.state.question} onChange={this.onChange} type="text" className="form-control " name="question" placeholder="Entrez la question" />
                                </div>

                                <div className="form-group">
                                    <label>Type de reponse</label>
                                    <select  value={this.state.type} onChange={this.onChange} className="form-control" name="type">
                                        <option value="">Select type</option>
                                        <option value="text">text</option>
                                        <option value="checkbox">checkbox</option>
                                        {/* <option value="select_multiple">select_multiple</option> */}
                                        <option value="radio">radio</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nom</label>
                                    <textarea  rows="4" value={this.state.suggestion} onChange={this.onChange} type="text" className="form-control " name="suggestion"
                                        placeholder={`Suggestion 1 ${'\n'}Suggestion 2 ${'\n'}Suggestion 3 ${'\n'}Suggestion 4 ${'\n'}`} />
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Annuler</button>
                                    <button type="submit" className="btn btn-primary" data-dismiss={this.state.dismiss_modal}>Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
