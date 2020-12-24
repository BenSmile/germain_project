import React from 'react'
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import Header from '../../components/Header'

const CreateQuestionnaireUI = ({ form: { onChange, form, validateForm, onSubmit } }) => (

    <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
            <SemanticHeader centered>CREATION D'UN QUESTIONNAIRE</SemanticHeader>
            <Segment>
                <Form>
                    <Form.Field>
                        <Form.Input value={form.titre || ""} onChange={onChange} name="titre" placeholder='Titre' label="Titre" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.code || ""} onChange={onChange} name="code" placeholder='Code' label="Code" />
                    </Form.Field>
                    <Form.Field>
                        <Form.TextArea value={form.description || ""} onChange={onChange} name="description" placeholder='Description' label="Description" />
                    </Form.Field>


                    <Button type='submit' onClick={onSubmit} disabled={validateForm} fluid primary>Submit</Button>
                </Form>

            </Segment>

        </Grid.Column>

    </Grid>

)

export default CreateQuestionnaireUI;