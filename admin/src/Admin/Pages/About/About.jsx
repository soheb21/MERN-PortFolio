import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
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
    const initilizeAboutData = {
        fullname: "",
        email: "",
        phone: "",
        education: "",
        des: "",
    }
    const [AboutFormData, setAboutFormData] = useState(initilizeAboutData);
    const handleAboutSubmit = () => {
        console.log("1", AboutFormData);
        setAboutFormData(initilizeAboutData);
    }

    return (
        <div className='flexProperty'>
            <Input title={"About"} handleSubmit={handleAboutSubmit} controls={controls} formData={AboutFormData} setFormData={setAboutFormData} />
        </div>

    )
}

export default About