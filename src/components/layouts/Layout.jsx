import React from 'react'
import Header from './header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </>
    )
}

export default Layout