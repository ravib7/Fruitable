import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'
import Cart from './pages/Cart'
import Chackout from './pages/Chackout'
import Testimonial from './pages/Testimonial'
import Page404 from './pages/Page404'
import Contact from './pages/Contact'
import 'swiper/css';

const App = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shopDetails' element={<ShopDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/chackout' element={<Chackout />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/404Page' element={<Page404 />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </div >
}

export default App