import React from 'react'
import Layout from '../components/layouts/Layout'
// import headerImg from '/src/assets/img/cart-page-header-img.jpg'
import '../../src/assets/styles/pages/Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return <>
        <Layout>
            <div className="contact container bg-light rounded-3 shadow my-5">
                <div className='d-flex justify-content-center align-content-center'>
                    <div className="contact-text text-center my-5" style={{ width: "60%" }}>
                        <h1 style={{ color: "#81c408" }}>Get in touch</h1>
                        <p className='opacity-50 my-3'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                        <Link style={{ color: "#81c408", textDecoration: "none" }}>Download Now</Link>
                    </div>
                </div>
                <div className="contact-map">
                    <div class="row">
                        <div className="col-md-12 col-lg-12 px-5">
                            <div style={{ position: "relative", left: "0", width: "100%", height: "400px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2149567615033!2d75.32740299029383!3d19.873143183864364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99178077eb41%3A0x61cae7bcf705976e!2sSKILLHUB!5e0!3m2!1sen!2sin!4v1734760360567!5m2!1sen!2sin"
                                    style={{ border: "0", position: "absolute", top: "0", left: "0", width: "100%", height: "400px", borderRadius: "10px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form my-5">
                    <div className="row  px-5">
                        <div className="col-md-12 col-lg-7">
                            <div class="input-group">
                                <input type="text" class="form-control py-3 rounded-3" placeholder='Enter Your Name' />
                            </div>
                            <div class="input-group my-3">
                                <input type="text" class="form-control py-3 rounded-3" placeholder='Enter Your Emaill' />
                            </div>
                            <div class="input-group">
                                <textarea class="form-control py-5 rounded-3" placeholder='Your Message'></textarea>
                            </div>
                            <button className="btn fw-semibold px-4 py-3 my-3 w-100 rounded-3" style={{ border: "1px solid #ffb524" }} type="button">Submit</button>
                        </div>
                        <div className="col-md-12 col-lg-5 mb-5">
                            <div class="card rounded-3">
                                <div class="card-body d-inline-flex">
                                    <div style={{ color: "#81c408" }}>
                                        <i className="fa-solid fa-location-dot fs-2"></i>
                                    </div>
                                    <div className='ms-4'>
                                        <h4 className='fw-semibold'>Address</h4>
                                        <p className='opacity-75'>123 Street New York.USA</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card my-3">
                                <div class="card-body d-inline-flex rounded-3">
                                    <div style={{ color: "#81c408" }}>
                                        <i class="fa-solid fa-envelope fs-2"></i>
                                    </div>
                                    <div className='ms-4'>
                                        <h4 className='fw-semibold'>Mail Us</h4>
                                        <p className='opacity-75'>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body d-inline-flex rounded-3">
                                    <div style={{ color: "#81c408" }}>
                                        <i class="fa-solid fa-phone fs-2"></i>
                                    </div>
                                    <div className='ms-4'>
                                        <h4 className='fw-semibold'>Telephone</h4>
                                        <p className='opacity-75'>(+012) 1234 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    </>
}

export default Contact