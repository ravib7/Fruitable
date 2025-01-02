import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/admin");
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <span className="fs-4 fw-semibold">Admin Panel</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto gap-md-0 gap-lg-4">
                            <li className="nav-item my-md-3 my-lg-0">
                                <NavLink
                                    to="admincontact"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link bg-primary text-light rounded-3 px-md-2" : "nav-link text-light"
                                    }
                                >
                                    <i className="fa fa-address-book me-2"></i>
                                    Contact Page
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="admincheckout"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link bg-primary text-light rounded-3 px-md-2" : "nav-link text-light"
                                    }
                                >
                                    <i className="fa fa-shopping-cart me-2"></i>
                                    Checkout Page
                                </NavLink>
                            </li>
                        </ul>
                        <div className='my-md-3 my-lg-0'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link bg-primary text-light" : "nav-link text-light"
                                }
                                onClick={handleLogout}
                            >
                                <i className="fa fa-sign-out-alt fs-5 me-2"></i>
                                Sign Out
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Outlet for content */}
            <div className="container-fluid">
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;
