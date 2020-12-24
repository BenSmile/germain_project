import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            firstname:"",
            lastname:"",
            email:"",
            validateForm: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
            <SemanticHeader>Creer un compte</SemanticHeader>
            <Segment>
                <Form>
                    <Form.Field>
                        <Form.Input value={this.state.username || ""} onChange={this.onChange} name="username" placeholder='Username' label="Username" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={this.state.firstname || ""} onChange={this.onChange} name="firstname" placeholder='First Name' label="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={this.state.lastname || ""} onChange={this.onChange} name="lastname" placeholder='Last Name' label="Last Name" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={this.state.email || ""} onChange={this.onChange} name="email" type='email' placeholder='Email' label="Email" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={this.state.password || ""} onChange={this.onChange} name="password" type="password" placeholder='Password' label="Password" />
                    </Form.Field>

                    <Button type='submit' disabled={this.state.validateForm} fluid primary>Submit</Button>

                    <Segment>Vous avez deja un compte? <Link to="/login">Connectez-vous</Link></Segment>
                </Form>

            </Segment>

        </Grid.Column>

    </Grid>
        )
    }
}
