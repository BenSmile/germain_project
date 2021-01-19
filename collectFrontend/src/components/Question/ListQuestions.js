import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { Button, Card, Image, Table, Icon } from 'semantic-ui-react'
import Question from './Question';

export default function ListQuestions() {


    const QUESTIONNAIRE_BASE_URI = 'http://127.0.0.1:8080/api/questionnaire/';



    const params = useParams();
    const [questions, setQuestions] = useState([])

    // print params to console
    // console.log("param = ", params);
    const { id } = params;


    useEffect(() => {
        let { id } = params;
        const res = axios.get(`${QUESTIONNAIRE_BASE_URI}${id}/questions/`)
            .then(res => setQuestions(res.data));
    }, []);

    console.log('questions', questions)


    return (
        <div>
            <div className="row">
                <h1 className="col-4">Questions</h1>
                <Button style={{ float: "right" }} size='mini' as={Link} to={`/questionnaire/${id}/ajouterQuestion`} basic icon color='blue'>
                    <Icon name="add"></Icon>
                    Ajouter une question
                </Button>
            </div>
            <div>
                {
                    questions.map(question => (
                        <div>
                        <Question q = {question} i={question.id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
