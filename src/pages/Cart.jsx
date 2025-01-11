import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import Brocoli from "../assets/img/vegetable-item-2.jpg"
import Potatoes from "../assets/img/vegetable-item-5.jpg"
import Banana from "../assets/img/vegetable-item-3.png"

const Cart = () => {

    const [incressQuantity, setIncressQuantity] = useState(0)
    const [oneIncressQuantity, setOneIncressQuantity] = useState(0)
    const [twoIncressQuantity, setTwoIncressQuantity] = useState(0)

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
                                    <th scope="col">Handle</th>
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
                                            <i class="bi bi-dash-circle fs-3 me-3" style={{ cursor: 'pointer', color: "#81c408" }} onClick={decrees}></i>
                                            {incressQuantity}
                                            <i class="bi bi-plus-circle fs-3 ms-3" style={{ cursor: 'pointer', color: "#81c408" }} onClick={incress}></i>
                                        </h6>
                                    </td>
                                    <td className='py-4'>₹130</td>
                                    <td className='py-3'>
                                        <i class="bi bi-x-circle fs-2 text-danger" style={{ cursor: 'pointer' }}></i>
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
                                            <i class="bi bi-dash-circle fs-3 me-3" style={{ cursor: 'pointer', color: "#81c408" }} onClick={oneDecrees}></i>
                                            {oneIncressQuantity}
                                            <i class="bi bi-plus-circle fs-3 ms-3" style={{ cursor: 'pointer', color: "#81c408" }} onClick={oneIncress}></i>
                                        </h6>
                                    </td>
                                    <td className='py-4'>₹50</td>
                                    <td className='py-3'>
                                        <i class="bi bi-x-circle fs-2 text-danger" style={{ cursor: 'pointer' }}></i>
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
                                            <i class="bi bi-dash-circle fs-3 me-3" style={{ cursor: 'pointer', color: "#81c408" }} onClick={twoDecrees}></i>
                                            {twoIncressQuantity}
                                            <i class="bi bi-plus-circle fs-3 ms-3" style={{ cursor: 'pointer', color: "#81c408" }} onClick={twoIncress}></i>
                                        </h6>
                                    </td>
                                    <td className='py-4'>₹55</td>
                                    <td className='py-3'>
                                        <i class="bi bi-x-circle fs-2 text-danger" style={{ cursor: 'pointer' }}></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 col-lg-4"></div>
                    <div className="col-md-12 col-lg-4"></div>
                    <div className="col-md-12 col-lg-4"></div>
                </div>
            </div>
        </Layout >
    </>
}

export default Cart