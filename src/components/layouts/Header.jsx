import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/components/Header.css';


const Header = () => {
    return (
        <>
            {/*-------------------- Top-Panel-Section-Start -------------------*/}
            <div className="container d-flex justify-content-between top-panel d-none d-lg-flex">
                <div>
                    <a className="me-3" href="#">
                        <i className="fa-solid fa-location-dot me-2 text-warning"></i>123 Street, New York
                    </a>
                    <a href="#">
                        <i className="fa-solid fa-envelope me-2 text-warning"></i>Email@Example.com
                    </a>
                </div>
                <div>
                    <Link href="#">Privacy Policy</Link>
                    <Link className="m-2" href="#"> / </Link>
                    <Link href="#">Terms of Use</Link>
                    <Link className="m-2" href="#"> / </Link>
                    <Link href="#">Sales and Refunds</Link>
                </div>
            </div>
            {/*-------------------- Top-Panel-Section-End -------------------*/}

            {/*-------------------- Navbar Section Start -------------------*/}
            <nav className="navbar navbar-expand-lg shadow sticky-top bg-white">
                <div className="container">
                    <Link to='/' className="navbar-brand fs-1 fw-bold" style={{ color: "#81c408" }} href="#">Fruitables</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto gap-3">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/shop'>Shop</Link>
                            <Link className='nav-link' to='/shopDetails'>Shop Detail</Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="buton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className='dropdown-item' to='/cart'>Cart</Link></li>
                                    <li><Link className='dropdown-item' to='/chackout'>Chackout</Link></li>
                                    <li><Link className='dropdown-item' to='/testimonial'>Testimonial</Link></li>
                                    <li><Link className='dropdown-item' to='/404Page'>404 Page</Link></li>
                                </ul>
                            </li>
                            <Link className='nav-link' to='/contact'>Contact</Link>
                        </div>
                        <div className="icon py-sm-4 mt-3 mt-md-0 mt-lg-0">
                            <i className="fa-solid fa-magnifying-glass serach-icon"></i>
                            <i className="fa-solid fa-bag-shopping mx-4 fs-2 text-color" style={{ color: "#81c408" }}></i>
                            <i className="fas fa-user fs-2 text-color" style={{ color: "#81c408" }}></i>
                        </div>
                    </div>
                </div >
            </nav >
            {/*-------------------- Navbar Section End -------------------*/}
        </>
    )
}

export default Header