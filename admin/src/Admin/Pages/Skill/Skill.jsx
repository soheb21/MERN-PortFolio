import React, { useEffect, useState } from 'react'
import "./Skill.css"
import Input from '../../Components/Input/Input'
import icn from "../../../assets/logo.png"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { skillAddAsync, skillDeleteAsync, skillUpdateAsync } from '../../../redux/admin_store/admin_skill/adminSkillAPI'

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

    const { skill, error, loading, message } = useSelector(state => state.skill);
    const dispatch = useDispatch();
    const initilizeSkillData = {
        title: "",
        icon_img: "",

    }
    const [SkillFormData, setSkillFormData] = useState(initilizeSkillData);
    const [isEdit, setIsEdit] = useState(false);
    const [ids, setids] = useState(null);
    const [showModel, setshowModel] = useState(false)



    useEffect(() => {
        if (loading) {
            <h1>Loading...</h1>
        }
        if (error) {
            toast.error(error || "Something went wrong")

        }
        if (message) {
            toast.success(message);

        }

    }, [message, error, skill, loading])



    const handleReset = () => {
        setshowModel(!showModel);
        setIsEdit(!isEdit);
        setSkillFormData(initilizeSkillData);
    }

    const handleSkillSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (isEdit && ids !== null) {
            formData.append("title", SkillFormData.title)
            formData.append("icon_img", SkillFormData.icon_img)
            dispatch(skillUpdateAsync({ id: ids, form: formData }))
            handleReset();

        } else {
            formData.append("title", SkillFormData.title)
            formData.append("icon_img", SkillFormData.icon_img)
            dispatch(skillAddAsync(formData))
            handleReset();
        }

    }

    const handleEdit = (item) => {
        setSkillFormData({
            title: item?.title,
            icon_img: item?.icon_img.icon_img_URL,
        })
        setids(item._id)
        setIsEdit(prev => !prev);
        setshowModel(!showModel)
    }



    return (
        <div className='container skill'>
            <div className={`${showModel ? 'skillModel' : 'hideModel'}`} >
                <p onClick={handleReset} style={{ cursor: "pointer" }}>close</p>
                <Input title={"Skill"} handleSubmit={handleSkillSubmit} controls={controls} formData={SkillFormData} setFormData={setSkillFormData} />
            </div>
            <button onClick={() => setshowModel(!showModel)} className='skill-add'>+Add</button>
            {
                skill?.map((item) => (
                    <div key={item._id} className=" skill-info">
                        <div className="left">
                            <h3>{item.title}</h3>
                            <img src={item.icon_img.icon_img_URL} alt="icn" />
                        </div>
                        <ul className="right">
                            <li onClick={() => handleEdit(item)}>Edit</li>
                            <li onClick={() => dispatch(skillDeleteAsync(item._id))} >Delete</li>
                        </ul>

                    </div>
                ))
            }


        </div>



    )
}

export default Skill