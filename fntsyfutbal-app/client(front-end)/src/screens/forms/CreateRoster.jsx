import React from 'react'
import Layout from '../../components/shared/Layout'
import { Input } from '../../components/shared/Input'
const RosterCreate = (props) => {

    const { onChange, onSubmit } = props
    const { playername, imageUrl } = props.formData
    return (
        <>
            <Layout>
                <h4>Create your account!</h4>
            </Layout>

            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <Input
                    name='playername'
                    value={playername}
                    placholder='playername'
                    required={true}
                    onChange={(e) => onchange(e)}
                />
                <Input
                    name='imageUrl'
                    value={imageUrl}
                    placholder='ImageUrl'
                    required={true}
                    onChange={(e) => onchange(e)}
                />
            </form>
        </>
    )
}
export default RosterCreate