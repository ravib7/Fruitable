import axios from 'axios'
import { toast } from 'react-toastify'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const AdminChackout = () => {

    const { setCheditData } = useContext(AuthContext)
    const [checkout, setCheckout] = useState([])
    const navigate = useNavigate()

    const readCheckout = async () => {
        const { data } = await axios.get("http://localhost:5000/checkout")
        setCheckout(data)
    }

    const deleteCheckout = async id => {
        axios.delete("http://localhost:5000/checkout/" + id)
        toast.success("Information Deleted Successfully")
        readCheckout()
    }

    useEffect(() => {
        readCheckout()
    }, [])

    return <>
        <div className="row">
            <div className="col-md-12 col-lg-12">
                <table className="table table-bordered table-hover mt-5">
                    <thead className="text-center">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Town/City</th>
                            <th>Country</th>
                            <th>Post/zip Code</th>
                            <th>Mobile</th>
                            <th>Email Address</th>
                            <th>Notes</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {checkout.map((item) => (
                            <tr key={item.id}>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.cname}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.country}</td>
                                <td>{item.pcode}</td>
                                <td>{item.mobile}</td>
                                <td>{item.email}</td>
                                <td>{item.notes}</td>
                                <td>
                                    <button onClick={() => {
                                        setCheditData(item);
                                        navigate('/chackout');
                                    }} className="btn btn-warning mb-2">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                        onClick={() => deleteCheckout(item.id)}
                                        className="btn btn-danger"
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default AdminChackout