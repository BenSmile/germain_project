import React, { Component } from 'react';
import TabExampleSecondaryPointing from '../TabQuestionnaire';
import {  Header as SemanticHeader } from 'semantic-ui-react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getQuestionnaireById } from '../../actions/questionnaireActions';


class Questionnaire extends Component {


constructor(props) {
    super(props)

    this.state = {
        reponses:[]
    }
}



    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getQuestionnaireById(id)
    }
    render() {

        // const { errors } = this.state;

        const {questionnaire} = this.props

        console.log('this.state = ', this.state);
        console.log('this.props', questionnaire)
        return (
            <div className="container">
            <SemanticHeader>Questionnaire : {questionnaire.titre}</SemanticHeader>
               <TabExampleSecondaryPointing questionnaireId = {questionnaire.id}/>
            </div>
        )
    }
}



Questionnaire.propTypes = {
    getQuestionnaireById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    questionnaire: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    questionnaire: state.questionnaire.questionnaire
})

export default connect(mapStateToProps, { getQuestionnaireById})(Questionnaire);

