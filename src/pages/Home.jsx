import React from 'react'
import Layout from '../components/layouts/Layout'
import '../../src/assets/styles/pages/Home.css';
import hsImage1 from '/src/assets/img/hero-img-1.png'
import hsImage2 from '/src/assets/img/hero-img-2.jpg'


const Home = () => {

    return (
        <>
            <Layout>
                {/*------------------ Hero-Section-Start ---------------*/}

                <div className="hero-section">
                    <div className="bg-img">
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-12 col-lg-7 my-5 hs-text">
                                    <h4 style={{ color: "#ffb524" }}>100% Organic Foods</h4>
                                    <p className='fw-bold display-3 mt-2 mb-5 ' style={{ color: "#81c408" }}>Organic Veggies & Fruits Foods</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control px-4 py-3 rounded-start-pill" placeholder="Search" />
                                        <button className="btn fw-semibold rounded-pill px-4" style={{ border: "2px solid #ffb524" }} type="button">Subscribe Now</button>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-5 my-5">
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={hsImage1} className="d-block w-100 rounded-3" style={{ background: "#ffb524" }} alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={hsImage2} class="d-block w-100 rounded-3" alt="..." />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/*------------------ Hero-Section-End -----------------*/}
            </Layout >
        </>
    )
}

export default Home