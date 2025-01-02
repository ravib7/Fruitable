import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AdminContact = () => {

    const [contact, setContact] = useState([])

    const readContact = async () => {
        const { data } = await axios.get("http://localhost:5000/contact")
        setContact(data)
    }

    const updateContact = async () => { }

    const deletContact = async id => {
        axios.delete("http://localhost:5000/contact/" + id)
        toast.success("Information Deleted Successfully")
        readContact()
    }

    useEffect(() => { }, [
        readContact()

    ])

    return <>
        <table className="table table-bordered table-hover mt-5">
            <thead className="text-center">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {contact.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>
                            <button className="btn btn-warning me-3 mb-md-2">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button
                                onClick={() => deletContact(item.id)}
                                className="btn btn-danger me-3"
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
}

export default AdminContact