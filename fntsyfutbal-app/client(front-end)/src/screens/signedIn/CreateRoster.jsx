import React from 'react'
import Layout from '../../components/shared/Layout'
import { Input } from '../../components/shared/Input'
import { Button } from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'

const CreateRoster = () => (
    <Layout>
        {/* <h4>Create Your Roster!</h4>
        <h3>Give Your Roster a Title</h3>
        <Input
        title='title'
        value={title}
        placeholder='Roster Title'
        onChange={(e) => onChange(e)}
        /> */}
        <NavLink to='addPlayers'>
            <Button title='Add Players' className='submitCreateRoster' />
        </NavLink>

    </Layout>


)


export default CreateRoster