import React from 'react'
import "./Contact.css"
import { useDispatch, useSelector } from 'react-redux'
import { contactDeleteAsync } from '../../../redux/admin_store/admin_contact/adminContactAPI'
import { toast } from 'react-toastify'

const Contact = () => {
    const { contact, error, loading } = useSelector(state => state.contact)
    if (error) {
        return toast.error(error || "Something went wrong")
    }
    if (loading) {
        return <h1 style={{ display: "grid", placeContent: "center", placeItems: "center", color: "blue" }}>Loading...</h1>
    }
    const dispatch = useDispatch();
    return (
        <div className='container contacts'>
            <h2>Contacts</h2>
            {
                contact?.map((item) => (
                    <div key={item._id} className="contact">
                        <h4>Send-Name: <span>{item?.senderName}</span></h4>
                        <h4>Subject: <span>{item?.subject}</span> </h4>
                        <p>Message: <span>{item?.message}</span></p>
                        <button className='contactbtn' onClick={() => dispatch(contactDeleteAsync(item._id))}>delete</button>
                    </div>
                ))
            }



        </div>
    )
}

export default Contact