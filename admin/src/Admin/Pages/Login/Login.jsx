import React, { useEffect, useState } from 'react'
import Input from '../../Components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../../redux/admin_store/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clesrAllAuthErrors } from '../../../redux/admin_store/auth/authSlice';

const Login = () => {
    const controls = [
        {
            id: 1,
            label: "E-mail",
            placeholder: "example@gmail.com",
            type: "email",
            name: "email"
        },
        {
            id: 2,
            label: "Password",
            placeholder: "password...",
            type: "text",
            name: "password"
        }
    ]
    const initilizeLoginData = {
        email: "",
        password: ""
    }
    const [loginFormData, setLoginFormData] = useState(initilizeLoginData);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { error, isAuth, loading } = useSelector(state => state.auth);


    useEffect(() => {
        if (error) {
            toast.error(error ? error : "Something went wrong!!");
            dispatch(clesrAllAuthErrors());
        }
        if (isAuth) {
            navigate("/")
        }

    }, [dispatch, error, isAuth])
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = loginFormData;
        if (!email || !password) {
            alert("please Provide ALl fields");
            return
        }
        dispatch(loginAsync(loginFormData));
    }
    if (loading) {
        return <h1 style={{ display: "grid", placeContent: "center", placeItems: "center", color: "blue" }}>Loading...</h1>

    }
    return (
        <div>
            <div className='flexProperty'>
                <Input title={"Login"} handleSubmit={handleLoginSubmit} controls={controls} formData={loginFormData} setFormData={setLoginFormData} />
            </div>
        </div>
    )
}

export default Login