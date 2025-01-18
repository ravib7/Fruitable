import React, { useEffect } from 'react'
import people1 from '../assets/img/testimonial-1.jpg'
import people2 from '../assets/img/testimonial-2.jpg'
import people3 from '../assets/img/testimonial-3.jpg'
import people4 from '../assets/img/testimonial-4.jpg'
import people5 from '../assets/img/testimonial-5.jpg'
import people6 from '../assets/img/testimonial-6.jpg'


const TestimonialCard = () => {

    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExampleControls');
        if (carouselElement) {
            const carouselInstance = new bootstrap.Carousel(carouselElement, {
                interval: 10000,
                ride: "carousel",
            });
        } else {
            console.error("Carousel element not found in the DOM.");
        }
    }, []);

    return <>
        <div className='my-5 text-center'>
            <h4 style={{ color: "#81c408" }}>Our Testimonial</h4>
            <p className='display-5 fw-bold opacity-75'>Our Client Saying!</p>
        </div>

        <div className='position-relative d-flex justify-content-center'>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" style={{ backgroundColor: "black" }}></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" style={{ backgroundColor: "black" }} ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div className="container my-5">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000" data-bs-touch="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                                <div class="card" style={{ backgroundColor: "#f4f6f8" }}>
                                    <div class="card-body">
                                        <div>
                                            <p className='text-center'>Fresh produce delivered right to my doorstep! The fruits were juicy, and the vegetables were farm-fresh. Highly recommend this service!</p>
                                            <div style={{ border: "1px solid #ffb524" }}></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className="row">
                                                <div className="col-md-5 col-lg-3 text-center">
                                                    <img src={people1} width={100} height={100} className='rounded-3' alt="" />
                                                </div>
                                                <div className="col-md-7 col-lg-9 text-center text-lg-start mt-4 mt-md-0 mt-lg-0">
                                                    <h4>Aarav Sharma</h4>
                                                    <p>Software Engineer</p>
                                                    <p>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                                <div class="card" style={{ backgroundColor: "#f4f6f8" }}>
                                    <div class="card-body">
                                        <div>
                                            <p className='text-center'>As a nutritionist, I’m very particular about quality, and this website delivers the best. The organic options are a huge plus!</p>
                                            <div style={{ border: "1px solid #ffb524" }}></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className="row">
                                                <div className="col-md-5 col-lg-3 text-center">
                                                    <img src={people2} width={100} height={100} className='rounded-3' alt="" />
                                                </div>
                                                <div className="col-md-7 col-lg-9 text-center text-lg-start mt-4 mt-md-0 mt-lg-0">
                                                    <h4>Priya Nair</h4>
                                                    <p>Nutritionist</p>
                                                    <p>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                                <div class="card" style={{ backgroundColor: "#f4f6f8" }}>
                                    <div class="card-body">
                                        <div>
                                            <p className='text-center'>Great variety of fruits and vegetables. The delivery was on time, but packaging can be slightly improved.</p>
                                            <div style={{ border: "1px solid #ffb524" }}></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className="row">
                                                <div className="col-md-5 col-lg-3 text-center">
                                                    <img src={people3} width={100} height={100} className='rounded-3' alt="" />
                                                </div>
                                                <div className="col-md-7 col-lg-9 text-center text-lg-start mt-4 mt-md-0 mt-lg-0">
                                                    <h4>Rohan Mehta</h4>
                                                    <p>Chartered Accountant</p>
                                                    <p>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                                <div class="card" style={{ backgroundColor: "#f4f6f8" }}>
                                    <div class="card-body">
                                        <div>
                                            <p className='text-center'>The organic vegetable section is fantastic. I feel healthier knowing I’m eating the best quality produce. Highly recommended!</p>
                                            <div style={{ border: "1px solid #ffb524" }}></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className="row">
                                                <div className="col-md-5 col-lg-3 text-center">
                                                    <img src={people4} width={100} height={100} className='rounded-3' alt="" />
                                                </div>
                                                <div className="col-md-7 col-lg-9 text-center text-lg-start mt-4 mt-md-0 mt-lg-0">
                                                    <h4>Nisha Verma</h4>
                                                    <p>Content Writer</p>
                                                    <p>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fa fa-star-half-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                                <div class="card" style={{ backgroundColor: "#f4f6f8" }}>
                                    <div class="card-body">
                                        <div>
                                            <p className='text-center'>Great service with a wide variety of vegetables and fruits. Some items were out of stock, but otherwise, I’m very happy.</p>
                                            <div style={{ border: "1px solid #ffb524" }}></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className="row">
                                                <div className="col-md-5 col-lg-3 text-center">
                                                    <img src={people5} width={100} height={100} className='rounded-3' alt="" />
                                                </div>
                                                <div className="col-md-7 col-lg-9 text-center text-lg-start mt-4 mt-md-0 mt-lg-0">
                                                    <h4>Varun Kapoor</h4>
                                                    <p>Mechanical Engineer</p>
                                                    <p>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 mb-5 mb-lg-0">
                                <div class="card" style={{ backgroundColor: "#f4f6f8" }}>
                                    <div class="card-body">
                                        <div>
                                            <p className='text-center'>Fantastic quality and excellent service! The fruits were fresh and tasted amazing. The discounts on bulk orders are great too!</p>
                                            <div style={{ border: "1px solid #ffb524" }}></div>
                                        </div>
                                        <div className='mt-4'>
                                            <div className="row">
                                                <div className="col-md-5 col-lg-3 text-center">
                                                    <img src={people6} width={100} height={100} className='rounded-3' alt="" />
                                                </div>
                                                <div className="col-md-7 col-lg-9 text-center text-lg-start mt-4 mt-md-0 mt-lg-0">
                                                    <h4>Meera Deshmukh</h4>
                                                    <p>HR Manager</p>
                                                    <p>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fas fa-star"></i></span>
                                                        <span class="text-warning"><i class="fa fa-star-half-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TestimonialCard