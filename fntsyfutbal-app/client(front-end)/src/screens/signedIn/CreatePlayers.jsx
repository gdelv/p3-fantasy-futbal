import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout'
import { Button } from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'
import { createPlayer } from '../../services/players'

class CreatePlayers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roster: {
                title: "",
                link: ""
            },
            createdPlayer: null
        }
    }

    handleChange = event => {
        const updatedField = {
            [event.target.name]: event.target.value
        }
        const editedPlayer = Object.assign(this.state.player, updatedField)
        this.setState({
            player: editedPlayer
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addPlayer(this.state.player)
        createPlayer(this.state.player)
            .then(res =>
                res.status === 201
                    ? this.setState({
                        createdPlayer: res.data.player
                    })
                    : null
            )
            .catch(console.error)
    }

    render() {
        const { handleChange, handleSubmit } = this
        const { createdPlayer, title } = this.state
        console.log(this.state)
        const { history } = this.props

        if (createdPlayer) {
            return <Redirect to={`/`} />
        }

        return (
            <Layout>
                <form name="Player-Form">
                    <p>First Forward</p>
                    <input
                        type="text"
                        name='Forward1'
                        title={title}
                        history={history}
                        placeholder='Roster Title'
                        onChange={handleChange}
                        handleSubmit={handleSubmit}
                        cancelPath='/'
                    />
                    <p>Second Forward</p>
                    <input
                        type="text"
                        name='Forward2'
                        title={this.state.second}
                        history={history}
                        placeholder='Roster Title'
                        onChange={handleChange}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>First Midfielder</p>
                    <input
                        type="text"
                        name='Midfield1'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Second Midfielder</p>
                    <input
                        type="text"
                        name='Midfield2'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Third Midfielder</p>
                    <input
                        type="text"
                        name='Midfield3'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Fourth Midfielder</p>
                    <input
                        type="text"
                        name='Midfield4'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>First Defender</p>
                    <input
                        type="text"
                        name='Defender1'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Second Defender</p>
                    <input
                        type="text"
                        name='Defender2'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Third Defender</p>
                    <input
                        type="text"
                        name='Defender3'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Fourth Defender</p>
                    <input
                        type="text"
                        name='Defender4'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Goalie</p>
                    <input
                        type="text"
                        name='Goalie'
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


export default CreatePlayers