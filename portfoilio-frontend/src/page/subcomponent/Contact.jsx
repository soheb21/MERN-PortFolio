import React, { useState } from 'react'
import Title from './Title'
import Spinner from '@/utils/Spinner';
import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-react';
import mssg_icon from "../../assets/msg-icon.png"
import axios from 'axios';

const Contact = ({ data, loading }) => {

    let initilizeFormData = {
        senderName: "",
        subject: "",
        message: ""
    }
    const [formData, setFormData] = useState(initilizeFormData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { senderName, subject, message } = formData;
        if (!senderName || !subject || !message) {
            alert("Please Provide all fields");
        } else {
            const data = await axios.post('https://mern-portfolio-lmf4.onrender.com/api/v1/contact/send-message', formData)
            if (data.status === 201) {
                alert("Message Sent")
                setFormData(initilizeFormData);
            } else {
                alert("Server is not working");
                return;
            }
        }
    }
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })

    }
    if (loading) {
        return <Spinner />
    }
    return (
        <div id='contact' className='w-full flex flex-col'>
            <Title title={'Contact us'} />
            {
                loading
                    ? <Spinner />
                    : <div className='flex gap-3 flex-col md:flex-row'>
                        <div className="left w-full flex flex-col justify-center">
                            <h2 className='flex items-center gap-2 text-3xl mb-4' >Get in Touch <img className='w-12' src={mssg_icon} alt="mssg_icon" /></h2>
                            <p className='text-sm md:text-lg'>{`Have a project in mind or need help with your website? I’m here to assist! Whether you're looking for a new website, redesign, or custom development, feel free to reach out. Simply fill out the form or find our contact information below. and I’ll get back to you as soon as possible. Let’s build something great together!`}</p>
                            <ul className='flex flex-col justify-center gap-2'>
                                <li className='flex gap-4 md:text-lg lg:text-xl pt-4 items-center'><MailIcon /> <span>{data?.doc.email}</span></li>
                                <li className='flex gap-4 md:text-lg lg:text-xl pt-4 items-center'><PhoneIcon /> <span>{data?.doc?.phone}</span></li>
                                <li className='flex gap-4 md:text-lg lg:text-xl pt-4 items-center'><LocateIcon /> <span>{data?.doc?.address || "Kausa Market near jama masjid Rhemat mahal ground floor Mumbra Thane 400612 Mumbai"}</span></li>
                            </ul>
                        </div>
                        <form onSubmit={handleSubmit} className="right w-full  md:ml-10 flex flex-col gap-2">
                            <label className='mt-4 mb-1'>Name</label>
                            <input onChange={handleChange} name='senderName' value={formData.senderName} placeholder='Enter your name' className='outline-none border rounded-md dark:text-white text-slate-800 border-orange-500 bg-transparent px-4 py-2 text-l' type="text" />
                            <label className='mt-4 mb-1'>Subject</label>
                            <input onChange={handleChange} name='subject' value={formData.subject} placeholder='Enter your subject' className='outline-none border rounded-md dark:text-white text-slate-800 border-orange-500 bg-transparent px-4 py-2 text-l' type="text" />
                            <label className='mt-4 mb-1'>message</label>
                            <textarea onChange={handleChange} name='message' value={formData.message} placeholder='Enter your message' className='outline-none border rounded-md dark:text-white text-slate-800 border-orange-500 bg-transparent px-4 py-2 text-l' rows="5"></textarea>
                            <button type='submit' className='bg-orange-500   px-1 mt-4  py-2 text-lg text-white rounded-md transition-all ease-in duration-300 hover:scale-105 w-full mb-8 md:mb-10'>Submit</button>
                        </form>
                    </div>
            }


        </div>
    )
}

export default Contact