import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { Button, Icon } from 'semantic-ui-react'
import Question from './Question';

export default function ListQuestions() {


    const QUESTIONNAIRE_BASE_URI = 'http://127.0.0.1:8080/api/questionnaire/';



    const params = useParams();
    const [reponses, setReponses] = useState([])

    const [questions, setQuestions] = useState([])



    function addResponse (reponse){

          setReponses({
            ...reponses,
             [reponse.name]: reponse.value 
        })

    }
    console.log('reponses', reponses)

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

            <div className="container">
                <div className="row">
                    <h1 className="col-6">Questions</h1>
                   
                        <div className=" col-3">
                            <Button circular as={Link} to={`/questionnaire/${id}/ajouterQuestion`} basic icon color='blue'>
                                <Icon name="add"></Icon>
                                Question
                            </Button>
                            <Button style={{ float: "right" }} circular as={Link} to={`/questionnaire/repondre/${id}`} basic icon color='blue'>
                               
                                Repondre
                            </Button>
                        </div>
                       
                  

                </div>
            </div>


            {/* <div className="row">
                <h1 className="col-4">Questions</h1>
                <Button style={{ float: "right" }} circular as={Link} to={`/questionnaire/${id}/ajouterQuestion`} basic icon color='blue'>
                    <Icon name="add"></Icon>
                </Button>
            </div> */}
            <div>
                {
                    questions.map(question => (
                        <div>
                            <Question q={question} i={question.id} reponses={reponses} setReponses={setReponses} disabled={true}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
