import React from 'react'
import LayoutSignedIn from '../shared/LayoutSignedIn'
import Button from '../shared/Button'
import { NavLink } from 'react-router-dom'

const HomeSignedIn = () => (
    <LayoutSignedIn>
        <h4>Welcome to Fantasy Futbal!</h4>
        <NavLink to='create'>
            <Button title='Create Roster' className='home' />
        </NavLink>
    </LayoutSignedIn>
)


export default HomeSignedIn