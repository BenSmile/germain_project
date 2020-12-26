import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAllQuestionnaires } from '../../actions/questionnaireActions';



class ListQuestionnaire extends Component {





    componentDidMount() {
        this.props.getAllQuestionnaires();
    }

    // componentWillUpdate() {
    //     this.props.getAllQuestionnaires();
    // }

    render() {

        const { allQuestionnaires } = this.props.allQuestionnaires;

        console.log('allQuestionnaires', this.props)
        // this.props.getAllQuestionnaires().then( (res) => {
        //     console.log('res', res)
        // })

        const DisplayQuestionnaires = list => {

            list.map(questionnaire => {

                return (
                    <Card fluid>
                        <Card.Content>

                            <Card.Header>
                                {questionnaire.titre}
                                <div style={{ float: "right" }}>

                                    <Button as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                        <Icon name="add"></Icon>
                                    </Button>

                                    <Button circular size='mini' as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                        <Icon name="eye"></Icon>
                                    </Button>
                                    <Button circular size='mini' as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                        <Icon name="edit"></Icon>
                                    </Button>
                                </div>
                            </Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                    </Card>

                )
            })
        }

        // console.log('allQuestionnaires :>> ', this.props);

        return (
            <div className="container">

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

                                            <Button circular size='mini' as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                                <Icon name="add"></Icon>
                                            </Button>

                                            <Button circular size='mini' as={Link} to={`/questionnaire/${questionnaire.id}`} basic icon color='blue'>
                                                <Icon name="eye"></Icon>
                                            </Button>
                                            <Button circular size='mini' as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                                <Icon name="edit"></Icon>
                                            </Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
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
    allQuestionnaires: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    allQuestionnaires: state.questionnaire
})

export default connect(mapStateToProps, { getAllQuestionnaires })(ListQuestionnaire);
