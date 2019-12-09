import React from 'react'
import Layout from '../../components/shared/Layout'
import CreateAccForm from '../forms/CreateAccForm'
import { api } from '../../services/apiConfig'

class Join extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            imgUrl: '',
            errorMsg: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, firstName, lastName, email, password, imgUrl } = this.state
        const data = {
            username,
            password,
            firstName,
            lastName,
            email,
            imgUrl
        }
        api.post('join', data)
            .then((response) => response.status === 201 ? this.props.history.push('/userhome') : null)
            .catch(() => this.setState({ errorMsg: 'There was an error' }))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { username, firstName, lastName, email, password, imgUrl } = this.state
        return (
            <Layout>
                <h4>Create your account!</h4>
                <CreateAccForm
                    formData={{ username, firstName, lastName, email, password, imgUrl }}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </Layout>
        )
    }
}


export default Join