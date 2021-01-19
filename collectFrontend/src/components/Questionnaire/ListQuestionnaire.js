import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAllQuestionnaires, handleUpdateQuestionaireModal } from '../../actions/questionnaireActions';

import UpdateQuestionnaire from './UpdateQuestionnaire';



class ListQuestionnaire extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleModal = this.handleModal.bind(this);

    }

    componentDidMount() {
        this.props.getAllQuestionnaires();
    }

    handleModal(questionnaire) {
        // e.preventDefault();
        console.log('questionnaire', questionnaire)
        let data = {
            open: true,
            data: questionnaire
        };
        // this.props.handleUpdateQuestionaireModal(data);

    }


    render() {

        const { allQuestionnaires } = this.props.allQuestionnaires;

        // console.log('allQuestionnaires', this.props)
        // this.props.getAllQuestionnaires().then( (res) => {
        //     console.log('res', res)
        // })

        

        // console.log('allQuestionnaires :>> ', this.props);

        return (
            <div className="container" style={{marginTop: "30px" }}>

                <div className="container">
                    <div className="row">
                        <h1 className="col-9">Questionnaires</h1>
                        <div className="col-3">
                            <Button size='mini' as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                <Icon name="add"></Icon>
                                Ajouter un questionnaire
                            </Button>
                        </div>
                    </div>
                </div>

                <Card.Group >

                    {allQuestionnaires.map((questionnaire, index) => {
                        return (
                            <Card fluid>
                                <Card.Content>

                                    <Card.Header>
                                        {questionnaire.titre}
                                        <div style={{ float: "right" }}>

                                            {/* <Button circular size='mini' as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                                <Icon name="add"></Icon>
                                            </Button> */}

                                            <Button circular size='mini' as={Link} to={`/questionnaire/${questionnaire.id}`} basic icon color='blue'>
                                                <Icon name="eye"></Icon>
                                            </Button>
                                            <Button circular size='mini'  as={Link} to={`/updateQuestionnaire/${questionnaire.id}`}  basic icon color='blue'>
                                                <Icon name="edit"></Icon>
                                            </Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Meta>Date de Créatoon : {questionnaire.creationDate}</Card.Meta>
                                    <Card.Meta>Nombre d'enqueteurs : 8</Card.Meta>
                                    <Card.Description>
                                        {questionnaire.description}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>

            </div>
        )
    }
}


ListQuestionnaire.propTypes = {
    getAllQuestionnaires: PropTypes.func.isRequired,
    handleUpdateQuestionaireModal: PropTypes.func.isRequired,
    allQuestionnaires: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    allQuestionnaires: state.questionnaire
})

export default connect(mapStateToProps, { getAllQuestionnaires, handleUpdateQuestionaireModal })(ListQuestionnaire);
