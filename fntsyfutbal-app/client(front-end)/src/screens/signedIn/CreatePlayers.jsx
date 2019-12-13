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
        const { history } = this.props

        if (createdPlayer) {
            return <Redirect to={`/`} />
        }

        return (
            <Layout>
            </Layout>
        )
    }
}


export default CreatePlayers