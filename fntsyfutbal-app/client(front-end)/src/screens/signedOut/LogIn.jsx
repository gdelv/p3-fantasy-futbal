import React from 'react'
import Layout from '../../components/shared/Layout'
import LogInForm from '../forms/LogInForm'
import { api } from '../../services/apiConfig'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMsg: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password} = this.state
        const data = {
            username,
            password
        }
        api.post('/users', data)
            .then((response) => response.status === 201 ? this.props.history.push('/userhome') : null)
            .catch(() => this.setState({ errorMsg: 'There was an error' }))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { username, password } = this.state
        return (
            <Layout>
                <h4>Log In to your account!</h4>
                <LogInForm
                    formData={{ username, password }}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </Layout>
        )
    }
}


export default LogIn