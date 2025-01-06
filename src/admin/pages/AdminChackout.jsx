import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminChackout = () => {

    const [checkout, setCheckout] = useState([])

    const readCheckout = async () => {
        const { data } = await axios.get("http://localhost:5000/checkout")
        setCheckout(data)
    }

    const deleteCheckout = async id => {
        axios.delete("http://localhost:5000/checkout/" + id)
        toast.success("Deleted Suucessfully")
        readCheckout()
    }

    useEffect(() => { }, [
        readCheckout()

    ])

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
                                    <button className="btn btn-warning me-3 mb-md-2">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                        onClick={() => deleteCheckout(item.id)}
                                        className="btn btn-danger me-3"
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