import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Project from './page/Project'
import Footer from './page/Footer'



function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>

        <Footer />


      </Router>
    </ThemeProvider>
  )
}

export default App
