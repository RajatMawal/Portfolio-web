
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const LendingPage = () => {
  return (
    <>
   {/* <NavLink to="/"> */}
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
   {/* </NavLink> */}
    </>
  )
}

export default LendingPage