import Home from './Admin/Pages/Home/Home'
import Projects from './Admin/Pages/Projects/Projects'
import './App.css'
import Navbar from './Admin/Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Skill from './Admin/Pages/Skill/Skill'
import About from './Admin/Pages/About/About'
import Contact from './Admin/Pages/Contact/Contact'

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/admin-home' element={<Home />} />
          <Route path='/admin-projects' element={<Projects />} />
          <Route path='/admin-skill' element={<Skill />} />
          <Route path='/admin-about' element={<About />} />
          <Route path='/admin-contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
