import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                        <Link to="/" className="navbar-brand"  >
                            Home
                        </Link>
                        <Link to="/" className="navbar-brand"  >
                            Abonnes
                        </Link>
                        <Link to="/" className="navbar-brand"  >
                            Categories
                        </Link>
                        <Link to="/operations" className="navbar-brand"  >
                            Operations
                        </Link>
                        <Link to="/" className="navbar-brand"  >
                            Comptes
                        </Link>


                    </nav>
                </header>
            </div>
        )
    }
}
