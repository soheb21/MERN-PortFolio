import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Project from './page/Project'
import About from './page/subcomponent/About'
import Footer from './page/Footer'
import { ModeToggle } from './components/mode-toggle'
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        {/* <ModeToggle /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
        <ToastContainer position='bottom-right' transition={1500} />
      </Router>
    </ThemeProvider>
  )
}

export default App
