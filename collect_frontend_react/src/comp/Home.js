import React from 'react';
import { Link } from "react-router-dom";


export default function () {
    return (
        <div>
            <h1>Home page</h1>
            <ul className="navbar-nav">
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="questionnaire" className="nav-link">Crrer un questionnaire</Link>
                </li>
            </ul>
        </div>
    )
}
