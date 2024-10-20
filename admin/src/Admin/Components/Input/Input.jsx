import React from 'react'
import "./Input.css"
import { useLocation } from 'react-router-dom'

const Input = ({ title, handleSubmit, controls, formData, setFormData }) => {
    const { pathname } = useLocation();
    return (
        <div className='container input-container'>
            <h3>{title}</h3>

            {
                controls?.map((item) => (
                    <div key={item.id} className="input-info">
                        <label htmlFor="">{item?.label}</label>
                        <input
                            type={item.type}
                            value={item.type === 'file' ? '' : formData[item?.name]}
                            placeholder={item?.placeholder}
                            onChange={(e) => setFormData(
                                item.type !== 'file' ?
                                    {
                                        ...formData,
                                        [item.name]: e.target.value

                                    }
                                    :
                                    {
                                        ...formData,
                                        [item.name]: e.target.files[0]

                                    }

                            )}
                            name={item.name} />
                        {item.name === 'resume' && formData.resume ? <p>Selected file: {formData.resume.name ? formData.resume.name : formData?.resume?.slice(0, 15)}</p> : ""}
                        {item.name === 'logo' && formData.logo ? <p>Selected file: {formData.logo.name ? formData.logo.name : formData?.logo?.slice(0, 15)}</p> : ""}
                        {item.name === 'icon_img' && formData.icon_img ? <p>Selected file: {formData.icon_img.name ? formData?.icon_img.name : formData?.icon_img.slice(0, 15)}</p> : ""}
                        {item.name === 'project_poster' && formData.project_poster ? <p>Selected file: {formData?.project_poster.name ? formData.project_poster?.name : formData?.project_poster.slice(0, 15)}</p> : ""}


                    </div>

                ))
            }
            <button onClick={handleSubmit} className='submitbtn'>{pathname === '/login' ? "Login" : "Add"}</button>

        </div>
    )
}

export default Input