import React from 'react'
import { Input } from '../../components/shared/Input'
import { Button } from '../../components/shared/Button'


const CreateAccForm = (props) => {

    const { onChange, onSubmit } = props
    const { username, firstName, lastName, email, password, imgUrl } = props.formData
    return (
        <form className='form' onSubmit={(e) => onSubmit(e)}>
            <Input
                name='username'
                value={username}
                required={true}
                placeholder='Username'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='firstName'
                value={firstName}
                required={true}
                placeholder='First Name'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='lastName'
                value={lastName}
                required={true}
                placeholder='Last Name'
                onChange={(e) => onChange(e)}
            />

            <Input
                name='email'
                value={email}
                required={true}
                placeholder='Email'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='password'
                value={password}
                required={true}
                placeholder='Password'
                onChange={(e) => onChange(e)}
            />
            <Input
                name='imgUrl'
                value={imgUrl}
                required={true}
                placeholder='Image URL'
                onChange={(e) => onChange(e)}
            />

            <Button title='Submit' className='submitCreateAcc' />

        </form>
    )
}


export default CreateAccForm