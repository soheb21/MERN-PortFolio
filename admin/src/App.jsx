import Home from './Admin/Pages/Home/Home'
import Projects from './Admin/Pages/Projects/Projects'
import './App.css'
import Navbar from './Admin/Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Skill from './Admin/Pages/Skill/Skill'
import About from './Admin/Pages/About/About'
import Contact from './Admin/Pages/Contact/Contact'
import Login from './Admin/Pages/Login/Login'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify";
import { clesrAllAuthErrors } from './redux/admin_store/auth/authSlice'
import 'react-toastify/dist/ReactToastify.css';

import { getUserAysnc } from './redux/admin_store/auth/authAPI'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { gethome } from './redux/admin_store/admin_home/adminHomeAPI'
import { getaboutAsync } from './redux/admin_store/admin_about/adminAboutAPI'
import { getskillAsync } from './redux/admin_store/admin_skill/adminSkillAPI'
import { getprojectAsync } from './redux/admin_store/admin_project/adminProjectAPI'
import { getContactAsync } from './redux/admin_store/admin_contact/adminContactAPI'

function App() {
  const dispatch = useDispatch();
  const { isAuth, error, message } = useSelector(state => state.auth)
  const token = localStorage.getItem("token");
  useEffect(() => {

    if (isAuth || token) {
      dispatch(getUserAysnc());
      dispatch(gethome());
      dispatch(getaboutAsync());
      dispatch(getskillAsync());
      dispatch(getprojectAsync());
      dispatch(getContactAsync());
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
          <Route path='/admin-home' element={
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
