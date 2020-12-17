import React from 'react'
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import Header from '../../components/Header'

const RegisterUI = ({ form: { onChange, form, validateForm } }) => (

    <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
            <SemanticHeader>Sign up</SemanticHeader>
            <Segment>
                <Form>
                    <Form.Field>
                        <Form.Input value={form.username || ""} onChange={onChange} name="username" placeholder='Username' label="Username" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.firstname || ""} onChange={onChange} name="firstname" placeholder='First Name' label="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.lastname || ""} onChange={onChange} name="lastname" placeholder='Last Name' label="Last Name" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.email || ""} onChange={onChange} name="email" type='email' placeholder='Email' label="Email" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.password || ""} onChange={onChange} name="password" type="password" placeholder='Password' label="Password" />
                    </Form.Field>

                    <Button type='submit' disabled={validateForm} fluid primary>Submit</Button>
                </Form>

            </Segment>

        </Grid.Column>

    </Grid>

)

export default RegisterUI;

