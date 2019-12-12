// import React from 'react'
// import Layout from '../../components/shared/Layout'
// import LogInForm from '../forms/LogInForm'
// import { api } from '../../services/apiConfig'

// class LogIn extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             password: '',
//             errorMsg: ''
//         }
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         const { username, password} = this.state
//         const data = {
//             username,
//             password
//         }
//         api.post('/users', data)
//             .then((response) => response.status === 201 ? this.props.history.push('/') : null)
//             .catch(() => this.setState({ errorMsg: 'There was an error' }))
//     }

//     handleChange = e => this.setState({ [e.target.name]: e.target.value })

//     render() {
//         const { username, password } = this.state
//         return (
//             <Layout>
//                 <h4>Log In to your account!</h4>
//                 <LogInForm
//                     formData={{ username, password }}
//                     onChange={this.handleChange}
//                     onSubmit={this.handleSubmit}
//                 />
//             </Layout>
//         )
//     }
// }


// export default LogIn

import React, { Component } from 'react'
import { logIn } from "../../services/auth"; //complete for now
import LogInForm from '../forms/LogInForm';
import socerball from './../images/socerball.png'

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
            return <button type='submit'>Sign In</button>
        }
    }

    render() {
        const { username, password } = this.state

        return (
            // <LogInForm formData={username, password} handleChange={this.handleChange}/>
            // <LogInForm/>
            <div className='row'>
                <div className='form-container'>
                    <div className='sign-in'>
                        <img src={socerball} alt="" />
                        <h3>Sign In</h3>
                    </div>
                    {/* <div className='placeholder-login'> */}
                    <form onSubmit={this.onSignIn}>
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
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default LogIn