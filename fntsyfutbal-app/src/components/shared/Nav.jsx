import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/join'>Sign Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>

    </nav>
)

export default Nav