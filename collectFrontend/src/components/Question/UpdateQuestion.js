import React from 'react'
import { Button, Checkbox, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'


class UpdateQuestion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            titre: "",
            code: "",
            description: "",
            validateForm: false
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
                    <SemanticHeader centered>CREATION D'UN QUESTIONNAIRE</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input value={this.state.titre || ""} onChange={this.onChange} name="titre" placeholder='Titre' label="Titre" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={this.state.code || ""} onChange={this.onChange} name="code" placeholder='Code' label="Code" />
                            </Form.Field>
                            <Form.Field>
                                <Form.TextArea value={this.state.description || ""} onChange={this.onChange} name="description" placeholder='Description' label="Description" />
                            </Form.Field>


                            <Button type='submit' onClick={this.onSubmit} disabled={this.state.validateForm} fluid primary>Submit</Button>
                        </Form>

                    </Segment>

                </Grid.Column>
            </Grid>
        )
    }

}
