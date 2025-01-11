import React from 'react'
import Layout from '../components/layouts/Layout'
import Brocoli from "../assets/img/vegetable-item-2.jpg"
import Potatoes from "../assets/img/vegetable-item-5.jpg"
import Banana from "../assets/img/vegetable-item-3.png"

const Cart = () => {
    return <>
        <Layout>
            <div className="container">
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
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
                    </div>
                    <div className="col-md-12 col-lg-4"></div>
                    <div className="col-md-12 col-lg-4"></div>
                    <div className="col-md-12 col-lg-4"></div>
                </div>
            </div>
        </Layout>
    </>
}

export default Cart