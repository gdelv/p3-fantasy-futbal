import React, { Component, Redirect } from 'react'
import Layout from '../../components/shared/Layout'
// import { createRoster } from '../../../../controllers/index'
import { Input } from '../../components/shared/Input'

import { Button } from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'


class Roster extends Component {
    constructor() {
        super()
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
        this.props.addRoster(this.state.roster)
            // createRoster(this.state.roster)
            .then(res =>
                res.status === 201
                    ? this.setState({
                        createdRoster: res.data.roster
                    })
                    : null
            )
            .catch(console.error)
    }

    handleInput = event => {
        event.preventDefault()
        const title = event.inputTitle.value
        console.log("inputTitle")

        this.setState = {
            title
        }
        console.log(title)
    }

    render() {
        const { onChange, handleSubmit } = this
        const { createdRoster, title } = this.state
        console.log(this.state)
        const { history } = this.props

        if (createdRoster) {
            return <Redirect to={`/`} />
        }

        return (
            <Layout>
                <form name="Roster-Form">
                    <input
                        type="text"
                        name='inputTitle'
                        title='title'
                        history={history}
                        placeholder='Roster Title'
                        onChange={(e) => onChange(e)}
                        handleSubmit={handleSubmit}
                        cancelPath='/'
                    />
                    
                    <NavLink to='addPlayers'>
                        <Button title='Add Players' className='submitCreateRoster' />
                    </NavLink>

                </form>
            </Layout>
        )
    }
}
export default Roster