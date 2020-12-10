import React, { Component } from 'react';
import CompteService from '../services/CompteService';
import { Link } from "react-router-dom";
import loaderGif from '../loader.gif';



export default class ListComptes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loader: true,
      comptes: []
    }

    this.onClickUpdate = this.onClickUpdate.bind(this);
    this.deleteAbonne = this.deleteAbonne.bind(this);
  }

  componentDidMount() {
    CompteService.getcomptes().then((res) => {
      console.log(res.data.data)
      this.setState({ comptes: res.data.data, loader: false })
    })
  }

  onClickUpdate(telephone) {
    this.props.history.push(`/updateAbonne/${telephone}`)
  }

  deleteAbonne(telephone) {
    // CompteService.deleteAbonne(telephone).then((res) => {
    //   this.setState({
    //     abonne: this.state.comptes.filter(
    //       abonne => abonne.telephone != telephone
    //     )
    //   })

    // })
  }


  render() {
    CompteService.getcomptes();
    return (


      <div className="row" style={{ marginTop: "10px" }}>

        <Link to="/addAbonne" className="btn btn-primary mb-3">
          <i className="fa fa-plus-circle"> Create Abonne</i>
        </Link>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">comptes</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: 10 }}>#</th>
                    <th>Nom</th>
                    <th>Postnom</th>
                    <th>Age</th>
                    <th>Genre</th>

                    <th>Telephone</th>


                    <th>Actions</th>


                  </tr>
                </thead>
                <tbody>

                  {
                    this.state.loader && (<div className="container">
                      <img height="50" width="50" src={loaderGif} />
                      <p>Chargement des donnees en cours...</p>
                    </div>)
                  }

                  {
                    this.state.comptes.map(abonne =>
                      <tr key={abonne.id}>
                        <td>{abonne.id}</td>

                        <td>{abonne.nom}</td>
                        <td>{abonne.postnom}</td>
                        <td>{abonne.age}</td>
                        <td>{abonne.sexe}</td>
                        <td>{abonne.telephone}</td>
                        <td>
                          <button className="btn btn-info" style={{ marginRight: "5px" }} onClick={() => { this.onClickUpdate(abonne.telephone) }} >Update</button>
                          <button className="btn btn-danger" onClick={() => { this.deleteAbonne(abonne.telephone) }} >Delete</button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            {/* /.card-body
    <div className="card-footer clearfix">
      <ul className="pagination pagination-sm m-0 float-right">
        <li className="page-item"><a className="page-link" href="#">«</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">»</a></li>
      </ul>
    </div> */}
          </div>

        </div>




      </div>
    )
  }
}
