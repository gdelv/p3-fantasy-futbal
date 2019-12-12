import { Component } from 'react'
import { signOut } from '../../services/auth' //complete for signout feature

class SignOut extends Component {
    componentDidMount() {
        const { history, clearUser, user } = this.props
        signOut(user)
            .then(() => clearUser())
            .finally(() => history.push('/'))
    }
    render() {
        return ''
    }
}

export default SignOut