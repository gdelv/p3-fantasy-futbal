import React, { Component } from 'react'
import { logIn } from "../../services/auth"; 
import socerball from '../images/socerball.png'
import Layout from '../../components/shared/Layout';

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignIn = (event) => {
        event.preventDefault()

        const { history, setUser } = this.props
        logIn(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg:'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })

    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if(this.state.isError) {
            return (
                <button type='submit' className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type='submit' className='login-button'>Sign In</button>
        }
    }

    render() {
        const { username, password } = this.state

        return (
        
            <div className='row'>
                <div className='form-container'>
                    <div className='sign-in'>
                        <img src={socerball} alt="" />
                        <h3>Sign In</h3>
                    </div>

                    <form className='placeholder-login' onSubmit={this.onSignIn}>
                        <label>Username</label>
                        <input
                            required
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Enter Username'
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Enter Password'
                            onChange={this.handleChange}
                        />
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn