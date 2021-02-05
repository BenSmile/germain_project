import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { Button, Icon, Form } from 'semantic-ui-react'
import Question from './Question';

export default function RepondreQuestion() {


    const BASE_URL = process.env.REACT_APP_HOST_ADDRESS;

    const QUESTIONNAIRE_BASE_URI = BASE_URL.concat('/api/questionnaire/')

    // const QUESTIONNAIRE_BASE_URI = 'http://127.0.0.1:8080/api/questionnaire/';


    const [reponses, setReponses] = useState([])


    function submitResponses(responses) {

        console.log('responses', responses)
    }

    function addResponse(reponse) {

        if (reponse.name.includes('checkbox')) {

            if (reponses[reponse.name]) {
                let newRep = reponses;
                delete newRep[reponse.name];
                setReponses({
                    ...newRep
                })
            } else {
                setReponses({
                    ...reponses,
                    [reponse.name]: reponse.value
                })
            }
        } else {
            setReponses({
                ...reponses,
                [reponse.name]: reponse.value
            })
        }

    }

    console.log('eeeeee reponses', reponses)

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



    return (
        <div className="container">
            <Form size='large'>
            <div className="row">
                <h1 className="col-4">Questions</h1>
                {/* <Button style={{ float: "right" }} size='huge' as={Link} to={`/questionnaire/${id}/ajouterQuestion`} basic icon color='blue'>
                    <Icon name="add"></Icon>
                    Ajouter une question
                </Button> */}
            </div>
            <div>
                {
                    questions.map(question => (
                        <div>
                            <Question q={question} i={question.id} disabled={false} addResponse={addResponse} />
                        </div>
                    ))
                }
            </div>

            <div style={{ float: "right" }}>
                <Button type="submit" style={{ float: "right" }} onClick={() => axios.post(`${QUESTIONNAIRE_BASE_URI}/submit/`, reponses)} basic icon color='blue'>
                    <Icon name="add"></Icon>
                    Soumettre
                </Button>
            </div>
            </Form>
           
        </div>
    )
}
