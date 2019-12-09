import React from 'react'
import { NavLink } from 'react-router-dom'
// import Button from '../shared/Button'

const Nav = () => (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/join'>Sign Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/login/:id/roster'></NavLink>


    </nav>
)

export default Nav