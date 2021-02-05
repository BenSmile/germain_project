import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { Button, Table, Icon } from 'semantic-ui-react';


export default function Enqueteurs() {

    const QUESTIONNAIRE_BASE_URI = 'http://127.0.0.1:8080/api/questionnaire/';

    const [enqueteurs, setEnqueteurs] = useState([])


    const params = useParams();

    // print params to console
    // console.log("param = ", params);
    const { id } = params;


    useEffect(() => {
      

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
                <Button  style ={{float:"right"}} as={Link} size='huge' to={`/assign_investigators/${id}`} basic icon color='blue'>
                    <Icon name="add"></Icon>
                    Ajouter un enqueteur
                </Button>
            </div>

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
