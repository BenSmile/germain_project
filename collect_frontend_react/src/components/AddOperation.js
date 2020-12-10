import React, { Component } from 'react';
import OperationService from '../services/OperationService';


export default class AddOperation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ForUpdate: this.props.match.params.numOperation,
            actionButton: "Save",
            numOperation: "",
            dateOperation: "",
            montantOperation: "",
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
        this.props.history.push("/operations")
    }

    componentDidMount() {


        if (this.state.ForUpdate) {
            this.setState({ actionButton: "Update" })

            OperationService.getOperationByNum(this.state.ForUpdate).then((res) => {

                let { numOperation, dateOperation, montantOperation } = res.data.data;
                this.setState({
                    numOperation: numOperation,
                    dateOperation: dateOperation,
                    montantOperation: montantOperation,
                })
            })
        }
    }


    onSubmit(e) {
        e.preventDefault();


        const newOp = {
            numOperation: this.state.numOperation,
            montantOperation: this.state.montantOperation,
            dateOperation: this.state.dateOperation
        }


        if (e.target.value == 'Save') {
            OperationService.addoperation(newOp).then(res => {
                this.setState({ message: res });
            })

        }

        if (e.target.value == 'Update') {
            OperationService.updateOperation(this.state.ForUpdate, newOp).then(res => {
                // this.setState({ message: res });
                console.log("response = ", res)
            })
        }



        this.props.history.push("/operations")
        // console.log("Abonne : ", this.state.message);

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
                <div className="container">

                    <div className="now">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1 className="text-center">{this.state.actionButton == "Update" ? "Update Operation" : "Add Operation"}</h1>
                            <form>
                                <div className="form-group">
                                    <input value={this.state.numOperation} onChange={this.onChange} type="text" className="form-control form-control-lg" name="numOperation" placeholder="Num Operation" />
                                </div>

                                <div className="form-group">
                                    <input value={this.state.montantOperation} onChange={this.onChange} type="text" className="form-control form-control-lg" name="montantOperation" placeholder="Montant Operation" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.dateOperation} onChange={this.onChange} type="text" className="form-control form-control-lg" name="dateOperation" placeholder="Date Operation" />
                                </div>
                                {/* <div className="form-group">
                                    <select value={this.state.montantOperation} onChange={this.onChange} className="form-control form-control-lg" name="montantOperation">
                                        <option value="">montantOperation</option>
                                        <option value="M">M</option>
                                        <option value="F">F</option>

                                    </select>
                                </div> */}


                                <input type="submit" onClick={this.onSubmit} className="btn btn-success " style={{ marginRight: "50px", marginBottom: "10px" }} value={this.state.actionButton} />
                                <input type="submit" onClick={this.cancel} className="btn btn-danger " style={{ marginRight: "50px", marginBottom: "10px" }} value="Cancel" />


                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
