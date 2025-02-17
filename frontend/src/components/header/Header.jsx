import React from 'react'
import "./header.css"
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <h2>wecodeZA</h2>
        </div>

        <nav className='navbar'>
            <input type="checkbox" id='sidebar'/>
            <label htmlFor="sidebar" className='menu'>
                <BiMenuAltRight />
            </label>

            <ul className='navList'>
                <label htmlFor="sidebar">
                    <IoMdClose />
                </label>

                <li className='navItem'>
                    <a href="#" className='navLink'>Home</a>
                </li>

                <li className='navItem'>
                    <a href="#" className='navLink'>Login</a>
                </li>

                <li className='navItem'>
                    <a href="#" className='navLink'>Sign Up</a>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header