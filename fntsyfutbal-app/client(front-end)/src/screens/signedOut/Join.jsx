// import React from 'react'
// import Layout from '../../components/shared/Layout'
// import CreateAccForm from '../forms/CreateAccForm'
// import { api } from '../../services/apiConfig'

// class Join extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             password: '',
//             firstName: '',
//             lastName: '',
//             email: '',
//             imgUrl: '',
//             errorMsg: ''
//         }
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         const { username, firstName, lastName, email, password, imgUrl } = this.state
//         const data = {
//             username,
//             password,
//             firstName,
//             lastName,
//             email,
//             imgUrl
//         }

//         // console.log({password})
//         // console.log(data)
//         api.post('/users', data)
//             .then((response) => response.status === 201 ? this.props.history.push('/') : null)
//             .catch(() => this.setState({ errorMsg: 'There was an error' }))
//     }

//     handleChange = e => this.setState({ [e.target.name]: e.target.value })

//     render() {
//         const { username, firstName, lastName, email, password, imgUrl } = this.state
//         return (
//             <Layout>
//                 <h4>Create your account!</h4>
//                 <CreateAccForm
//                     formData={{ username, firstName, lastName, email, password, imgUrl }}
//                     onChange={this.handleChange}
//                     onSubmit={this.handleSubmit}
//                 />
//             </Layout>
//         )
//     }
// }


// export default Join


import React, { Component } from 'react'            //minor glitch, the passwords dont have to match to the password confirmation for user password entered
import { join, logIn } from '../../services/auth' //complete for sign up feature

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
            return <button type='submit'>Sign In</button>
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
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )

    }


}

export default SignUp