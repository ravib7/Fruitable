import React from 'react'
import '../../assets/styles/components/Footer.css';
import { Link } from 'react-router-dom';
import payment from '../../assets/img/payment.png';


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3">
                            <Link to="/" className='title fw-semibold'><h1>Fruitables</h1></Link>
                            <Link className='title-2'><h6>Fresh products</h6></Link>
                        </div>
                        <div className="col-md-12 col-lg-6 my-3 my-lg-0">
                            <div className="input-group">
                                <input type="text" className="form-control px-4 py-3 rounded-start-pill" placeholder="Your Email" />
                                <button className="btn fw-semibold rounded-pill px-4" type="button">Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-3 text-center text-md-end">
                            <Link><i class="fa-brands fa-twitter f-icon"></i></Link>
                            <Link><i class="fa-brands fa-facebook-f f-icon"></i></Link>
                            <Link><i class="fa-brands fa-youtube f-icon"></i></Link>
                            <Link><i class="fa-brands fa-linkedin-in f-icon"></i></Link>
                        </div>
                    </div>
                    <hr className='hr' />

                    <div className="row gap-lg-0">
                        <div className="col-md-12 col-lg-3">
                            <h4 className='text-light'>Why People Like us!</h4>
                            <p className='f-size'>typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
                            </p>
                            <button type="button" class="btn btn-outline-warning rounded-pill fw-semibold f-btn">Read More</button>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <h4 className='text-light mt-5 mt-lg-0'>Shop Info</h4>
                            <p className='mt-4 text-light d-flex flex-column gap-1 f-size'>
                                <Link className='btn-link text-decoration-none'>About Us</Link>
                                <Link className='btn-link text-decoration-none'>Contact Us</Link>
                                <Link className='btn-link text-decoration-none'>Privac Policy</Link>
                                <Link className='btn-link text-decoration-none'>Terms & Condition</Link>
                                <Link className='btn-link text-decoration-none'>Return Policy</Link>
                                <Link className='btn-link text-decoration-none'>FAQs & Help</Link>
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <h4 className='text-light mt-5 mt-lg-0'>Account</h4>
                            <p className='mt-4 text-light d-flex flex-column gap-1 f-size'>
                                <Link className='btn-link text-decoration-none'>My Account</Link>
                                <Link className='btn-link text-decoration-none'>Shop details</Link>
                                <Link className='btn-link text-decoration-none'>Shopping Cart</Link>
                                <Link className='btn-link text-decoration-none'>Wishlist</Link>
                                <Link className='btn-link text-decoration-none'>Order History</Link>
                                <Link className='btn-link text-decoration-none'>International Orders</Link>
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <h4 className='text-light mt-5 mt-lg-0'>Countact</h4>
                            <p className='f-size'>
                                <p>Address: 1429 Netus Rd, NY 48247</p>
                                <p>Email: Example@gmail.com</p>
                                <p>Phone: +0123 4567 8910</p>
                                <p>Payment Accepted</p>
                            </p>
                            <div>
                                <img src={payment} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between align-content-center' style={{ textWrap: "nowrap", marginTop: "80px" }}>
                        <div>
                            <p className='text-light f-size'><i class="fas fa-copyright text-light me-2"></i><span style={{ color: "#81c408" }}>Fruitables
                            </span>, All right reserved.</p>
                        </div>
                        <div>
                            <p className='text-light f-size me-4'>Designed By <span style={{ color: "#81c408", textDecoration: "underline", textUnderlineOffset: '5px', textDecorationColor: '#fff', }}>RC</span></p>
                        </div>
                    </div>
                </div>


            </div >
            <div style={{ height: "50vh" }}><h1>RC</h1></div>
        </>
    )
}

export default Footer