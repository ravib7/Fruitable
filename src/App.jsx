import React, { useEffect, useState } from 'react'
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
import { AdminLayout, PublicLayout } from '../src/admin/layout/AdminLayout'
import AdminContact from './admin/pages/AdminContact'
import AdminChackout from './admin/pages/AdminChackout'
import Admin from './admin/pages/Admin'
import DashBord from './admin/pages/DashBord'

const App = () => {

  return <div>
    <Routes>
      {/* Public Header */}
      <Route path='/' element={<PublicLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shopDetails' element={<ShopDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/chackout' element={<Chackout />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/404Page' element={<Page404 />} />
        <Route path='/contact' element={<Contact />} />
      </Route>

      {/* Admin Header */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route path="admincontact" element={<AdminContact />} />
        <Route path="admincheckout" element={<AdminChackout />} />
      </Route>

      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </div >
}

export default App