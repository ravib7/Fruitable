import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from 'clsx'
import { toast } from "react-toastify"
import '../assets/styles/components/ContactForm.css';
import { useState } from 'react'

const ContactForm = () => {

    const [editData, setEditData] = useState()

    const handleClasses = key => clsx({
        "form-control py-3 rounded-3": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const createContact = async () => {
        await axios.post("http://localhost:5000/contact", formik.values)
        // readContact()
        toast.success("Form Submited Successfully")
    }

    const formik = useFormik({
        initialValues: {
            name: editData ? editData.name : "",
            email: editData ? editData.email : "",
            message: editData ? editData.message : ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter Email"),
            message: yup.string().required("Enter Message"),
        }),
        onSubmit: (values, { resetForm }) => {
            if (editData) {

            }
            createContact()
            resetForm()
        }
    })


    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className="contact-form my-5">
                <div className="row px-5">
                    <div className="col-md-12 col-lg-7">
                        <div class="input-group">
                            <input className={handleClasses("name")}   {...formik.getFieldProps("name")} type="text" placeholder='Enter Your Name' />
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">{formik.errors.name}</div>
                        <div class="input-group my-3">
                            <input className={handleClasses("email")}  {...formik.getFieldProps("email")} type="email" placeholder='Enter Your Emaill' />
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">{formik.errors.email}</div>
                        <div class="input-group">
                            <textarea className={handleClasses("message")} rows={5} cols={10} {...formik.getFieldProps("message")} placeholder='Your Message'></textarea>
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">{formik.errors.message}</div>
                        <button className="btn fw-semibold px-4 py-3 my-3 w-100 rounded-3" style={{ border: "1px solid #ffb524" }} type="submit">Submit</button>
                    </div>
                    <div className="col-md-12 col-lg-5 mb-5">
                        <div class="card rounded-3">
                            <div class="card-body d-inline-flex">
                                <div style={{ color: "#81c408" }}>
                                    <i className="fa-solid fa-location-dot fs-2"></i>
                                </div>
                                <div className='ms-4'>
                                    <h4 className='fw-semibold'>Address</h4>
                                    <p className='opacity-75'>123 Street New York.USA</p>
                                </div>
                            </div>
                        </div>
                        <div class="card my-3">
                            <div class="card-body d-inline-flex rounded-3">
                                <div style={{ color: "#81c408" }}>
                                    <i class="fa-solid fa-envelope fs-2"></i>
                                </div>
                                <div className='ms-4'>
                                    <h4 className='fw-semibold'>Mail Us</h4>
                                    <p className='opacity-75'>info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body d-inline-flex rounded-3">
                                <div style={{ color: "#81c408" }}>
                                    <i class="fa-solid fa-phone fs-2"></i>
                                </div>
                                <div className='ms-4'>
                                    <h4 className='fw-semibold'>Telephone</h4>
                                    <p className='opacity-75'>(+012) 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
}

export default ContactForm