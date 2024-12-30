import React from 'react'
import Layout from '../components/layouts/Layout'
import CheckoutForm from '../components/CheckoutForm'
import Brocoli from "../assets/img/vegetable-item-2.jpg"
import Potatoes from "../assets/img/vegetable-item-5.jpg"
import Banana from "../assets/img/vegetable-item-3.png"
import "../assets/styles/components/Checkout.css"

const Chackout = () => {
    return <>
        <Layout>
            <div className="row" style={{ padding: "5% 6% 1%" }}>
                <div className="col-md-12 col-lg-6">
                    <CheckoutForm />
                </div>
                <div className="col-md-12 col-lg-6" style={{ marginTop: "85px" }}>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th className='w-25' scope='col'>Products</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='py-4' scope="row">
                                    <img className='img-fluid rounded-circle' style={{ width: "65%" }} src={Brocoli} alt="" />
                                </th>
                                <td className='py-3 py-md-5 py-lg-5'>Awesome Brocoli</td>
                                <td className='py-3 py-md-5 py-lg-5'>₹195</td>
                                <td className='py-3 py-md-5 py-lg-5'>1</td>
                                <td className='py-3 py-md-5 py-lg-5'>₹130</td>
                            </tr>
                            <tr>
                                <th className='py-4' scope="row">
                                    <img className='img-fluid rounded-circle' style={{ width: "65%" }} src={Potatoes} alt="" />
                                </th>
                                <td className='py-3 py-md-5 py-lg-5'>Potatoes</td>
                                <td className='py-3 py-md-5 py-lg-5'>₹50</td>
                                <td className='py-3 py-md-5 py-lg-5'>1</td>
                                <td className='py-3 py-md-5 py-lg-5'>₹50</td>
                            </tr>
                            <tr>
                                <th className='py-4' scope="row">
                                    <img className='img-fluid rounded-circle' style={{ width: "65%" }} src={Banana} alt="" />
                                </th>
                                <td className='py-3 py-md-5 py-lg-5'>Big Banana</td>
                                <td className='py-3 py-md-5 py-lg-5'>₹55</td>
                                <td className='py-3 py-md-5 py-lg-5'>1</td>
                                <td className='py-3 py-md-5 py-lg-5'>₹55</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 className='ms-5 py-5'>Subtotal <span className='ms-3'>₹500</span></h5>
                    <hr />
                    <div className="row ms-5 py-4">
                        <div className="col-md-6 col-lg-2 py-4">
                            <h5>Shipping</h5>
                        </div>
                        <div className="col-md-6 col-lg-10">
                            <span className='ms-5'>
                                <input class="form-check-input" type="checkbox" value="" id="id" />
                                <label class="form-check-label ms-2" for="id">
                                    <h6 className='fw-light'>Free Shipping</h6>
                                </label>
                            </span>
                            <div className='ms-5'>
                                <input class="form-check-input" type="checkbox" value="" id="id" />
                                <label class="form-check-label ms-2" for="id">
                                    <h6 className='fw-light'>Flat rate: $15.00 </h6>
                                </label>
                            </div>
                            <div className='ms-5'>
                                <input class="form-check-input" type="checkbox" value="" id="id" />
                                <label class="form-check-label ms-2" for="id">
                                    <h6 className='fw-light'>Local Pickup: $8.00</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h5 className='ms-5 py-5'>TOTAL <span className='ms-4'>₹1000</span></h5>
                    <hr />
                    <div class="form-check ms-4 py-4">
                        <input class="form-check-input" type="checkbox" value="" id="id" />
                        <label class="form-check-label" for="id">
                            Direct Bank Transfer
                        </label>
                        <p className='py-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                    <hr />
                    <div class="form-check ms-4 my-5">
                        <input class="form-check-input" type="checkbox" value="" id="id" />
                        <label class="form-check-label" for="id">
                            Check Payments
                        </label>
                    </div>
                    <hr />
                    <div class="form-check ms-4 my-5">
                        <input class="form-check-input" type="checkbox" value="" id="id" />
                        <label class="form-check-label" for="id">
                            Cash On Delivery
                        </label>
                    </div>
                    <hr />
                    <div class="form-check ms-4 my-5">
                        <input class="form-check-input" type="checkbox" value="" id="id" />
                        <label class="form-check-label" for="id">
                            Paypal
                        </label>
                    </div>
                    <hr />
                    <button className="checkout-btn btn fw-semibold px-4 py-3 my-3 w-100 rounded-3" style={{ border: "1px solid #ffb524", }} type="submit">PLACE ORDER</button>
                </div>
            </div >
        </Layout >
    </>
}

export default Chackout