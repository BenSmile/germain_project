import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { Button, Card, Image, Table, Icon } from 'semantic-ui-react'


export default function Enqueteurs() {

    const QUESTIONNAIRE_BASE_URI = 'http://127.0.0.1:8080/api/questionnaire/';

    const [enqueteurs, setEnqueteurs] = useState([])


    const params = useParams();

    // print params to console
    console.log("param = ", params);



    useEffect(() => {
        let { id } = params;

        const res = axios.get(`${QUESTIONNAIRE_BASE_URI}${id}/enqueteurs`)
            .then(res => setEnqueteurs(res.data));
    }, []);

    // {
    //     "id": 1,
    //     "username": "admin2",
    //     "email": "adm3in@gmail.com",
    //     "password": "admin",
    //     "firstName": "admin",
    //     "lastName": "admin",
    //     "role": "ENQUETEUR",
    //     "creationDate": "2021-01-03"
    // },


    return (
        <div>
            <div className="row">
                <h1 className="col-4">Enqueteurs</h1>
                <Button  style ={{float:"right"}}  size='mini' to="/createQuestionnaire" basic icon color='blue'>
                    <Icon name="add"></Icon>
                    Ajouter un enqueteur
                </Button>
            </div>
            {/* <Card.Group>
                {
                    enqueteurs.map((enqueteur) => (
                        <Card>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                />
                                <Card.Header>{`${enqueteur.firstName} ${enqueteur.lastName}`}</Card.Header>
                                <Card.Meta>{`${enqueteur.email}`}</Card.Meta>
                                <Card.Description>
                                    Steve wants to add you to the group <strong>best friends</strong>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Approve
                                    </Button>
                                    <Button basic color='red'>
                                        Decline
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group> */}


            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {enqueteurs.map((enqueteur, index) => (
                        <Table.Row>
                            <Table.Cell>{`${enqueteur.firstName}  ${enqueteur.lastName}`}</Table.Cell>
                            <Table.Cell>{enqueteur.email}</Table.Cell>
                            <Table.Cell negative>{enqueteur.username}</Table.Cell>
                        </Table.Row>
                    ))}


                </Table.Body>
            </Table>
        </div>
    )
}
