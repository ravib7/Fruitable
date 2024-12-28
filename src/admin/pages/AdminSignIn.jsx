import React, { useEffect, useState } from 'react'
import "/src/admin/assets/styles/Admin.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminSignIn = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/admin");
        }
    }, [isLoggedIn, navigate]);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().required(),
            password: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            const validUsername = "admin"; // Replace with your desired username
            const validPassword = "123"; // Replace with your desired password

            if (values.username === validUsername && values.password === validPassword) {
                toast.success("Sign In Successfully")
                setIsLoggedIn(true); // Hide the form
                navigate("/admin"); // Navigate to the contact page
            } else {
                toast.error("Invalid username or password")
            }
            resetForm();
        }
    });
    return <>
        <div className="center-container">
            <div className="form-container">
                <div className="form-header">
                    <h3>Admin Login</h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder=""
                            {...formik.getFieldProps("username")}
                        />
                        <label htmlFor="username">Username</label>
                        {/* {formik.touched.username && formik.errors.username ? (
                            <div className="error">{formik.errors.username}</div>
                        ) : null} */}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            autoComplete="current-password"
                            placeholder=""
                            {...formik.getFieldProps("password")}
                        />
                        <label htmlFor="password">Password</label>
                        {/* {formik.touched.password && formik.errors.password ? (
                            <div className="error">{formik.errors.password}</div>
                        ) : null} */}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none" style={{ color: "#1E90FF" }}>
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default AdminSignIn