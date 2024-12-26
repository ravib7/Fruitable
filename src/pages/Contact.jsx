import React from 'react'
import Layout from '../components/layouts/Layout'
// import headerImg from '/src/assets/img/cart-page-header-img.jpg'
import '../../src/assets/styles/pages/Contact.css';
import { Link } from 'react-router-dom';
import ContactForm from '../components/layouts/ContactForm';

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
                <ContactForm />
            </div>
        </Layout >
    </>
}

export default Contact