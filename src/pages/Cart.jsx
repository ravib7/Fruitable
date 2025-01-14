import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import Brocoli from "../assets/img/vegetable-item-2.jpg"
import Potatoes from "../assets/img/vegetable-item-5.jpg"
import Banana from "../assets/img/vegetable-item-3.png"
import "../assets/styles/pages/cart.css"

const Cart = () => {

    const [incressQuantity, setIncressQuantity] = useState(1)
    const [oneIncressQuantity, setOneIncressQuantity] = useState(1)
    const [twoIncressQuantity, setTwoIncressQuantity] = useState(1)

    const incress = () => {
        setIncressQuantity(incressQuantity + 1)
    }
    const decrees = () => {
        if (incressQuantity > 0) {
            setIncressQuantity(addQuantity - 1)
        }
    }

    const oneIncress = () => {
        setOneIncressQuantity(oneIncressQuantity + 1)
    }
    const oneDecrees = () => {
        if (oneIncressQuantity > 0) {
            setOneIncressQuantity(oneIncressQuantity - 1)
        }
    }

    const twoIncress = () => {
        setTwoIncressQuantity(twoIncressQuantity + 1)
    }
    const twoDecrees = () => {
        if (twoIncressQuantity > 0) {
            setTwoIncressQuantity(twoIncressQuantity - 1)
        }
    }

    return <>
        <Layout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th className='img-fluid' style={{ width: "140px" }} scope='col'>Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col" className='d-none  d-md-inline-flex'>Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <img className='img-fluid rounded-circle' style={{ width: "65%" }} src={Brocoli} alt="" />
                                    </th>
                                    <td className='py-4'>Awesome Brocoli</td>
                                    <td className='py-4'>₹195</td>
                                    <td className='py-4'>
                                        <h6 style={{ userSelect: "none" }}>
                                            <i class="bi bi-dash fs-4 fw-bolder shadow-sm me-3 d-none d-md-inline-flex" onClick={decrees}></i>
                                            {incressQuantity}
                                            <i class="bi bi-plus fs-4 shadow-sm ms-3 d-none d-md-inline-flex" onClick={incress}></i>
                                        </h6>
                                    </td>
                                    <td className='py-4'>₹130</td>
                                    <td className='py-3'>
                                        <i class="bi bi-x fs-4 shadow-sm text-danger mt-2 d-none  d-md-inline-flex"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <img className='img-fluid rounded-circle' style={{ width: "65%" }} src={Potatoes} alt="" />
                                    </th>
                                    <td className='py-4'>Potatoes</td>
                                    <td className='py-4'>₹50</td>
                                    <td className='py-3'>
                                        <h6 style={{ userSelect: "none" }}>
                                            <i class="bi bi-dash fs-4 fw-bolder shadow-sm me-3 d-none d-md-inline-flex" onClick={oneDecrees}></i>
                                            {oneIncressQuantity}
                                            <i class="bi bi-plus fs-4 shadow-sm ms-3 d-none d-md-inline-flex" onClick={oneIncress}></i>
                                        </h6>
                                    </td>
                                    <td className='py-4'>₹50</td>
                                    <td className='py-3'>
                                        <i class="bi bi-x fs-4 shadow-sm text-danger mt-2 d-none  d-md-inline-flex"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <img className='img-fluid rounded-circle' style={{ width: "65%" }} src={Banana} alt="" />
                                    </th>
                                    <td className='py-4'>Big Banana</td>
                                    <td className='py-4'>₹55</td>
                                    <td className='py-4'>
                                        <h6 style={{ userSelect: "none" }}>
                                            <i class="bi bi-dash fs-4 fw-bolder shadow-sm me-3 d-none d-md-inline-flex" onClick={twoDecrees}></i>
                                            {twoIncressQuantity}
                                            <i class="bi bi-plus fs-4 shadow-sm ms-3 d-none d-md-inline-flex" onClick={twoIncress}></i>
                                        </h6>
                                    </td>
                                    <td className='py-4'>₹55</td>
                                    <td className='py-3'>
                                        <i class="bi bi-x fs-4 shadow-sm text-danger mt-2 d-none d-md-inline-flex"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row gap-5">
                    <div className="col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <input
                                    type="number"
                                    class="form-control border-0 border-bottom rounded-0 shadow-none mt-5"
                                    placeholder="Enter Coupon Code"
                                />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <button className="btn cart-btn fw-semibold rounded-pill px-4 mt-4" type="button">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 mt-5">
                        <div class="card mb-5">
                            <div class="card-header fs-2 fw-semibold" style={{ backgroundColor: "#f4f6f8" }}><span className='fs-2 me-2 fw-bold'>Cart</span>Total</div>
                            <div class="card-body" style={{ backgroundColor: "#f4f6f8" }}>
                                <div className="d-flex justify-content-between align-content-center">
                                    <h5>Subtotal :</h5>
                                    <p>₹500</p>
                                </div>
                                <div className="d-flex justify-content-between align-content-center mt-3">
                                    <h5>Shipping :</h5>
                                    <p>Flat rate: ₹300 <br /> Shipping to Mumbai.</p>
                                </div>
                            </div>
                            <div class="card-footer" style={{ backgroundColor: "#f4f6f8" }}>
                                <div className="d-flex justify-content-between align-content-center mt-3">
                                    <h5>Total :</h5>
                                    <p>₹1000</p>
                                </div>
                                <button className="btn cart-btn fw-semibold rounded-pill px-4 mt-4 mb-3" type="button">PROCEED CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    </>
}

export default Cart