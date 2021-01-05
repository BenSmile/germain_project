import React, { Component } from 'react'

import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment, Label } from 'semantic-ui-react'
import { addQuestionnaire, getQuestionnaireById } from '../../actions/questionnaireActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UpdateQuestionnaire extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            titre: "",
            code: "",
            description: "",
            validateForm: true,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getQuestionnaireById(id)


    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }


        const { id, titre, description, code } = nextProps.questionnaire;
        this.setState({
            id,
            titre,
            code,
            description
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        let newQuestionnaire = {
            id: this.state.id,
            titre: this.state.titre,
            code: this.state.code,
            description: this.state.description
        }
        this.props.addQuestionnaire(newQuestionnaire, this.props.history)
    }

    render() {

        const { errors } = this.state;

        return (
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
                    <SemanticHeader centered>MISE A JOUR D'UN QUESTIONNAIRE</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input value={this.state.titre || ""} className={errors.titre && 'error'} onChange={this.onChange} name="titre" placeholder='Titre' label="Titre" />
                                {
                                    errors.titre && (
                                        <Label basic color='red' pointing>
                                            {errors.titre}
                                        </Label>)
                                }
                            </Form.Field>

                            <Form.Field>
                                <Form.Input value={this.state.code || ""} className={errors.code && 'error'} onChange={this.onChange} name="code" placeholder='Code' label="Code" />
                                {
                                    errors.code && (<Label basic color='red' pointing>
                                        {errors.code}
                                    </Label>)
                                }
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea value={this.state.description || ""} className={errors.description && 'error'} onChange={this.onChange} name="description" placeholder='Description' label="Description" />
                                {
                                    errors.description && (
                                        <Label basic color='red' pointing>
                                            {errors.description}
                                        </Label>
                                    )
                                }
                            </Form.Field>


                            <Button type='submit' onClick={this.onSubmit} fluid primary>Submit</Button>
                        </Form>

                    </Segment>

                </Grid.Column>
            </Grid>
        )
    }
}



UpdateQuestionnaire.propTypes = {
    addQuestionnaire: PropTypes.func.isRequired,
    getQuestionnaireById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    questionnaire: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    questionnaire: state.questionnaire.questionnaire
})

export default connect(mapStateToProps, { addQuestionnaire, getQuestionnaireById })(UpdateQuestionnaire);




