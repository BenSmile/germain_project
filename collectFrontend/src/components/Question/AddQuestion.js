import React, { useState } from 'react'
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment, Label } from 'semantic-ui-react'
import { useParams, Link } from 'react-router-dom';
import { GET_ERRORS, GET_ALL_QUESTIONNAIRES, GET_QUESTIONNAIRE_BY_ID } from "../../actions/types";
import { useHistory } from 'react-router-dom';
import { addQuestion } from '../../actions/questionActions';
import { useDispatch } from 'react-redux';

import axios from "axios";


export default function AddQuestion() {

    const QUESTION_BASE_URI = "http://127.0.0.1:8080/api/question/";

    // const addQUestionAction = useActions(question => addQUestion(question));
    const addQUestionAction = useDispatch(question => addQuestion(question));

    const dispatch = useDispatch();
    const history = useHistory();

    // const addQUestionAction = question => addQUestion(question);

    const ob = {
        "title": "question 1",
        "type": "text",
        "questionnaire": 2,
        "suggestions": "Male\nFemale"
    }

    const params = useParams();

    // print params to console
    console.log("param = ", params);

    const { id } = params

    const [inputValues, setInputValues] = useState({
        title: '', type: '', suggestions: '', questionnaire: id
    });

    const onChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('inputValues', inputValues)
        // addQuestion(inputValues)
        try {
            const res = axios.post(QUESTION_BASE_URI, inputValues);
            history.push(`/questionnaire/${id}`);
        } catch (error) {

            console.log('error', error)
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        }

    }

    return (

        <div>
        <br></br>
            <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
                <SemanticHeader centered>AJOUT D'UNE QUESTION</SemanticHeader>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Form.Input value={inputValues.title || ""} onChange={onChange} name="title" placeholder='Titre' label="Titre" />
                        </Form.Field>

                        <Form.Field>
                            <Form.Input value={inputValues.type || ""} onChange={onChange} name="type" placeholder='Type' label="Type" />
                        </Form.Field>
                        <Form.Field>
                            <Form.TextArea row="5" value={inputValues.suggestions || ""} onChange={onChange} name="suggestions" placeholder={`Suggestion 1 ${'\n'}Suggestion 2 ${'\n'}Suggestion 3 ${'\n'}Suggestion 4 ${'\n'}`} label="Description" />
                        </Form.Field>

                        <Button type='submit' onClick={onSubmit} fluid primary>Submit</Button>
                    </Form>

                </Segment>

            </Grid.Column>
        </Grid>
        </div>
        

    )
}
