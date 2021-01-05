import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { Button, Card, Image, Table, Icon } from 'semantic-ui-react'

export default function ListQuestions() {

    const params = useParams();

    // print params to console
    console.log("param = ", params);
    const { id } = params;


    // useEffect(() => {
    //     let { id } = params;

    //     const res = axios.get(`${QUESTIONNAIRE_BASE_URI}${id}/enqueteurs`)
    //         .then(res => setEnqueteurs(res.data));
    // }, []);


    return (
        <div>
             <div className="row">
                <h1 className="col-4">Questions</h1>
                <Button  style ={{float:"right"}}  size='mini' as={Link} to={`/questionnaire/${id}/ajouterQuestion`} basic icon color='blue'>
                    <Icon name="add"></Icon>
                    Ajouter une question
                </Button>
            </div>
        </div>
    )
}
