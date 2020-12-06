
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
                <span className="brand-text font-weight-light">Cotisation APP</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}

                {/* Sidebar Menu */}
                <nav className="mt-2">

                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Home
              {/* <span className="badge badge-info right">2</span> */}
                                </p>
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
              {/* <span className="badge badge-info right">2</span> */}
                                </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/abonnes" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt" />
                                <p>
                                    Abonnes
              {/* <span className="badge badge-info right"></span> */}
                                </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt" />
                                <p>
                                    Login
              {/* <span className="badge badge-info right"></span> */}
                                </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/operations" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Operations
            </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/operations" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Comptes
            </p>
                            </Link>
                        </li>



                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}

export default Header;
