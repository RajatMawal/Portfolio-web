import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './pages/Footer.jsx'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import LendingPage from './pages/LendingPage.jsx'
import Contact from './pages/Contact.jsx'
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<LendingPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
      <ToastContainer />
    <Footer/>
    </BrowserRouter>
  )
}

export default App