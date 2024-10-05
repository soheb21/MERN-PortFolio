import React, { useEffect, useState } from 'react'
import logo from "../assets/gfg.png"
import menu_bar from "../assets/menu-icon.png"
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
    const [isOpen, seIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    return (
        <nav className={`flex transition-all bg-slate-800     ease-in-out duration-500   z-50 py-2 ${sticky ? 'md:bg-slate-800  ' : 'md:bg-transparent'} fixed top-0 w-full  justify-between items-center px-2 md:px-2`}>
            <img src={logo} alt="logo" className='w-[70px] object-cover h-[50px] mt-[10px]' />
            <ul className={` transition-all ease-in-out duration-300 ${!isOpen ? "-right-[100%]" : "right-0 "} bg-slate-800 text-[18px] ${sticky ? 'md:text-white ' : 'text-white md:text-black dark:text-white '}   fixed pt-4 md:pt-0 top-0 bottom-0 mt-[50px] md:static md:mr-10 md:mt-0 md:flex items-center md:bg-transparent   cursor-pointer`}>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500' >Home</li>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500' >About</li>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500' >Education</li>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500' >Skill </li>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500' >Projects</li>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500' ><Button className='md:text-lg'>Contact us</Button> </li>
                <li className='my-[25px] mx-[40px] md:mx-[16px] md:my-0  hover:text-orange-500 text-black dark:text-slate-500' ><ModeToggle /></li>
            </ul>
            <img onClick={() => seIsOpen(prev => !prev)} className='w-[32px] md:hidden' src={menu_bar} alt="nav_logo" />
        </nav >
    )
}

export default Navbar