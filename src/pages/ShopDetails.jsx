import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import '../../src/assets/styles/components/checkout.css'
import { Link } from 'react-router-dom'
import Brocoli from "../assets/img/single-item.jpg"
import Apple from "/src/assets/img/featur-1.jpg"
import Strawberry from "/src/assets/img/featur-2.jpg"
import Cauliflower from "/src/assets/img/featur-3.jpg"
import Capsicum from "/src/assets/img/vegetable-item-4.jpg"
import Potato from "/src/assets/img/vegetable-item-5.jpg"
import Coriander from "/src/assets/img/vegetable-item-6.jpg"


const ShopDetails = () => {

    const [incressQuantity, setIncressQuantity] = useState(1)

    const incress = () => {
        setIncressQuantity(incressQuantity + 1)
    }
    const decrees = () => {
        if (incressQuantity > 0) {
            setIncressQuantity(incressQuantity - 1)
        }
    }

    return <>
        <Layout>
            <div className="container my-5">
                <div className="row gap-4">
                    <div className="col-md-12 col-lg-4">
                        <img className='img-fluid rounded-3' style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} src={Brocoli} alt="" />
                    </div>

                    <div className="col-md-12 col-lg-4">
                        <p className='fw-bold fs-4 text-secondary'>Brocoli</p>

                        <p className='opacity-75'>Category: Vegetables</p>

                        <p className='fs-5 fw-bold text-secondary'>₹195</p>

                        <p>
                            <span class="text-warning"><i class="fas fa-star"></i></span>
                            <span class="text-warning"><i class="fas fa-star"></i></span>
                            <span class="text-warning"><i class="fas fa-star"></i></span>
                            <span class="text-warning"><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star" style={{ color: "gray" }}></i></span>
                        </p>

                        <p className='opacity-75'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                        <p className='opacity-75 my-4'>Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>

                        <h6 style={{ userSelect: "none" }}>
                            <i class="bi bi-dash fs-4 fw-bolder shadow-sm me-3 d-none d-md-inline-flex" onClick={decrees}></i>
                            {incressQuantity}
                            <i class="bi bi-plus fs-4 shadow-sm ms-3 d-none d-md-inline-flex" onClick={incress}></i>
                        </h6>

                        <Link to="/">
                            <button className="btn checkout-btn fw-semibold py-2 px-4 my-3 rounded-5" style={{ border: "1px solid #ffb524" }} type="submit"> <i className="fa-solid fa-bag-shopping me-3 text-color" style={{ color: "#81c408" }}></i>Add to cart</button>
                        </Link>
                    </div>

                    <div className="col-md-12 col-lg-3">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control py-3" placeholder="keywords" aria-label="Username" aria-describedby="basic-addon1" />
                            <span class="input-group-text" id="basic-addon1">
                                <i className="fa-solid fa-magnifying-glass serach-icon text-secondary"></i>
                            </span>
                        </div>

                        <p className='fs-4 fw-semibold'>Categories</p>

                        <div className='d-flex justify-content-between align-content-center mb-5'>
                            <div style={{ fontSize: "17px", color: "#81c408" }}>
                                <p><i class="bi bi-apple me-2"></i>Apples</p>
                                <p><i class="fas fa-apple-alt me-2"></i>Oranges</p>
                                <p><i class="fas fa-seedling me-2"></i>Strawbery</p>
                                <p><i class="fas fa-lemon me-2"></i>Banana</p>
                                <p><i class="fas fa-carrot me-2"></i>Pumpkin</p>
                            </div>
                            <div className='opacity-75 text-hover' style={{ fontSize: "17px" }}>
                                <p>(3)</p>
                                <p>(5)</p>
                                <p>(2)</p>
                                <p>(8)</p>
                                <p>(5)</p>
                            </div>
                        </div>

                        <p className='fs-4 fw-semibold'>Featured products</p>

                        <div class="d-flex align-items-center justify-content-start">
                            <div class="rounded" style={{ width: "100px", height: "100px" }}>
                                <img className='img-fluid rounded' src={Apple} alt="" />
                            </div>
                            <div className='ms-4'>
                                <h6 class="mb-2">Big Banana</h6>
                                <div class="d-flex mb-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star" style={{ color: "gray" }}></i>
                                </div>
                                <div class="d-flex mb-2">
                                    <h5 class="fw-bold me-2 text-secondary">180₹</h5>
                                    <h5 class="text-danger text-decoration-line-through">200₹</h5>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-start">
                            <div class="rounded" style={{ width: "100px", height: "100px" }}>
                                <img className='img-fluid rounded' src={Strawberry} alt="" />
                            </div>
                            <div className='ms-4'>
                                <h6 class="mb-2">Strawberry</h6>
                                <div class="d-flex mb-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star" style={{ color: "gray" }}></i>
                                </div>
                                <div class="d-flex mb-2">
                                    <h5 class="fw-bold me-2 text-secondary">500₹</h5>
                                    <h5 class="text-danger text-decoration-line-through">535₹</h5>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-start">
                            <div class="rounded" style={{ width: "100px", height: "100px" }}>
                                <img className='img-fluid rounded' src={Cauliflower} alt="" />
                            </div>
                            <div className='ms-4'>
                                <h6 class="mb-2">Brocoli</h6>
                                <div class="d-flex mb-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star" style={{ color: "gray" }}></i>
                                </div>
                                <div class="d-flex mb-2">
                                    <h5 class="fw-bold me-2 text-secondary">180₹</h5>
                                    <h5 class="text-danger text-decoration-line-through">195₹</h5>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-start">
                            <div class="rounded" style={{ width: "100px", height: "100px" }}>
                                <img className='img-fluid rounded' src={Capsicum} alt="" />
                            </div>
                            <div className='ms-4'>
                                <h6 class="mb-2">Capsicum</h6>
                                <div class="d-flex mb-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star" style={{ color: "gray" }}></i>
                                </div>
                                <div class="d-flex mb-2">
                                    <h5 class="fw-bold me-2 text-secondary">95₹</h5>
                                    <h5 class="text-danger text-decoration-line-through">120₹</h5>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-start">
                            <div class="rounded" style={{ width: "100px", height: "100px" }}>
                                <img className='img-fluid rounded' src={Potato} alt="" />
                            </div>
                            <div className='ms-4'>
                                <h6 class="mb-2">Potato</h6>
                                <div class="d-flex mb-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star" style={{ color: "gray" }}></i>
                                </div>
                                <div class="d-flex mb-2">
                                    <h5 class="fw-bold me-2 text-secondary">50₹</h5>
                                    <h5 class="text-danger text-decoration-line-through">70₹</h5>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-start">
                            <div class="rounded" style={{ width: "100px", height: "100px" }}>
                                <img className='img-fluid rounded' src={Coriander} alt="" />
                            </div>
                            <div className='ms-4'>
                                <h6 class="mb-2">Coriander</h6>
                                <div class="d-flex mb-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star" style={{ color: "gray" }}></i>
                                </div>
                                <div class="d-flex mb-2">
                                    <h5 class="fw-bold me-2 text-secondary">80₹</h5>
                                    <h5 class="text-danger text-decoration-line-through">100₹</h5>
                                </div>
                            </div>
                        </div>
                        <button className="btn checkout-btn fw-semibold w-100 py-3 px-5 my-3 rounded-5" style={{ border: "1px solid #ffb524" }} type="submit">View More</button>
                    </div>
                </div>
            </div>
        </Layout >
    </>
}

export default ShopDetails