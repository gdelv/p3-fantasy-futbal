import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../shared/Button'

const Nav = () => (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <h3>ACCOUNT NAME</h3>
        <NavLink to='/login'>Log Out</NavLink>
        <NavLink to='/login/:id/roster'>
            <Button title='Edit Roster' className='edit-roster'/>
            <Button title='Delete Roster' className='delete-roster'/>

        </NavLink>


    </nav>
)

export default Nav