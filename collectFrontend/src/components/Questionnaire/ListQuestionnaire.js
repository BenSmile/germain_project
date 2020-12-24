import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

import { Link, useLocation } from "react-router-dom";

// import { Menu, Image, Button, Icon } from "semantic-ui-react"

export default class ListQuestionnaire extends Component {
    render() {
        return (
            <div className="container">
                <h1>Questionnaires</h1>
                <Card.Group >

                    <Card fluid>
                        <Card.Content>

                            <Card.Header>
                                Steve Sanders
                            <div style={{ float: "right" }}>

                                    <Button as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                        <Icon name="add"></Icon>
                                    </Button>

                                    <Button as={Link} to="/createQuestionnaire" basic icon color='blue'>
                                        <Icon name="eye"></Icon>
                                    </Button>
                                    <Button as={Link} to="/createQuestionnaire" basic icon color='blue'>
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
                </Card.Group>

            </div>
        )
    }
}
