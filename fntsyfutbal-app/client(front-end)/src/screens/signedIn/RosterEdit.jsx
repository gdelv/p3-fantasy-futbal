import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RosterForm from '../../components/shared/RosterForm'
// import Layout from '../../components/shared/Layout'
import { getRosterById, updateRoster } from '../../services/rosters'

class RosterEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roster: {
                title: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        try {
            const roster = await getRosterById(this.props.match.params.id)
            this.setState({ roster })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }
        const editedRoster = Object.assign(this.state.roster, updatedField)
        this.setState({ roster: editedRoster })
    }

    handleSubmit = event => {
        event.preventDefault()

        updateRoster(this.props.match.params.id)
            .then(() => this.setState({ updated: true }))
            .catch(console.error)
    }

    render() {
        const { roster, updated } = this.state
        const { handleChange, handleSubmit } = this

        if (updated) {
            return <Redirect to={`/rosters/${this.props.match.params.id}`} />
        }

        return (
            <>
                <RosterForm
                    roster={roster}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/rosters${this.props.match.params.id}`}
                />
            </>
        )
    }
}

export default RosterEdit