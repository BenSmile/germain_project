import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.cancel = this.cancel.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log("username  = ", this.state.password)
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.history.push("/home")
       
        console.log("object = ", this.state.username);
    }


    render() {
        return ReactDOM.createPortal(<div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" name="username" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" name="password" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                    </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>

                </div>
                {/* /.login-card-body */}
            </div>
        </div>,
            document.getElementById('login'))



    }
}
