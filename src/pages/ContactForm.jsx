import React from 'react'

const ContactForm = () => {
    return <>
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
    </>
}

export default ContactForm