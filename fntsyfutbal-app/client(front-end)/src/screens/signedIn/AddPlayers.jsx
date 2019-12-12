import React from 'react'
import LayoutSignedIn from '../../components/shared/LayoutSignedIn'
import Button from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'


const AddPlayers = () => (
    <LayoutSignedIn>
    <h4>Add Your Players</h4>
    <NavLink to='/'>
        <Button title='Save Players' className='savePlayers' />
    </NavLink>
</LayoutSignedIn>
)

export default AddPlayers