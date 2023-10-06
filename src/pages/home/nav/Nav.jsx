import React from 'react'
import './Nav.scss'
import { NavLink, Navigate, Routes } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__links">
                      <NavLink to='/' className={({isActive})=>isActive?"active":"inactive"}>Home</NavLink>
                      <NavLink to='business'>Business</NavLink>
                      <NavLink to='entertainment'>Entertainment</NavLink>
                      <NavLink to='general'>General</NavLink>
                      <NavLink to='health'>Health</NavLink>
                      <NavLink to='science'>Science</NavLink>
                      <NavLink to='sports'>Sports</NavLink>
                      <NavLink to='technology'>Technology</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav