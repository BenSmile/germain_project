import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
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
                    <SemanticHeader>Se connecter</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input value={this.state.username || ""} onChange={this.onChange} name="username" placeholder='Username' label="Username" />
                            </Form.Field>

                            <Form.Field>
                                <Form.Input value={this.state.password || ""} onChange={this.onChange} name="password" type="password" placeholder='Password' label="Password" />
                            </Form.Field>

                            <Button type='submit' disabled={this.state.validateForm} fluid primary>Se connecter</Button>

                            <Segment>Creer un compte  <Link to="/register">ici</Link></Segment>
                        </Form>

                    </Segment>

                </Grid.Column>

            </Grid>
        )
    }
}
