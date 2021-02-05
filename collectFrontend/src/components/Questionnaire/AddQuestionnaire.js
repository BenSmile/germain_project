import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment, Label } from 'semantic-ui-react'
import { addQuestionnaire } from '../../actions/questionnaireActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddQuestionnaire extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titre: "",
            code: "",
            description: "",
            validateForm: true,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        let newQuestionnaire = {
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
                    <SemanticHeader centered>CREATION D'UN QUESTIONNAIRE</SemanticHeader>
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
                                    errors.code && ( <Label basic color='red' pointing>
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



AddQuestionnaire.propTypes = {
    addQuestionnaire: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addQuestionnaire })(AddQuestionnaire);