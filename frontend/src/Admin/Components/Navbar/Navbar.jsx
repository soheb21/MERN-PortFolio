import React from 'react'
import logo from "../../../assets/logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo_png" />

            <ul>
                <li>
                    <Link to={"/admin-home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/admin-about"}>About</Link>
                </li>
                <li>
                    <Link to={"/admin-skill"}>Skills</Link>

                </li>
                <li>
                    <Link to={"/admin-projects"}>Project</Link>
                </li>
                <button className='btn'>
                    <Link to={"/admin-contact"}>Contact us</Link>

                </button>
            </ul>
        </nav>
    )
}

export default Navbar