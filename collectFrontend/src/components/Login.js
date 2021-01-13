import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header as SemanticHeader, Segment, Label } from 'semantic-ui-react'

import { Header, Image, Message } from 'semantic-ui-react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from '../actions/userActions'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            validateForm: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        // this.setState(this.state.password.length>0 && this.state.username.length>0)
    }

    onSubmit(e) {
        e.preventDefault();

        const credentials = {
            username: this.state.username,
            password: this.state.password
        };
        console.log('credentials', credentials)
        this.props.loginUser(credentials, this.props.history)
    }

    render() {

        // className={errors.username && 'error'}
        // className={errors.password && 'error'} 
        const { errors } = this.state;
        let errorss = {}
        if (errors) {
            errorss = errors;
        }

        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    {/* <Image
                    src='data:image/jpeg;base64,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'
                    width={50}
                     /> */}
                        <Header as='h2' color='teal' textAlign='center'>
                            Se connecter
                         </Header>
                        <Form size='large'>
                            <Segment stacked>
                                {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' /> */}
                               

                                <Form.Field required>
                                    <Form.Input fluid icon='user' iconPosition='left'  value={this.state.username || ""} className={errorss.username && 'error'} onChange={this.onChange} name="username" placeholder='Username'  />
                                    {
                                        errorss.username && (
                                            <Label basic color='red' pointing>
                                                {errorss.username}
                                            </Label>)
                                    }
                                </Form.Field>

                                <Form.Field required>
                                    <Form.Input  fluid
                                    icon='lock'
                                    iconPosition='left' value={this.state.password || ""} className={errorss.password && 'error'} onChange={this.onChange} name="password" type="password" placeholder='Password'  />
                                    {
                                        errorss.password && (
                                            <Label basic color='red' pointing>
                                                {errorss.password}
                                            </Label>)
                                    }
                                </Form.Field>

                              
                                
                                <Button type='submit' color='teal' fluid size='large' onClick={this.onSubmit} disabled={this.state.validateForm} fluid >Se connecter</Button>

{/*                                
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='teal' fluid size='large'>
                                    Connexion
                                </Button> */}
                            </Segment>
                        </Form>
                        <Message>
                            Creer un compte  <Link to="/register">ici</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
{/*              
                <hr></hr>

                <Grid centered>
                    <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
                        <SemanticHeader>Se connecter</SemanticHeader>
                        <Segment>
                            <Form>
                                <Form.Field required>
                                    <Form.Input value={this.state.username || ""} className={errorss.username && 'error'} onChange={this.onChange} name="username" placeholder='Username' label="Username" />
                                    {
                                        errorss.username && (
                                            <Label basic color='red' pointing>
                                                {errorss.username}
                                            </Label>)
                                    }
                                </Form.Field>

                                <Form.Field required>
                                    <Form.Input value={this.state.password || ""} className={errorss.password && 'error'} onChange={this.onChange} name="password" type="password" placeholder='Password' label="Password" />
                                    {
                                        errorss.password && (
                                            <Label basic color='red' pointing>
                                                {errorss.password}
                                            </Label>)
                                    }
                                </Form.Field>

                                <Button type='submit' onClick={this.onSubmit} disabled={this.state.validateForm} fluid primary>Se connecter</Button>

                                <Segment>Creer un compte  <Link to="/register">ici</Link></Segment>
                            </Form>

                        </Segment>

                    </Grid.Column>

                </Grid> */}

            </div>
        )
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);