import React from 'react'
import Layout from '../components/layouts/Layout'
import '../../src/assets/styles/components/checkout.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return <>
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center my-3">
                        <i class="bi bi-exclamation-triangle display-1" style={{ color: "#ffb524" }}></i>
                        <p className='display-1 fw-bolder text-secondary'>404</p>
                        <p className='display-6 fw-semibold text-secondary'>Page Not Found</p>
                        <p className='w-50 mx-auto text-secondary'>We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <Link to="/">
                            <button className="btn checkout-btn fw-semibold py-3 px-5 my-3 rounded-5" style={{ border: "1px solid #ffb524" }} type="submit">Go Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout >
    </>
}

export default Page404