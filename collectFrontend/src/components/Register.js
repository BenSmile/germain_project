import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Select, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import axios from 'axios';

export default class Register extends Component {



    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            role :"",
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
      

      

        try {

            const newUser = {
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.password,
                role:this.state.role
            }
            // const res = await axios.post(LOGIN_BASE_URI, credentials);
            const res =  axios.post(`http://127.0.0.1:8080/api/users/add_user`, newUser)
    
            console.log('res', res.data)
            localStorage.setItem("user", JSON.stringify(res.data))
            this.props.history.push('/login')
        } catch (error) {
         console.log('errors :>> ', error);
        }


    }

    render() {

   
        const roleOptions = [
            { key: 'admin', value: 'ADMIN', text: 'ADMIN' },
            { key: 'enq', value: 'ENQUETEUR', text: 'ENQUETEUR' },
        ]
        return (
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: "20px" }}>
                    <SemanticHeader>Creer un compte</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field >
                                <Form.Input required value={this.state.username || ""} onChange={this.onChange} name="username" placeholder='Username' label="Username" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input required value={this.state.firstname || ""} onChange={this.onChange} name="firstname" placeholder='First Name' label="First Name" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input required value={this.state.lastname || ""} onChange={this.onChange} name="lastname" placeholder='Last Name' label="Last Name" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input required value={this.state.email || ""} onChange={this.onChange} name="email" type='email' placeholder='Email' label="Email" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input required value={this.state.password || ""} onChange={this.onChange} name="password" type="password" placeholder='Password' label="Password" />
                            </Form.Field>

                            <Form.Field>
                            <label>Role*</label>
                                <Select label="Role" required placeholder='Selectionner un role' options={roleOptions} />
                            </Form.Field>

                            <Button type='submit' onClick={this.onSubmit} fluid primary>Submit</Button>

                            <Segment>Vous avez deja un compte? <Link to="/login">Connectez-vous</Link></Segment>
                        </Form>

                    </Segment>

                </Grid.Column>

            </Grid>
        )
    }
}
