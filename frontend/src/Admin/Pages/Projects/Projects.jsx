import React, { useState } from 'react'
import "./Project.css"
import project_img from "../../../assets/a.png"
import Input from '../../Components/Input/Input'

const Projects = () => {

    const controls = [
        {
            id: 0,
            label: "Project-Poster",
            name: "project_poster",
            type: "file",
            placeholder: "Your Project-Poster"
        },
        {
            id: 1,
            label: "Project-Name",
            name: "project_name",
            type: "text",
            placeholder: "Your Project-Title"
        },
        {
            id: 2,
            label: "Project-Description",
            name: "project_des",
            type: "text",
            placeholder: "Your Project-des"
        },
        {
            id: 3,
            label: "Project-Tech",
            name: "project_tech",
            type: "text",
            placeholder: "Your Project-Tech"
        },
        {
            id: 4,
            label: "Project-Github-Link",
            name: "project_Github_link",
            type: "text",
            placeholder: "Your Project-Github-link"
        },
        {
            id: 5,
            label: "Project-Deployed-link",
            name: "project_deployed_link",
            type: "text",
            placeholder: "Your Project-Deployed-Link"
        },
        {
            id: 6,
            label: "Compnay Name",
            name: "company_name",
            type: "text",
            placeholder: "..Company Name"
        },
        {
            id: 7,
            label: "Compnay Role",
            name: "company_role",
            type: "text",
            placeholder: "..Company Role"
        },
        {
            id: 8,
            label: "Compnay Period",
            name: "company_period",
            type: "text",
            placeholder: "..Company Period"
        },
        {
            id: 9,
            label: "Project Category",
            name: "project_category",
            type: "text",
            placeholder: "..Project Category"
        },
    ]
    const initilizeProjectData = {
        project_poster: "",
        project_name: "",
        project_des: "",
        project_tech: "",
        project_Github_link: "",
        project_deployed_link: "",
        company_name: "",
        company_role: "",
        company_period: "",
        project_category: ""

    }
    const [ProjectFormData, setProjectFormData] = useState(initilizeProjectData);
    const handleProjectSubmit = () => {
        console.log("1", ProjectFormData);
        setProjectFormData(initilizeProjectData);
    }
    const [showModel, setshowModel] = useState(false)
    return (
        <div className='container projects'>
            <div className="project_header">
                <h3>Projects</h3>
                <button onClick={() => setshowModel(!showModel)} className='btn'>+Add</button>
            </div>
            <div className={`${showModel ? 'proejctModel' : 'hideModel'}`} >
                <p onClick={() => setshowModel(!showModel)} style={{ cursor: "pointer" }}>close</p>
                <Input title={"Project"} handleSubmit={handleProjectSubmit} controls={controls} formData={ProjectFormData} setFormData={setProjectFormData} />
            </div>
            <div className="project">
                <img src={project_img} alt="project_img" />
                <h3>Moviefy</h3>
                <p>Tech: <span>MERN</span> </p>
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            </div>
            <div className="project">
                <img src={project_img} alt="project_img" />
                <h3>Moviefy</h3>
                <p>Tech: <span>MERN</span> </p>
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            </div>
            <div className="project">
                <img src={project_img} alt="project_img" />
                <h3>Moviefy</h3>
                <p>Tech: <span>MERN</span> </p>
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            </div>
            <div className="project">
                <img src={project_img} alt="project_img" />
                <h3>Moviefy</h3>
                <p>Tech: <span>MERN</span> </p>
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            </div>
        </div>
    )
}

export default Projects