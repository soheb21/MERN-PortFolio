import React, { useEffect, useState } from 'react'
import "./Project.css"
import project_img from "../../../assets/a.png"
import Input from '../../Components/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { projectAddAsync, projectDeleteAsync, projectUpdateAsync } from '../../../redux/admin_store/admin_project/adminProjectAPI'
import { toast } from 'react-toastify'

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
    const { project, error, loading, message } = useSelector(state => state.project);
    const dispatch = useDispatch();
    const [ProjectFormData, setProjectFormData] = useState(initilizeProjectData);
    const [isEdit, setIsEdit] = useState(false);
    const [ids, setids] = useState(null);
    const [showModel, setshowModel] = useState(false)



    useEffect(() => {

        if (error) {
            toast.error(error || "Something went wrong")

        }
        if (message) {
            toast.success(message);

        }

    }, [message, error, project, loading])

    if (loading) {
        return <h1 style={{ display: "grid", placeContent: "center", placeItems: "center", color: "blue" }}>Loading...</h1>

    }
    const handleReset = () => {
        setshowModel(!showModel);
        setIsEdit(!isEdit);
        setProjectFormData(initilizeProjectData);
    }

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (isEdit && ids !== null) {
            formData.append("project_poster", ProjectFormData.project_poster)
            formData.append("project_name", ProjectFormData.project_name)
            formData.append("project_des", ProjectFormData.project_des)
            formData.append("project_tech", ProjectFormData.project_tech)
            formData.append("project_Github_link", ProjectFormData.project_Github_link)
            formData.append("project_deployed_link", ProjectFormData.project_deployed_link)
            formData.append("company_name", ProjectFormData.company_name)
            formData.append("company_role", ProjectFormData.company_role)
            formData.append("company_period", ProjectFormData.company_period)
            formData.append("project_category", ProjectFormData.project_category)
            dispatch(projectUpdateAsync({ id: ids, form: formData }))
            handleReset();

        } else {
            formData.append("project_poster", ProjectFormData.project_poster)
            formData.append("project_name", ProjectFormData.project_name)
            formData.append("project_des", ProjectFormData.project_des)
            formData.append("project_tech", ProjectFormData.project_tech)
            formData.append("project_Github_link", ProjectFormData.project_Github_link)
            formData.append("project_deployed_link", ProjectFormData.project_deployed_link)
            formData.append("company_name", ProjectFormData.company_name)
            formData.append("company_role", ProjectFormData.company_role)
            formData.append("company_period", ProjectFormData.company_period)
            formData.append("project_category", ProjectFormData.project_category)
            dispatch(projectAddAsync(formData))
            handleReset();
        }

    }

    const handleEdit = (item) => {
        setProjectFormData({
            "project_poster": item.project_poster.project_poster_URL,
            "project_name": item.project_name,
            "project_des": item.project_des,
            "project_tech": item.project_tech,
            "project_Github_link": item.project_Github_link,
            "project_deployed_link": item.project_deployed_link,
            "company_name": item.company_name,
            "company_role": item.company_role,
            "company_period": item.company_period,
            "project_category": item.project_category
        })
        setids(item._id)
        setIsEdit(prev => !prev);
        setshowModel(!showModel)
    }


    return (
        <div className='container projects'>
            <div className="project_header">
                <h3>Projects</h3>
                <button onClick={() => setshowModel(!showModel)} className='btn'>+Add</button>
            </div>
            <div className={`${showModel ? 'proejctModel' : 'hideModel'}`} >
                <p onClick={handleReset} style={{ cursor: "pointer" }}>close</p>
                <Input title={"Project"} handleSubmit={handleProjectSubmit} controls={controls} formData={ProjectFormData} setFormData={setProjectFormData} />
            </div>
            {
                project?.map((item) => (
                    <div key={item._id} className="project">
                        <img src={item?.project_poster.project_poster_URL} alt="project_img" />
                        <h3>{item?.project_name}</h3>
                        <p>Tech: <span>{item?.project_tech}</span> </p>
                        <ul>
                            <li onClick={() => handleEdit(item)}>Edit</li>
                            <li onClick={() => dispatch(projectDeleteAsync(item._id))}>Delete</li>
                        </ul>
                    </div>
                ))
            }


        </div>
    )
}

export default Projects