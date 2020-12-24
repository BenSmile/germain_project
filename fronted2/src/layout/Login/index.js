import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import Header from '../../components/Header'

const LoginUI = ({ form: { onChange, form, validateForm } }) => (

    <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
            <SemanticHeader>Se connecter</SemanticHeader>
            <Segment>
                <Form>
                    <Form.Field>
                        <Form.Input value={form.username || ""} onChange={onChange} name="username" placeholder='Username' label="Username" />
                    </Form.Field>
                
                    <Form.Field>
                        <Form.Input value={form.password || ""} onChange={onChange} name="password" type="password" placeholder='Password' label="Password" />
                    </Form.Field>

                    <Button type='submit' disabled={validateForm} fluid primary>Se connecter</Button>

                    <Segment>Creer un compte  <Link to="/register">ici</Link></Segment>
                </Form>

            </Segment>

        </Grid.Column>

    </Grid>

)

export default LoginUI;

