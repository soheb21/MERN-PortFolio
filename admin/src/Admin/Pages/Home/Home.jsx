import React, { useEffect, useState } from 'react'
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
            label: "Twitter",
            name: "twitter_url",
            type: "text",
            placeholder: "Your twitter-url"
        },
        {
            id: 7,
            label: "Short-Description",
            name: "short_des",
            type: "text",
            placeholder: "Your short-description"
        },
        {
            id: 8,
            label: "Resume",
            name: "resume",
            type: "file",
        },
        {
            id: 9,
            label: "Logo",
            name: "logo",
            type: "file",
        },

    ]
    const { home, loading } = useSelector(state => state.home);

    const initilizeHomeData = {
        position: "",
        fullname: "",
        linkdin_url: "",
        github_url: "",
        insta_url: "",
        twitter_url: "",
        short_des: "",
        resume: "",
        logo: ""


    }
    const [homeFormData, setHomeFormData] = useState(initilizeHomeData);


    const extractData = () => {
        setHomeFormData({
            position: home && home.position || "",
            fullname: home && home.fullname || "",
            linkdin_url: home && home.linkdin_url || "",
            github_url: home && home.github_url || "",
            insta_url: home && home.insta_url || "",
            twitter_url: home && home.twitter_url || "",
            short_des: home && home.short_des || "",
            resume: home && home?.resume && home.resume?.resume_URL || "",
            logo: home && home?.logo && home.logo?.logo_UR || "",
        })
    }

    useEffect(() => {
        extractData();
    }, [])


    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("position", homeFormData.position);
        form.append("fullname", homeFormData.fullname);
        form.append("linkdin_url", homeFormData.linkdin_url);
        form.append("github_url", homeFormData.github_url);
        form.append("insta_url", homeFormData.insta_url);
        form.append("twitter_url", homeFormData.twitter_url);
        form.append("short_des", homeFormData.short_des);
        if (homeFormData.resume) {
            form.append("resume", homeFormData.resume);
        }
        if (homeFormData.logo) {
            form.append("logo", homeFormData.logo);
        }

        dispatch(homeupdate({ form, id: home?._id }))
    }

    if (loading) {
        return <h1 style={{ display: "grid", placeContent: "center", placeItems: "center", color: "blue" }}>Loading...</h1>
    }



    return (
        <div className='flexProperty home'>
            <Input title={"Home"} handleSubmit={handleSubmit} controls={controls} formData={homeFormData} setFormData={setHomeFormData} />
        </div>
    )
}

export default Home