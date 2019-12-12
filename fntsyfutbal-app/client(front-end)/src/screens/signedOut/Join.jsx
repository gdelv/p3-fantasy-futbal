import React from 'react'
import Layout from '../../components/shared/Layout'
import CreateAccForm from '../forms/CreateAccForm'
import { join } from '../../services/auth'
import socerball from '../images/socerball.png'

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
        join(data)
        .then((res) => this.props.setUser(res.user))
        .then(()=> this.props.history.push('/'))
        .catch(()=> this.setState({errorMsg: 'Something went wrong'}))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { username, firstName, lastName, email, password, imgUrl } = this.state
        return (
    
            <div className='join-page'>

              <div className='join-header'>
                  <img src={socerball} alt='' />
                <h4>Create your account!</h4>
              </div>
                <CreateAccForm
                    formData={{ username, firstName, lastName, email, password, imgUrl }}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                {this.state.errorMsg ? <p>{this.state.errorMsg}</p>: null}
            </div>
            
        )
    }
}


export default Join