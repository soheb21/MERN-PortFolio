import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';


const ProtectedRoutes = ({ children }) => {
    const { isAuth } = useSelector(state => state.auth);
    if (!isAuth || !localStorage.getItem("token")) {
        return <Navigate to={"/login"} />;
    }
    return children;
}

export default ProtectedRoutes