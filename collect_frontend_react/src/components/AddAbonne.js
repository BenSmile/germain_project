import React, { Component } from 'react';
import AbonneService from '../services/AbonneService';


export default class AddAbonne extends Component {

    constructor(props) {
        super(props)

        this.state = {
            phoneForUpdate: this.props.match.params.telephone,
            actionButton: "Save",
            nom: "",
            postnom: "",
            age: "",
            sexe: "",
            telephone: "",
            message: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    cancel(e) {
        this.props.history.push("/abonnes")
    }

    componentDidMount() {

        if (this.state.phoneForUpdate) {
            this.setState({ actionButton: "Update" })

            AbonneService.getAbonneByPhone(this.state.phoneForUpdate).then((res) => {

                let { nom, postnom, age, sexe, telephone } = res.data.data;

                this.setState({
                    nom: nom,
                    postnom: postnom,
                    telephone: telephone,
                    sexe, sexe,
                    age, age
                })
            })
        }
    }


    onSubmit(e) {
        e.preventDefault();

        console.log("object = ", e.target.value)

        const newAbonnee = {
            nom: this.state.nom,
            postnom: this.state.postnom,
            age: this.state.age,
            sexe: this.state.sexe,
            telephone: this.state.telephone
        }


        if (e.target.value == 'Save') {
            AbonneService.addAbonne(newAbonnee).then(res => {
                this.setState({ message: res });
            })

        }

        if (e.target.value == 'Update') {
            AbonneService.updateAbonne(this.state.phoneForUpdate, newAbonnee).then(res => {
                this.setState({ message: res });
            })
        }



        this.props.history.push("/abonnes")
        console.log("Abonne : ", this.state.message);

        // const newProjectTask = {
        //     summary: this.state.summary,
        //     acceptanceCriteria: this.state.acceptanceCriteria,
        //     status: this.state.status
        // }

        // this.props.addProjectTask(newProjectTask, this.props.history)
    }

    render() {
        return (
            <div style={{ marginTop: "10px" }}>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">



                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Add abonne</h3>
                                    </div>

                                    <form role="form">
                                        <div className="card-body">

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Nom</label>

                                                <input value={this.state.nom} onChange={this.onChange} type="text" className="form-control " name="nom" placeholder="Nom" />
                                            </div>

                                            
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Postnom</label>

                                                <input value={this.state.postnom} onChange={this.onChange} type="text" className="form-control " name="postnom" placeholder="Postnom" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Age</label>

                                                <input value={this.state.age} onChange={this.onChange} type="text" className="form-control " name="age" placeholder="Age" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Telephone</label>

                                                <input value={this.state.telephone} onChange={this.onChange} type="text" className="form-control " name="telephone" placeholder="Telephone" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Sexe</label>

                                                <select value={this.state.sexe} onChange={this.onChange} className="form-control " name="sexe">
                                                    <option value="">Sexe</option>
                                                    <option value="M">M</option>
                                                    <option value="F">F</option>

                                                </select>
                                            </div>

                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">

                                            <input type="submit" onClick={this.onSubmit} className="btn btn-primary " style={{ marginRight: "50px", marginBottom: "10px" }} value={this.state.actionButton} />
                                            <input type="submit" onClick={this.cancel} className="btn btn-danger " style={{ marginRight: "50px", marginBottom: "10px" }} value="Cancel" />


                                        </div>
                                    </form>
                                </div>
                            </div></div></div></div>



            </div>
        )
    }
}
