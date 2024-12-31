import { useFormik } from 'formik'
// import React, { useState } from 'react'
import * as yup from "yup"
import "../assets/styles/components/Checkout.css"
import axios from 'axios'
import { toast } from 'react-toastify'

const CheckoutForm = () => {

    const createCheckout = async () => {
        await axios.post("http://localhost:5000/checkout", formik.values)
        toast.success("Form Submitted Successfully")
        // resetForm()
    }

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            cname: "",
            address: "",
            city: "",
            country: "",
            pcode: "",
            mobile: "",
            email: "",
            notes: "",
        },
        validationSchema: yup.object({
            fname: yup.string().required("Enter First Name"),
            lname: yup.string().required("Enter Last Name"),
            cname: yup.string().required("Enter Company Name"),
            address: yup.string().required("Enter Address"),
            city: yup.string().required("Enter City Name"),
            country: yup.string().required("Enter Country Name"),
            pcode: yup.string().required("Enter Pin/zip Code"),
            mobile: yup.string().required("Enter Mobile Number"),
            email: yup.string().required("Enter Email"),
            notes: yup.string().required("Enter Notes"),

        }),
        onSubmit: (values, { resetForm }) => {
            // console.log(values);
            createCheckout()
            resetForm()
        }
    })


    return <>
        <h1>Billing Details</h1>
        <form onSubmit={formik.handleSubmit} className='my-5'>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <label className="form-label">First Name *</label>
                    <input {...formik.getFieldProps("fname")} type="text" className="form-control my-2" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <label className="form-label">Last Name *</label>
                    <input {...formik.getFieldProps("lname")} type="text" className="form-control my-2" />
                </div>
            </div>
            <div className='my-3'>
                <label className="form-label">Company Name *</label>
                <input {...formik.getFieldProps("cname")} type="text" className="form-control my-2" />
            </div>
            <div>
                <label className="form-label">Address *</label>
                <input {...formik.getFieldProps("address")} type="text" placeholder='House Number Street Name ' className="form-control my-2" />
            </div>
            <div className='my-3'>
                <label className="form-label">Town / City *</label>
                <input {...formik.getFieldProps("city")} type="text" className="form-control my-2" />
            </div>
            <div>
                <label className="form-label">Country *</label>
                <input {...formik.getFieldProps("country")} type="text" className="form-control my-2" />
            </div>
            <div className='my-3'>
                <label className="form-label">Postcode / Zip *</label>
                <input {...formik.getFieldProps("pcode")} type="text" className="form-control my-2" />
            </div>
            <div>
                <label className="form-label">Mobile *</label>
                <input {...formik.getFieldProps("mobile")} type="text" className="form-control my-2" />
            </div>
            <div className='my-3'>
                <label className="form-label">Email Address *</label>
                <input {...formik.getFieldProps("email")} type="text" className="form-control my-2" />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="id" />
                <label class="form-check-label" for="id">
                    Create an account?
                </label>
            </div>
            <hr />
            <div class="form-check my-3">
                <input class="form-check-input" type="checkbox" value="" id="id" />
                <label class="form-check-label" for="id">
                    Ship to a different address?
                </label>
            </div>
            <div class="form-floating">
                <textarea {...formik.getFieldProps("notes")} class="form-control" style={{ height: "250px" }}></textarea>
                <label for="floatingTextarea">Order Notes (Optional)</label>
            </div>
            <button className="checkout-btn btn fw-semibold px-4 py-3 my-3 w-100 rounded-3" style={{ border: "1px solid #ffb524", }} type="submit">PLACE ORDER</button>
        </form>
    </>
}

export default CheckoutForm