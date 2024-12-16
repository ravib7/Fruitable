import React from 'react'
import Layout from '../components/layouts/Layout'
import heroImg from '../assets/img/hero-img.jpg';


const Home = () => {
    return (
        <>
            <Layout>
                {/*------------------ Hero-Section-Start ---------------*/}

                {/* <div className="bg-image">
                    <img className="img-fluid" src={heroImg} alt="" />
                    <div className="hs-text">Hero Section Text</div>
                    <div className="hs-slider">Slider Content</div>
                </div> */}

                <h1 className='h-100'>Home</h1>

                {/*------------------ Hero-Section-End -----------------*/}
            </Layout>
        </>
    )
}

export default Home