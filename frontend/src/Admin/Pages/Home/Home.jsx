import React, { useState } from 'react'
import "./Home.css"
import Input from '../../Components/Input/Input'

const Home = () => {

    const controls = [
        {
            id: 1,
            label: "Position",
            name: "position",
            type: "text",
            placeholder: "Your Position"
        },
        {
            id: 2,
            label: "Full-Name",
            name: "fullname",
            type: "text",
            placeholder: "Your Full-Name"
        },
        {
            id: 3,
            label: "Linkdin",
            name: "linkdin_url",
            type: "text",
            placeholder: "Your linkdin-url"
        },
        {
            id: 4,
            label: "Github",
            name: "github_url",
            type: "text",
            placeholder: "Your github-url"
        },
        {
            id: 5,
            label: "Instagram",
            name: "insta_url",
            type: "text",
            placeholder: "Your insta-url"
        },
        {
            id: 6,
            label: "Resume",
            name: "resume",
            type: "file",
        },
        {
            id: 7,
            label: "Logo",
            name: "logo",
            type: "file",
        },

    ]
    const initilizeHomeData = {
        position: "",
        fullname: "",
        linkdin_url: "",
        github_url: "",
        insta_url: "",
        resume: "",
        logo: ""
    }
    const [homeFormData, setHomeFormData] = useState(initilizeHomeData);
    const handleSubmit = () => {
        console.log("1", homeFormData);
        setHomeFormData(initilizeHomeData);
    }

    return (
        <div className='flexProperty'>
            <Input title={"Home"} handleSubmit={handleSubmit} controls={controls} formData={homeFormData} setFormData={setHomeFormData} />
        </div>
    )
}

export default Home