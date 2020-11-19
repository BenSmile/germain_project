import React, { Component } from 'react'
import { Link } from "react-router-dom";
import StatisticService from '../services/StatisticService';
import { Line } from 'react-chartjs-2';


export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            abonnesCount: 0,
            comptesCount: 0,
            operationCount: 0,
            dataChart:{}
        }
    }


    componentDidMount() {

        StatisticService.getAbonneCount().then((res) => {
            console.log("abonne = ", res.data.data)
            this.setState({ abonnesCount: res.data.data })
        })

        StatisticService.getOperationCount().then((res) => {
            console.log("operations = ", res.data.data)
            this.setState({ operationCount: res.data.data })
        })

        StatisticService.getOperationDatas().then((res) => {
            console.log("operations = ", res.data.data)
            let data = res.data.data;
            // this.setState({
            //     operationDatas: {
            //         amount: data.map(op => op.total),
            //         days: data.map(op => op.dateOperation),
            //         count: data.map(op => op.count)
            //     }
            // })

            this.setState({
                dataChart : {
                    labels: data.map(op => op.dateOperation),
                    datasets: [{
                        label: "Montant",
                        data: data.map(op => op.total),
                        backgroundColor: ['rgba (75, 192, 192, 0.6)'],
                        borderWidth: 4
                    }]
                }
            })

            console.log('data = ', this.state.operationDatas)

        })



       

    }


    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>{/* /.col */}

                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                <section className="content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>{this.state.abonnesCount}</h3>
                                        <p>Abonnes</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <Link to="/abonnes" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>

                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>{this.state.operationCount}<sup style={{ fontSize: 20 }}></sup></h3>
                                        <p>Opetations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <Link to="/abonnes" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>Comptes</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Categories</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* /.row */}
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Operations</h3>

                                    </div>{/* /.card-header */}
                                    <div className="card-body">
                                        <Line data={this.state.dataChart} />
                                    </div>
                                </div>
                                {/* /.card */}



                            </section>

                            {/* right col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>




            </div>

        )
    }
}
