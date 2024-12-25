import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <>
        {/*-------------------- Navbar Section Start -------------------*/}
        <nav className="navbar navbar-expand-lg shadow sticky-top bg-white">
            <div className="container">
                <Link to='/' className="navbar-brand fs-1 fw-bold" style={{ color: "#81c408" }} href="#">Admin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto gap-3">
                        <Link className='nav-link' to='/'>Contact</Link>
                        <Link className='nav-link' to='/adminchackout'>Chackout</Link>
                    </div>
                </div>
            </div >
        </nav >
        {/*-------------------- Navbar Section End -------------------*/}
    </>
}

export default Header