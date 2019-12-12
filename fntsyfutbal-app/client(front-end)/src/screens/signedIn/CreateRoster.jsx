import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout'
import { Button } from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'
import { createRoster } from ''

class CreateRoster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roster: {
                title: "",
                link: ""
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
        createRoster(this.state.roster)
            .then(res =>
                res.status === 201
                    ? this.setState({
                        createdRoster: res.data.roster
                    })
                    : null
            )
            .catch(console.error)
    }

    render() {
        const { handleChange, handleSubmit } = this
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
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
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


export default CreateRoster