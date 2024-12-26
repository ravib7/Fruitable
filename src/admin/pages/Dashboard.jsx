import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/admin");
    }

    return <>
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
                    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-dark">
                        <span className="fs-4">Dashboard</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li>
                            <Link to="admincontact" className="nav-link text-dark">
                                Contact Page
                            </Link>
                        </li>
                        <li>
                            <Link to="admincheckout" className="nav-link text-dark">
                                Checkout Page
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://via.placeholder.com/32"
                                alt="profile"
                                className="rounded-circle me-2"
                                width="32"
                                height="32"
                            />
                            <strong>Admin</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                            <li>
                                <Link to="/" className="dropdown-item" href="#" onClick={handleLogout}>
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div></div>
            <div className="col-md-6 col-lg-6 my-5">
                <Outlet />
            </div>
        </div>
    </>
};

export default Sidebar;
