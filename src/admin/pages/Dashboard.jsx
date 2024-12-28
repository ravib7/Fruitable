import React, { useEffect } from 'react';
import "../../admin/assets/styles/Dashboard.css"
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/admin");
    }

    return <>
        <div className="row gap-md-5 gap-lg-0">
            <div className="col-md-2 col-lg-2">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow" style={{ width: '215px', height: '100vh' }}>
                    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-dark">
                        <span className="fs-4 text-primary fw-semibold">Admin Panel</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li>
                            <Link to="admincontact" className="nav-link bg-primary text-light active">
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

                            <i className="fa-solid fa-user fs-5 me-3"></i>
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
            <div className="col-md-8 col-lg-9">
                <Outlet />
            </div>
        </div>
    </>
};

export default Sidebar;
