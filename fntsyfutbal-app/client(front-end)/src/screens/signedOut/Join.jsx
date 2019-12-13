import React, { Component } from 'react'            //minor glitch, the passwords dont have to match to the password confirmation for user password entered
import { join, logIn } from '../../services/auth' //complete for sign up feature
import { Button } from '../../components/shared/Button'


class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => 
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })

    onSignUp =  event  => {
        event.preventDefault()
        
        const { history, setUser } = this.props

        join(this.state)
            .then(() => logIn(this.state))
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
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
            // return <button type='submit'>Sign In</button>
        }
    }
    render() {
        const { email, username, password, passwordConfirmation } = this.state
        
        return(
            <div className='row'>
                <div className='form-container'>
                    <h3>Sign Up</h3>
                    <form onSubmit={this.onSignUp}>
                        <label>Username</label>
                        <input
                            required
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Enter username'
                            onChange={this.handleChange}
                        />
                        <label>Email address</label>
                        <input
                            required
                            type='text'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            required
                            type='text'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={this.handleChange}
                        />
                        <label>Password Confirmation</label>
                        <input
                            required
                            type='text'
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            placeholder='Enter passwordConfirmation'
                            onChange={this.handleChange}
                        />
                            <div className='join-buttons'>
                                <Button title='Create Account' className='create-button' />
                                <Button title='Cancel' className='create-button' />
                            </div>

                        {this.renderError()}
                    </form>
                </div>
            </div>
        )

    }


}

export default SignUp