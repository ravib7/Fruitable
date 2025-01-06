import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const AdminContact = () => {

    const { setEditData } = useContext(AuthContext)
    const [contact, setContact] = useState([])
    const navigate = useNavigate();

    const readContact = async () => {
        const { data } = await axios.get("http://localhost:5000/contact")
        setContact(data)
    }

    const deletContact = async id => {
        axios.delete("http://localhost:5000/contact/" + id)
        toast.success("Information Deleted Successfully")
        readContact()
    }

    useEffect(() => {
        readContact();
    }, []);


    return <>

        <div className="row">
            <div className="col-md-12 col-lg-12">
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
                                    <button onClick={() => {
                                        setEditData(item);
                                        navigate('/contact');
                                    }} className="btn btn-warning me-3 mb-3 mb-md-0">
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
            </div>
        </div >

    </>
}

export default AdminContact