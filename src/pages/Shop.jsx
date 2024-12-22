import React from 'react'
import Layout from '../components/layouts/Layout'
import heroImg from '../assets/img/hero-img-1.png';


const Shop = () => {
    return <>
        <Layout>
            <div className="bg-image">
                <img className="img-fluid" src={heroImg} alt="" />
                <div className="hs-text">Hero Section Text</div>
                <div className="hs-slider">Slider Content</div>
            </div>
        </Layout>
    </>
}

export default Shop