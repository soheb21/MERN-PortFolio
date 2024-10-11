import React, { useState } from 'react'
import logo from "../../../assets/gfg.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import menuBar from "../../../assets/menu-icon.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <img src={logo} alt="logo_png" />
            <img onClick={() => setIsOpen(prev => !prev)} className='menubar' src={menuBar} alt="menuBar" />

            <ul className={`${!isOpen ? 'toggle-menu' : ''}`}>
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
                <li>
                    <button className='btn'>
                        <Link to={"/admin-contact"}>Contact us</Link>

                    </button>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar