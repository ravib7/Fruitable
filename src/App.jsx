import React, { createContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
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
import Dashhome from './admin/pages/Dashhome'
import AdminSignIn from './admin/pages/AdminSignIn'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import ProtectedRoute from './admin/pages/ProtectedRoutes'
import axios from 'axios'

export const AuthContext = createContext()

const App = () => {

  const navigate = useNavigate()
  const [editData, setEditData] = useState()

  const updateContact = async (values, resetForm) => {
    if (editData) {
      await axios.patch(`http://localhost:5000/contact/${editData.id}`, values);
      toast.success("Updated Successfully");
      setEditData(null);
      resetForm();
      navigate("./admin/admincontact")
      readContact();
    } else {
      toast.error("Failed to update the contact");
      console.error(error);
    }
  };

  return <div>
    <AuthContext.Provider value={{ editData, setEditData, updateContact }}>
      <ToastContainer />
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

        <Route>
          <Route path='/signin' element={<AdminSignIn />} />
        </Route>

        {/* Admin Header */}
        <Route path='/admin'
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashhome />} />
          <Route path="admincontact" element={<AdminContact />} />
          <Route path="admincheckout" element={<AdminChackout />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </AuthContext.Provider>
  </div >
}

export default App