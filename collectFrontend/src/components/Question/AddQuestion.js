import React, { useState } from 'react'
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment, Label } from 'semantic-ui-react'
import { useParams, Link } from 'react-router-dom';
import { addQuestion } from '../../actions/questionActions';

export default function AddQuestion() {


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


        console.log('inputValues = ', inputValues)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addQuestion(inputValues)
    }

    return (

        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
                <SemanticHeader centered>CREATION D'UN QUESTIONNAIRE</SemanticHeader>
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

                        <Button type='submit' onChange={onSubmit} fluid primary>Submit</Button>
                    </Form>

                </Segment>

            </Grid.Column>
        </Grid>

    )
}
