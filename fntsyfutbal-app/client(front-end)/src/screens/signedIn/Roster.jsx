import React from 'react'
import Layout from '../../components/shared/Layout'
import { create } from 'domain'
class Roster extends Component {
    constructor() {
        super(props)
        this.state = {
            roster: {
                title: ""
            },
            createdRoster: null
        }
    }
    handleChange = event => {
        const updatedField = {
            [event.target.name]: event.target.value
        }
        const editedRoster = Object.assign(this.state.roster, updatedField)
        this.setState({
            roster: editedRoster
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.createdRoster(this.state.roster)
        createdRoster(this.state.roster)
        .then(res =>
            res.status === 201
            ? this.setState({ createdRoster: res.data.roster})
            :null
            )
            .catch(console.error)
    }
    render() {
        const { handleChange, handleSubmit }
        const { createdRoster, roster } = this.state
        console.log(createdRoster)
        const { history } = this.props
        if (createdRoster) {
            return <Redirect to={`/userhome`} />
        }
        return (
            <Layout>
                <h4>Current Roster:</h4>
            </Layout>
        )
    }
}
export default Roster