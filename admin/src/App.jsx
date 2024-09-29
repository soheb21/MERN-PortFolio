import Home from './Admin/Pages/Home/Home'
import Projects from './Admin/Pages/Projects/Projects'
import './App.css'
import Navbar from './Admin/Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Skill from './Admin/Pages/Skill/Skill'
import About from './Admin/Pages/About/About'
import Contact from './Admin/Pages/Contact/Contact'
import Login from './Admin/Pages/Login/Login'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify";
import { clesrAllAuthErrors } from './redux/auth/authSlice'
import 'react-toastify/dist/ReactToastify.css';

import { getUserAysnc } from './redux/auth/authAPI'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {
  const dispatch = useDispatch();
  const { isAuth, error, message } = useSelector(state => state.auth)
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth || token) {
      dispatch(getUserAysnc());
      toast.success(message ? message : null)
    }
    if (error) {
      toast.error(error ? error : "Something went wrong!!")
      dispatch(clesrAllAuthErrors());

    }

  }, [dispatch, isAuth, token, error])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          } />
          <Route path='/admin-projects' element={<ProtectedRoutes><Projects /></ProtectedRoutes>} />
          <Route path='/admin-skill' element={<ProtectedRoutes><Skill /></ProtectedRoutes>} />
          <Route path='/admin-about' element={<ProtectedRoutes><About /></ProtectedRoutes>} />
          <Route path='/admin-contact' element={<ProtectedRoutes><Contact /></ProtectedRoutes>} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <ToastContainer position='bottom-right' />
      </Router>
    </>
  )
}

export default App
