import React, { Component } from 'react'         
import { join, logIn } from '../../services/auth'
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
        } 
    }
    render() {
        const { email, username, password, passwordConfirmation } = this.state
        
        return(
            <div className='row'>
                <div className='form-container'>
                    <h2>SIGN UP</h2>
                    <form className='signUpForm'onSubmit={this.onSignUp}>
                        <label className='signUpLabel'>Username</label>
                        <input
                            required
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Enter username'
                            onChange={this.handleChange}
                        />
                        <label className='signUpLabel'>Email address</label>
                        <input
                            required
                            type='text'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={this.handleChange}
                        />
                        <label className='signUpLabel'>Password</label>
                        <input
                            required
                            type='text'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={this.handleChange}
                        />
                        <label className='signUpLabel'>Password Confirmation</label>
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