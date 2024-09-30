import React, { useState } from 'react'
import "./Home.css"
import Input from '../../Components/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { homeupdate } from '../../../redux/admin_store/admin_home/adminHomeAPI'
import { formatProdErrorMessage } from '@reduxjs/toolkit'

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
    const { home } = useSelector(state => state.home);
    const initilizeHomeData = {
        position: home ? home.position : "",
        fullname: home ? home.fullname : "",
        linkdin_url: home ? home.linkdin_url : "",
        github_url: home ? home.github_url : "",
        insta_url: home ? home.insta_url : "",
        resume: home.resume && home.resume.resume_URL,
        logo: home.logo && home.logo.logo_URL,

    }
    const [homeFormData, setHomeFormData] = useState(initilizeHomeData);



    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("position", homeFormData.position);
        form.append("fullname", homeFormData.fullname);
        form.append("linkdin_url", homeFormData.linkdin_url);
        form.append("github_url", homeFormData.github_url);
        form.append("insta_url", homeFormData.insta_url);
        if (homeFormData.resume) {
            form.append("resume", homeFormData.resume);
        }
        if (homeFormData.logo) {
            form.append("logo", homeFormData.logo);
        }

        dispatch(homeupdate({ form, id: home?._id }))
    }



    return (
        <div className='flexProperty'>
            <Input title={"Home"} handleSubmit={handleSubmit} controls={controls} formData={homeFormData} setFormData={setHomeFormData} />
        </div>
    )
}

export default Home