import React from 'react'
import { Modal, Button, Item, Icon, Menu, Grid, Header as SemanticHeader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



function exampleReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            console.log('id', action.id)
            return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
            return { open: false }
        default:
            throw new Error()
    }
}

export default function QuestionnaireListUI({ allQuestionnaires }) {

    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state

    const handlerAddQuestion = id => {

    }
    const handleEditQuestionnaire = id => {

    }

    console.log('allQuestionnaires list = ', allQuestionnaires)
    return (

        <Grid centered textAlign="left">

            <Grid.Column style={{ maxWidth: 1000, marginTop: "20px" }}>
                <SemanticHeader>QUESTTIONNAIRES</SemanticHeader>

                <Item.Group style={{ fontSize: 20 }}>

                    {allQuestionnaires.length && allQuestionnaires.map(questionnaire => (
                        <Item>

                            <Item.Content>

                                <Menu secondary pointing borderless>
                                    <Menu.Item as={Link} to="/" style={{ fontSize: 20 }}>{questionnaire.titre}</Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as={Link} to="/createQuestionnaire" basic icon >
                                            <Icon name="add"></Icon>
                                        </Button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring', id:questionnaire.id })} basic icon  >
                                            <Icon name="edit"></Icon>
                                        </Button>
                                    </Menu.Item>
                                </Menu>

                                <Item.Description>
                                    Code: {questionnaire.code}
                                </Item.Description>
                                <Item.Description>
                                    Description: {questionnaire.description}
                                </Item.Description>
                                <Item.Extra>DATE : {questionnaire.creationDate}</Item.Extra>
                            </Item.Content>
                        </Item>

                    ))}


                </Item.Group>
            </Grid.Column>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
                <Modal.Header>Use Google's location service?</Modal.Header>
                <Modal.Content>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
        </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Disagree
          </Button>
                    <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Agree
          </Button>
                </Modal.Actions>
            </Modal>


        </Grid>
    )
}
