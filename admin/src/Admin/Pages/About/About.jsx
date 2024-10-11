import React, { useEffect, useState } from 'react'
import Input from '../../Components/Input/Input'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { aboutupdateAsync, getaboutAsync } from '../../../redux/admin_store/admin_about/adminAboutAPI'
"./About.css"

const About = () => {
    const controls = [
        {
            id: 1,
            label: "Full-Name",
            name: "fullname",
            type: "text",
            placeholder: "Your Full-Name"
        },
        {
            id: 2,
            label: "E-mail",
            name: "email",
            type: "email",
            placeholder: "Your E-mail"
        },
        {
            id: 3,
            label: "Phone",
            name: "phone",
            type: "number",
            placeholder: "Your Phone"
        },
        {
            id: 4,
            label: "Education",
            name: "education",
            type: "text",
            placeholder: "Your Education"
        },
        {
            id: 5,
            label: "Description",
            name: "des",
            type: "text",
            placeholder: "Your Description"
        },
    ]
    const { about, error, loading, message } = useSelector(state => state.about);
    const dispatch = useDispatch();

    const initilizeAboutData = {
        fullname: about.fullname || "",
        email: about.email || "",
        phone: about.phone || "",
        education: about.education || "",
        des: about.des || "",
    }
    const [AboutFormData, setAboutFormData] = useState(initilizeAboutData);
    const extractData = () => {
        dispatch(getaboutAsync());
        setAboutFormData({
            fullname: about && about.fullname,
            email: about && about.email,
            phone: about && about.phone,
            education: about && about.education,
            des: about && about.des,
        })

    }
    useEffect(() => {
        extractData();
    }, [])

    useEffect(() => {
        if (error) {
            toast.error(error || "Something went wrong")
            return;
        }
        if (message) {
            toast.success(message);
            return;
        }

    }, [message, error])
    const handleAboutSubmit = () => {
        dispatch(aboutupdateAsync({ id: about._id, form: AboutFormData }))
    }
    if (loading) {
        return <h1 style={{ display: "grid", placeContent: "center", placeItems: "center", color: "blue" }}>Loading...</h1>
    }

    return (
        <div className='flexProperty'>
            <Input title={"About"} handleSubmit={handleAboutSubmit} controls={controls} formData={AboutFormData} setFormData={setAboutFormData} />
        </div>

    )
}

export default About