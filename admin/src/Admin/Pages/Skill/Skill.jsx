import React, { useState } from 'react'
import "./Skill.css"
import Input from '../../Components/Input/Input'
import icn from "../../../assets/logo.png"

const Skill = () => {
    const controls = [
        {
            id: 1,
            label: "Technologies",
            name: "title",
            type: "text",
            placeholder: "Your skill"
        },
        {
            id: 2,
            label: "Icon-image",
            name: "icon_img",
            type: "file",
            placeholder: "Your Icon-image"
        },
    ]
    const initilizeSkillData = {
        title: "",
        icon_img: "",

    }
    const [SkillFormData, setSkillFormData] = useState(initilizeSkillData);
    const handleSkillSubmit = () => {
        console.log("1", SkillFormData);
        setSkillFormData(initilizeSkillData);
    }
    const [showModel, setshowModel] = useState(false)




    return (
        <div className='container skill'>
            <div className={`${showModel ? 'skillModel' : 'hideModel'}`} >
                <p onClick={() => setshowModel(!showModel)} style={{ cursor: "pointer" }}>close</p>
                <Input title={"Skill"} handleSubmit={handleSkillSubmit} controls={controls} formData={SkillFormData} setFormData={setSkillFormData} />
            </div>
            <button onClick={() => setshowModel(!showModel)} className='skill-add'>+Add</button>
            <div className=" skill-info">
                <div className="left">
                    <h3>React JS</h3>
                    <img src={"./vite.svg"} alt="icn" />
                </div>
                <ul className="right">
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>

            </div>
            <div className=" skill-info">
                <div className="left">
                    <h3>Angular JS</h3>
                    <img src={icn} alt="icn" />
                </div>
                <p>Edit</p>
            </div>
            <div className=" skill-info">
                <div className="left">
                    <h3>Angular JS</h3>
                    <img src={icn} alt="icn" />
                </div>
                <p>Edit</p>
            </div>
            <div className=" skill-info">
                <div className="left">
                    <h3>Angular JS</h3>
                    <img src={icn} alt="icn" />
                </div>
                <p>Edit</p>
            </div>
            <div className=" skill-info">
                <div className="left">
                    <h3>Angular JS</h3>
                    <img src={icn} alt="icn" />
                </div>
                <p>Edit</p>
            </div>
        </div>



    )
}

export default Skill