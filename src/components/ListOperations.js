import React, { Component } from 'react';
import OperationService from '../services/OperationService';
import { Link } from "react-router-dom";
import loaderGif from '../loader.gif';


export default class ListOperations extends Component {
    constructor(props) {
        super(props)

        this.state = {
            operations: [],
            loader: true
        }

        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.deleteoperation = this.deleteoperation.bind(this);
    }

    componentDidMount() {
        OperationService.getOperations().then((res) => {
            console.log(res.data.data)
            this.setState({ operations: res.data.data, loader: false })
        })
    }

    onClickUpdate(numOperation) {
        this.props.history.push(`/updateoperation/${numOperation}`)
    }

    deleteoperation(numOperation) {
        OperationService.deleteoperation(numOperation).then((res) => {
            this.setState({
                operation: this.state.operations.filter(
                    operation => operation.numOperation != numOperation
                )
            })

        })
    }


    render() {

        return (
            <di>
                <h2 className="text-center" style={{ marginTop: "10px" }}>Operations</h2>





                <div className="row">
                    <Link to="/addOperation" className="btn btn-primary mb-3">
                        <i className="fa fa-plus-circle"> Create operation</i>
                    </Link>

                    {
                        this.state.loader && (<div className="container">
                            <img height="50" width="50" src={loaderGif} />
                            <p v-if="loader">Chargement des donnees en cours...</p>
                        </div>)
                    }

                    <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0">


                        <thead>
                            <td>Operation</td>
                            <td>Montant</td>
                            <td>Date</td>

                            <td>Actions</td>
                        </thead>


                        <tbody>


                            {
                                this.state.operations.map(operation =>
                                    <tr key={operation.id}>
                                        <td>{operation.numOperation}</td>
                                        <td>{operation.montantOperation}</td>
                                        <td>{operation.dateOperation}</td>

                                        <td>
                                            <button className="btn btn-info" style={{ marginRight: "5px" }} onClick={() => { this.onClickUpdate(operation.numOperation) }} >Update</button>
                                            <button className="btn btn-danger" onClick={() => { this.deleteoperation(operation.numOperation) }} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </di>
        )
    }
}
