import React from 'react'
import "./Input.css"

const Input = ({ title, handleSubmit, controls, formData, setFormData }) => {
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

                    </div>

                ))
            }
            <button onClick={handleSubmit} className='submitbtn'>Add</button>

        </div>
    )
}

export default Input