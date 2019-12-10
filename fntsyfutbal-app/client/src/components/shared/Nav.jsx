import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import socerball from '../../screens/images/socerball.png'
// import Button from '../shared/Button'

const Nav = (props) => (
    <nav className="navbar">
        <div className="title">
        <img src={socerball} alt="" />
            <h2>Fantasy Futball</h2>
           
        </div>
        <div className="nav-items">
            <NavLink to='/join' className='navList'>Join</NavLink>
            <NavLink to='/login' className='navList'>Log In</NavLink>
            <NavLink to='/login/:id/roster' className='navList'></NavLink>
        </div>
       
    </nav>
     
)

export default Nav